package com.antoan.trainy.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * A circular gear button to open the transport filter menu.
 *
 * @param onClick callback when the gear is pressed
 * @param size size of the button (default 48.dp)
 */
@Composable
fun FilterMenuButton(
    onClick: () -> Unit,
    size: Dp = 48.dp
) {
    IconButton(
        onClick = onClick,
        modifier = Modifier
            .size(size)
            .background(Color.White.copy(alpha = 0.9f), CircleShape)
    ) {
        Icon(
            imageVector = Icons.Default.Settings,
            contentDescription = "Filter Transport",
            tint = Color.Black,
        )
    }
}
