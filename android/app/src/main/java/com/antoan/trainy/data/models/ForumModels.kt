package com.antoan.trainy.data.models

data class User(val name: String)
data class Message(val user: User, val content: String)
data class Forum(val title: String, val messages: List<Message>)
