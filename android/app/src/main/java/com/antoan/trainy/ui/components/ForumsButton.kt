package com.antoan.trainy.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

@Composable
fun ForumsButton(
    onClick: () -> Unit,
    size: Dp = 48.dp,
    ) {
    IconButton(
        onClick = onClick,
        modifier = Modifier
            .size(size)
            .background(Color.White.copy(alpha = 0.9f), CircleShape)
    ) {
        Icon(
            painter = painterResource(id = com.antoan.trainy.R.drawable.forum_icon),
            contentDescription = "Forums",
            tint = Color.Black,
            modifier = Modifier.size(24.dp)
        )
    }

}