package com.antoan.trainy.ui.components

import androidx.compose.material3.Checkbox
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp

@Composable
fun FilterMenu(

    menuExpanded: Boolean,
    onMenuExpandedChange: (Boolean) -> Unit,
    showBuses: Boolean,
    onShowBusesChange: (Boolean) -> Unit,
    showTrolley: Boolean,
    onShowTrolleyChange: (Boolean) -> Unit,
    showTrams: Boolean,
    onShowTramsChange: (Boolean) -> Unit,
    showMetro: Boolean,
    onShowMetroChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier,
    menuOffset: DpOffset = DpOffset(0.dp, 0.dp)
) {
    DropdownMenu(
        expanded = menuExpanded,
        onDismissRequest = { onMenuExpandedChange(false) },
        offset = menuOffset,
        modifier = modifier
    ) {
        DropdownMenuItem(
            text = { Text("Buses") },
            leadingIcon = {
                Checkbox(
                    checked = showBuses,
                    onCheckedChange = { onShowBusesChange(it) }
                )
            },
            onClick = { onShowBusesChange(!showBuses) }
        )
        DropdownMenuItem(
            text = { Text("Trolleybuses") },
            leadingIcon = {
                Checkbox(
                    checked = showTrolley,
                    onCheckedChange = { onShowTrolleyChange(it) }
                )
            },
            onClick = { onShowTrolleyChange(!showTrolley) }
        )
        DropdownMenuItem(
            text = { Text("Trams") },
            leadingIcon = {
                Checkbox(
                    checked = showTrams,
                    onCheckedChange = { onShowTramsChange(it) }
                )
            },
            onClick = { onShowTramsChange(!showTrams) }
        )
        DropdownMenuItem(
            text = { Text("Metro") },
            leadingIcon = {
                Checkbox(
                    checked = showMetro,
                    onCheckedChange = { onShowMetroChange(it) }
                )
            },
            onClick = { onShowMetroChange(!showMetro) }
        )
    }
}