package com.antoan.trainy.ui.screens

import android.Manifest
import android.annotation.SuppressLint
import android.os.Looper
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.antoan.trainy.R
import com.antoan.trainy.navigation.Destinations
import com.antoan.trainy.ui.components.AnalyticsButton
import com.antoan.trainy.ui.components.CardButton
import com.antoan.trainy.ui.components.FilterMenu
import com.antoan.trainy.ui.components.FilterMenuButton
import com.antoan.trainy.ui.components.MyLocationButton
import com.google.android.gms.location.LocationCallback
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationResult
import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.Priority
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.model.CameraPosition
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.BitmapDescriptorFactory
import com.google.android.gms.maps.model.MapStyleOptions
import com.google.maps.android.compose.CameraMoveStartedReason
import com.google.maps.android.compose.GoogleMap
import com.google.maps.android.compose.MapProperties
import com.google.maps.android.compose.MapUiSettings
import com.google.maps.android.compose.Marker
import com.google.maps.android.compose.MarkerState
import com.google.maps.android.compose.rememberCameraPositionState
import kotlinx.coroutines.delay
import kotlin.math.hypot
import kotlin.math.sqrt

@SuppressLint("MissingPermission")
@Composable
fun HomeScreen(
    navController: NavController
) {
    val context = LocalContext.current
    var hasLocationPermission by remember { mutableStateOf(false) }
    val fusedLocationClient = LocationServices.getFusedLocationProviderClient(context)

    var userLocation by remember { mutableStateOf<LatLng?>(null) }
    var followUser by remember { mutableStateOf(true) }
    val coroutineScope = rememberCoroutineScope()

    val locationRequest = remember {
        LocationRequest.create().apply {
            interval = 2000
            fastestInterval = 1000
            priority = Priority.PRIORITY_HIGH_ACCURACY
        }
    }

    val locationCallback = remember {
        object : LocationCallback() {
            override fun onLocationResult(result: LocationResult) {
                val loc = result.lastLocation ?: return
                userLocation = LatLng(loc.latitude, loc.longitude)
            }
        }
    }

    val permissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) { perms ->
        hasLocationPermission = perms[Manifest.permission.ACCESS_FINE_LOCATION] == true
                || perms[Manifest.permission.ACCESS_COARSE_LOCATION] == true
    }

    LaunchedEffect(Unit) {
        permissionLauncher.launch(
            arrayOf(
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION
            )
        )
    }

    LaunchedEffect(hasLocationPermission) {
        if (hasLocationPermission) {
            fusedLocationClient.requestLocationUpdates(
                locationRequest, locationCallback, Looper.getMainLooper()
            )
        } else {
            fusedLocationClient.removeLocationUpdates(locationCallback)
        }
    }


    val cameraPositionState = rememberCameraPositionState {
        position = CameraPosition.fromLatLngZoom(
            userLocation ?: LatLng(42.6977, 23.3219),
            16f
        )
    }

    LaunchedEffect(userLocation, followUser) {
        if (followUser) {
            userLocation?.let { loc ->
                cameraPositionState.animate(
                    CameraUpdateFactory.newCameraPosition(
                        CameraPosition.fromLatLngZoom(loc, 16f)
                    )
                )
            }
        }
    }

    val busPositions = remember { mutableStateListOf<LatLng>() }
    val busDirs = remember { mutableStateListOf<Pair<Double, Double>>() }
    val busHasPassed = remember { mutableStateListOf<Boolean>() }
    val trolleyPositions = remember { mutableStateListOf<LatLng>() }
    val trolleyDirs = remember { mutableStateListOf<Pair<Double, Double>>() }
    val trolleyHasPassed = remember { mutableStateListOf<Boolean>() }
    val tramPositions = remember { mutableStateListOf<LatLng>() }
    val tramDirs = remember { mutableStateListOf<Pair<Double, Double>>() }
    val tramHasPassed = remember { mutableStateListOf<Boolean>() }
    val metroPositions = remember { mutableStateListOf<LatLng>() }
    val metroDirs = remember { mutableStateListOf<Pair<Double, Double>>() }
    val metroHasPassed = remember { mutableStateListOf<Boolean>() }

    val busPassengers = listOf(12, 8)
    val trolleyPassengers = listOf(5, 3)
    val tramPassengers = listOf(20, 14)
    val metroPassengers = listOf(30, 25)

    LaunchedEffect(Unit) {
        while (userLocation == null) delay(100)
        val start = userLocation!!

        fun initLine(
            positions: MutableList<LatLng>,
            dirs: MutableList<Pair<Double, Double>>,
            passed: MutableList<Boolean>,
            offsets: List<Pair<Double, Double>>
        ) {
            positions.clear()
            offsets.forEach { (dy, dx) ->
                positions += LatLng(start.latitude + dy, start.longitude + dx)
            }
            dirs.clear(); passed.clear()
            positions.forEach { pos ->
                val deltaX = start.longitude - pos.longitude
                val deltaY = start.latitude - pos.latitude
                val len = sqrt(deltaX * deltaX + deltaY * deltaY)
                dirs += (deltaX / len to deltaY / len)
                passed += false
            }
        }

        initLine(busPositions, busDirs, busHasPassed, listOf(0.002 to 0.0, -0.002 to 0.0))
        initLine(
            trolleyPositions,
            trolleyDirs,
            trolleyHasPassed,
            listOf(0.0 to 0.002, 0.0 to -0.002)
        )
        initLine(tramPositions, tramDirs, tramHasPassed, listOf(0.002 to 0.002, -0.002 to -0.002))
        initLine(
            metroPositions,
            metroDirs,
            metroHasPassed,
            listOf(0.002 to -0.002, -0.002 to 0.002)
        )

        val step = 0.000005
        val passThreshold = 0.0003

        while (true) {
            delay(100)
            fun stepLine(
                positions: MutableList<LatLng>,
                dirs: MutableList<Pair<Double, Double>>,
                passed: MutableList<Boolean>
            ) {
                for (i in positions.indices) {
                    var (dx, dy) = dirs[i]
                    val loc = userLocation ?: continue
                    val dist = hypot(
                        positions[i].latitude - loc.latitude,
                        positions[i].longitude - loc.longitude
                    )
                    if (!passed[i] && dist < passThreshold) {
                        passed[i] = true
                        dx = -dx; dy = -dy
                        dirs[i] = dx to dy
                    }
                    val old = positions[i]
                    positions[i] = LatLng(
                        old.latitude + dy * step,
                        old.longitude + dx * step
                    )
                }
            }

            stepLine(busPositions, busDirs, busHasPassed)
            stepLine(trolleyPositions, trolleyDirs, trolleyHasPassed)
            stepLine(tramPositions, tramDirs, tramHasPassed)
            stepLine(metroPositions, metroDirs, metroHasPassed)
        }
    }

    var selectedBus by remember { mutableStateOf<Int?>(null) }
    LaunchedEffect(cameraPositionState.cameraMoveStartedReason) {
        if (cameraPositionState.cameraMoveStartedReason == CameraMoveStartedReason.GESTURE) {
            followUser = false
            selectedBus = null
        }
    }

    LaunchedEffect(selectedBus) {
        selectedBus?.let { id ->
            while (selectedBus == id) {
                val target = when (id) {
                    in 1..2 -> busPositions[id - 1]
                    in 3..4 -> trolleyPositions[id - 3]
                    in 5..6 -> tramPositions[id - 5]
                    in 7..8 -> metroPositions[id - 7]
                    else -> return@LaunchedEffect
                }
                cameraPositionState.animate(
                    CameraUpdateFactory.newCameraPosition(
                        CameraPosition.fromLatLngZoom(target, 17f)
                    )
                )
                delay(100L)
            }
        }
    }

    var menuExpanded by remember { mutableStateOf(false) }
    var showBuses by remember { mutableStateOf(true) }
    var showTrolley by remember { mutableStateOf(true) }
    var showTrams by remember { mutableStateOf(true) }
    var showMetro by remember { mutableStateOf(true) }

    val darkMapStyle = remember {
        MapStyleOptions.loadRawResourceStyle(context, R.raw.map_style_dark)
    }

    val mapProperties = remember(hasLocationPermission) {
        MapProperties(
            isMyLocationEnabled = hasLocationPermission,
            mapStyleOptions     = darkMapStyle   // ← apply dark mode here
        )
    }

    Box(Modifier.fillMaxSize()) {
        GoogleMap(
            modifier = Modifier.fillMaxSize(),
            cameraPositionState = cameraPositionState,
            properties = mapProperties,
            uiSettings = MapUiSettings(
                zoomControlsEnabled = false,
                mapToolbarEnabled = false,
                myLocationButtonEnabled = false
            ),
            onMapClick = { selectedBus = null }
        ) {
            if (showBuses) {
                busPositions.forEachIndexed { idx, pos ->
                    Marker(
                        state = MarkerState(position = pos),
                        title = "Bus ${idx + 1}",
                        snippet = "Passengers: ${busPassengers[idx]}",
                        icon = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_RED),
                        onClick = {
                            selectedBus = 1 + idx
                            false
                        }
                    )
                }
            }
            if (showTrolley) {
                trolleyPositions.forEachIndexed { idx, pos ->
                    Marker(
                        state = MarkerState(position = pos),
                        title = "Trolley ${idx + 1}",
                        snippet = "Passengers: ${trolleyPassengers[idx]}",
                        icon = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_YELLOW),
                        onClick = {
                            selectedBus = 3 + idx
                            false
                        }
                    )
                }
            }
            if (showTrams) {
                tramPositions.forEachIndexed { idx, pos ->
                    Marker(
                        state = MarkerState(position = pos),
                        title = "Tram ${idx + 1}",
                        snippet = "Passengers: ${tramPassengers[idx]}",
                        icon = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_ORANGE),
                        onClick = {
                            selectedBus = 5 + idx
                            false
                        }
                    )
                }
            }
            if (showMetro) {
                metroPositions.forEachIndexed { idx, pos ->
                    Marker(
                        state = MarkerState(position = pos),
                        title = "Metro ${idx + 1}",
                        snippet = "Passengers: ${metroPassengers[idx]}",
                        icon = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_AZURE),
                        onClick = {
                            selectedBus = 7 + idx
                            false
                        }
                    )
                }
            }
        }

        Box(
            modifier = Modifier
                .align(Alignment.BottomStart)
                .padding(16.dp, 16.dp, 16.dp, 30.dp)
        ) {
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                if (hasLocationPermission) {
                    MyLocationButton(
                        userLocation        = userLocation ?: LatLng(42.6977, 23.3219),
                        cameraPositionState = cameraPositionState,
                        coroutineScope      = coroutineScope
                    )
                }
                CardButton(onClick = { navController.navigate(Destinations.Card.route) })

            }
            FilterMenu(
                menuExpanded         = menuExpanded,
                onMenuExpandedChange = { menuExpanded = it },
                showBuses            = showBuses,
                onShowBusesChange    = { showBuses = it },
                showTrolley          = showTrolley,
                onShowTrolleyChange  = { showTrolley = it },
                showTrams            = showTrams,
                onShowTramsChange    = { showTrams = it },
                showMetro            = showMetro,
                onShowMetroChange    = { showMetro = it },
                modifier             = Modifier.align(Alignment.TopEnd),
                menuOffset           = DpOffset(0.dp, (-8).dp)
            )
        }
        Box(
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(16.dp, 16.dp, 16.dp, 30.dp)
        ) {
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                AnalyticsButton(onClick = { navController.navigate(Destinations.Analytics.route) })
                FilterMenuButton(onClick = { menuExpanded = !menuExpanded })
            }
        }
    }
}