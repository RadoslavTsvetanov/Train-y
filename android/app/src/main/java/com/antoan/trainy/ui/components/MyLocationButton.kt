package com.antoan.trainy.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.model.CameraPosition
import com.google.android.gms.maps.model.LatLng
import com.google.maps.android.compose.CameraPositionState
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

@Composable
fun MyLocationButton(
    userLocation: LatLng,
    cameraPositionState: CameraPositionState,
    coroutineScope: CoroutineScope,
    size: Dp = 48.dp
) {
    IconButton(
        onClick = {
            coroutineScope.launch {
                cameraPositionState.animate(
                    CameraUpdateFactory.newCameraPosition(
                        CameraPosition.fromLatLngZoom(userLocation, 16f)
                    )
                )
            }
        },
        modifier = Modifier
            .size(size)
            .background(Color.White.copy(alpha = 0.9f), CircleShape)
    ) {
        Icon(
            imageVector = Icons.Default.Home,
            contentDescription = "My Location",
            tint = Color.Black,
        )
    }
}

