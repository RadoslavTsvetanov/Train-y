package com.antoan.trainy.ui.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.Divider
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.antoan.trainy.data.MockData
import com.antoan.trainy.data.models.Forum
import com.antoan.trainy.data.models.Message

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ForumInfoScreen(
    id: String?,
    onBack: () -> Unit,
    forums: List<Forum> = MockData.forums
) {
    // Find the forum matching the passed-in ID (here we’re using title as ID)
    val forum = forums.find { it.title == id }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = forum?.title ?: "Unknown Forum",
                        style = MaterialTheme.typography.titleMedium
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Back"
                        )
                    }
                }
            )
        }
    ) { padding ->
        // If forum is null, show a message; otherwise show messages list
        if (forum == null) {
            Text(
                text = "Forum not found.",
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding)
                    .padding(16.dp),
                style = MaterialTheme.typography.bodyMedium
            )
        } else {
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding)
            ) {
                // Optional header: forum title again or description
                item {
                    Text(
                        text = forum.title,
                        style = MaterialTheme.typography.headlineSmall,
                        modifier = Modifier.padding(16.dp)
                    )
                }

                // List of messages
                items(forum.messages) { message ->
                    MessageItem(message)
                    Divider(modifier = Modifier.padding(horizontal = 16.dp))
                }
            }
        }
    }
}

@Composable
private fun MessageItem(message: Message) {
    Column(modifier = Modifier.padding(16.dp)) {
        Text(
            text = message.user.name,
            style = MaterialTheme.typography.bodyMedium.copy(fontWeight = FontWeight.Bold)
        )
        Text(
            text = message.content,
            style = MaterialTheme.typography.bodyMedium,
            modifier = Modifier.padding(top = 4.dp)
        )
    }
}
