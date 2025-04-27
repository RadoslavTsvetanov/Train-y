package com.antoan.trainy.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.Checkbox
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.SheetState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FilterBottomSheet(
    sheetState: SheetState,
    onDismissRequest: () -> Unit,
    showBuses: Boolean,
    onShowBusesChange: (Boolean) -> Unit,
    showTrolley: Boolean,
    onShowTrolleyChange: (Boolean) -> Unit,
    showTrams: Boolean,
    onShowTramsChange: (Boolean) -> Unit,
    showMetro: Boolean,
    onShowMetroChange: (Boolean) -> Unit,
) {
    ModalBottomSheet(
        sheetState = sheetState,
        onDismissRequest = onDismissRequest
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text(
                text = "Show vehicles",
                style = MaterialTheme.typography.titleMedium
            )
            Row(verticalAlignment = Alignment.CenterVertically) {
                Checkbox(
                    checked = showBuses,
                    onCheckedChange = onShowBusesChange
                )
                Spacer(Modifier.width(8.dp))
                Text("Buses")
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                Checkbox(
                    checked = showTrolley,
                    onCheckedChange = onShowTrolleyChange
                )
                Spacer(Modifier.width(8.dp))
                Text("Trolleybuses")
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                Checkbox(
                    checked = showTrams,
                    onCheckedChange = onShowTramsChange
                )
                Spacer(Modifier.width(8.dp))
                Text("Trams")
            }
            Row(verticalAlignment = Alignment.CenterVertically) {
                Checkbox(
                    checked = showMetro,
                    onCheckedChange = onShowMetroChange
                )
                Spacer(Modifier.width(8.dp))
                Text("Metro")
            }
        }
    }
}
