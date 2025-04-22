package com.antoan.trainy.ui.screens

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp
import androidx.core.content.ContextCompat
import com.antoan.trainy.ui.components.FilterMenu
import com.antoan.trainy.ui.components.FilterMenuButton
import com.antoan.trainy.ui.components.MyLocationButton
import com.google.android.gms.location.LocationServices
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.model.CameraPosition
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.BitmapDescriptorFactory
import com.google.maps.android.compose.*
import kotlinx.coroutines.delay
import kotlin.math.hypot
import kotlin.math.sqrt

@SuppressLint("MissingPermission")
@Composable
fun HomeScreen() {
    val context = LocalContext.current
    var hasLocationPermission by remember { mutableStateOf(false) }
    val fusedLocationClient = LocationServices.getFusedLocationProviderClient(context)
    var userLocation by remember { mutableStateOf<LatLng?>(null) }

    val permissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) { perms ->
        val fine   = perms[Manifest.permission.ACCESS_FINE_LOCATION]  == true
        val coarse = perms[Manifest.permission.ACCESS_COARSE_LOCATION] == true
        hasLocationPermission = fine || coarse

        if (hasLocationPermission) {
            if (ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION)
                == PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_COARSE_LOCATION)
                == PackageManager.PERMISSION_GRANTED
            ) {
                fusedLocationClient.lastLocation.addOnSuccessListener { loc ->
                    loc?.let { userLocation = LatLng(it.latitude, it.longitude) }
                }
            }
        }
    }
    LaunchedEffect(Unit) {
        permissionLauncher.launch(arrayOf(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION
        ))
    }

    val mapProperties = remember(hasLocationPermission) {
        MapProperties(isMyLocationEnabled = hasLocationPermission)
    }

    val cameraPositionState = rememberCameraPositionState {
        position = CameraPosition.fromLatLngZoom(
            userLocation ?: LatLng(42.6977, 23.3219),
            16f
        )
    }
    LaunchedEffect(userLocation) {
        userLocation?.let {
            cameraPositionState.move(
                CameraUpdateFactory.newCameraPosition(
                    CameraPosition.fromLatLngZoom(it, 16f)
                )
            )
        }
    }
    val busPassengers     = listOf(12, 8)
    val trolleyPassengers = listOf(5, 3)
    val tramPassengers    = listOf(20, 14)
    val metroPassengers   = listOf(30, 25)

    val busPositions     = remember { mutableStateListOf<LatLng>() }
    val busDirs          = remember { mutableStateListOf<Pair<Double,Double>>() }
    val busHasPassed     = remember { mutableStateListOf<Boolean>() }

    val trolleyPositions = remember { mutableStateListOf<LatLng>() }
    val trolleyDirs      = remember { mutableStateListOf<Pair<Double,Double>>() }
    val trolleyHasPassed = remember { mutableStateListOf<Boolean>() }

    val tramPositions    = remember { mutableStateListOf<LatLng>() }
    val tramDirs         = remember { mutableStateListOf<Pair<Double,Double>>() }
    val tramHasPassed    = remember { mutableStateListOf<Boolean>() }

    val metroPositions   = remember { mutableStateListOf<LatLng>() }
    val metroDirs        = remember { mutableStateListOf<Pair<Double,Double>>() }
    val metroHasPassed   = remember { mutableStateListOf<Boolean>() }

    LaunchedEffect(userLocation) {
        userLocation?.let { user ->

            busPositions.clear()
            busPositions += LatLng(user.latitude  + 0.002, user.longitude)
            busPositions += LatLng(user.latitude  - 0.002, user.longitude)
            busDirs.clear(); busHasPassed.clear()
            busPositions.forEach { pos ->
                val dx = user.longitude - pos.longitude
                val dy = user.latitude  - pos.latitude
                val len = sqrt(dx*dx + dy*dy)
                busDirs += (dx/len to dy/len)
                busHasPassed += false
            }

            trolleyPositions.clear()
            trolleyPositions += LatLng(user.latitude, user.longitude + 0.002)
            trolleyPositions += LatLng(user.latitude, user.longitude - 0.002)
            trolleyDirs.clear(); trolleyHasPassed.clear()
            trolleyPositions.forEach { pos ->
                val dx = user.longitude - pos.longitude
                val dy = user.latitude  - pos.latitude
                val len = sqrt(dx*dx + dy*dy)
                trolleyDirs += (dx/len to dy/len)
                trolleyHasPassed += false
            }

            tramPositions.clear()
            tramPositions += LatLng(user.latitude + 0.002, user.longitude + 0.002)
            tramPositions += LatLng(user.latitude - 0.002, user.longitude - 0.002)
            tramDirs.clear(); tramHasPassed.clear()
            tramPositions.forEach { pos ->
                val dx = user.longitude - pos.longitude
                val dy = user.latitude  - pos.latitude
                val len = sqrt(dx*dx + dy*dy)
                tramDirs += (dx/len to dy/dy)
                tramHasPassed += false
            }

            metroPositions.clear()
            metroPositions += LatLng(user.latitude + 0.002, user.longitude - 0.002)
            metroPositions += LatLng(user.latitude - 0.002, user.longitude + 0.002)
            metroDirs.clear(); metroHasPassed.clear()
            metroPositions.forEach { pos ->
                val dx = user.longitude - pos.longitude
                val dy = user.latitude  - pos.latitude
                val len = sqrt(dx*dx + dy*dy)
                metroDirs += (dx/len to dy/len)
                metroHasPassed += false
            }

            val step = 0.000005
            val passThreshold = 0.0003
            while(true) {
                delay(100L)

                for(i in busPositions.indices) {
                    var (dx, dy) = busDirs[i]
                    val dist = hypot(
                        busPositions[i].latitude  - user.latitude,
                        busPositions[i].longitude - user.longitude
                    )
                    if (!busHasPassed[i] && dist < passThreshold) {
                        busHasPassed[i] = true
                        dx = -dx; dy = -dy
                        busDirs[i] = dx to dy
                    }
                    val old = busPositions[i]
                    busPositions[i] = LatLng(
                        old.latitude  + dy * step,
                        old.longitude + dx * step
                    )
                }

                for(i in trolleyPositions.indices) {
                    var (dx, dy) = trolleyDirs[i]
                    val dist = hypot(
                        trolleyPositions[i].latitude  - user.latitude,
                        trolleyPositions[i].longitude - user.longitude
                    )
                    if (!trolleyHasPassed[i] && dist < passThreshold) {
                        trolleyHasPassed[i] = true
                        dx = -dx; dy = -dy
                        trolleyDirs[i] = dx to dy
                    }
                    val old = trolleyPositions[i]
                    trolleyPositions[i] = LatLng(
                        old.latitude  + dy * step,
                        old.longitude + dx * step
                    )
                }

                for(i in tramPositions.indices) {
                    var (dx, dy) = tramDirs[i]
                    val dist = hypot(
                        tramPositions[i].latitude  - user.latitude,
                        tramPositions[i].longitude - user.longitude
                    )
                    if (!tramHasPassed[i] && dist < passThreshold) {
                        tramHasPassed[i] = true
                        dx = -dx; dy = -dy
                        tramDirs[i] = dx to dy
                    }
                    val old = tramPositions[i]
                    tramPositions[i] = LatLng(
                        old.latitude  + dy * step,
                        old.longitude + dx * step
                    )
                }

                for(i in metroPositions.indices) {
                    var (dx, dy) = metroDirs[i]
                    val dist = hypot(
                        metroPositions[i].latitude  - user.latitude,
                        metroPositions[i].longitude - user.longitude
                    )
                    if (!metroHasPassed[i] && dist < passThreshold) {
                        metroHasPassed[i] = true
                        dx = -dx; dy = -dy
                        metroDirs[i] = dx to dy
                    }
                    val old = metroPositions[i]
                    metroPositions[i] = LatLng(
                        old.latitude  + dy * step,
                        old.longitude + dx * step
                    )
                }
            }
        }
    }

    var selectedBus by remember { mutableStateOf<Int?>(null) }
    LaunchedEffect(cameraPositionState.cameraMoveStartedReason) {
        if (cameraPositionState.cameraMoveStartedReason == CameraMoveStartedReason.GESTURE) {
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
                    else    -> return@LaunchedEffect
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
    var showBuses   by remember { mutableStateOf(true) }
    var showTrolley by remember { mutableStateOf(true) }
    var showTrams   by remember { mutableStateOf(true) }
    var showMetro   by remember { mutableStateOf(true) }

    val coroutineScope = rememberCoroutineScope()

    Box(Modifier.fillMaxSize()) {
        GoogleMap(
            modifier            = Modifier.fillMaxSize(),
            cameraPositionState = cameraPositionState,
            properties          = mapProperties,
            uiSettings          = MapUiSettings(
                zoomControlsEnabled     = true,
                mapToolbarEnabled       = false,
                myLocationButtonEnabled = false
            ),
            onMapClick = { selectedBus = null }
        ) {
            if (showBuses) {
                busPositions.forEachIndexed { idx, pos ->
                    Marker(
                        state   = MarkerState(position = pos),
                        title   = "Bus ${idx + 1}",
                        snippet = "Passengers: ${busPassengers[idx]}",
                        icon    = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_RED),
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
                        state   = MarkerState(position = pos),
                        title   = "Trolley ${idx + 1}",
                        snippet = "Passengers: ${trolleyPassengers[idx]}",
                        icon    = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN),
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
                        state   = MarkerState(position = pos),
                        title   = "Tram ${idx + 1}",
                        snippet = "Passengers: ${tramPassengers[idx]}",
                        icon    = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_ORANGE),
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
                        state   = MarkerState(position = pos),
                        title   = "Metro ${idx + 1}",
                        snippet = "Passengers: ${metroPassengers[idx]}",
                        icon    = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_AZURE),
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
                .wrapContentSize(Alignment.BottomStart)
                .padding(16.dp)
        ) {
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                if (hasLocationPermission && userLocation != null) {
                    MyLocationButton(
                        userLocation         = userLocation!!,
                        cameraPositionState  = cameraPositionState,
                        coroutineScope       = coroutineScope
                    )
                }
                FilterMenuButton(onClick = { menuExpanded = true })
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
                modifier             = Modifier.align(Alignment.TopStart),
                menuOffset           = DpOffset(0.dp, (-8).dp)
            )
        }
    }
}