// data/MockData.kt
package com.antoan.trainy.data

import com.antoan.trainy.data.models.Forum
import com.antoan.trainy.data.models.Message
import com.antoan.trainy.data.models.User

object MockData {
    val forums = listOf(
        Forum(
            title = "Announcements",
            messages = listOf(
                Message(User("Admin"), "Welcome to the new Elysia forum! 🎉"),
                Message(User("Admin"), "Please read the rules before posting.")
            )
        ),
        Forum(
            title = "General Chat",
            messages = listOf(
                Message(User("Alice"), "Hey everyone, how’s your day going?"),
                Message(User("Bob"), "Pretty good! Just enjoying some coffee ☕")
            )
        ),
        Forum(
            title = "Support",
            messages = listOf(
                Message(User("Charlie"), "I’m having trouble logging in."),
                Message(User("SupportBot"), "Have you tried resetting your password?")
            )
        )
    )
}
