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
import com.antoan.trainy.R

@Composable
fun CardButton(
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
            painter = painterResource(id = R.drawable.credit_card_icon),
            contentDescription = "Use transit card",
            tint = Color.Black,
            modifier = Modifier.size(24.dp)
        )
    }
}
