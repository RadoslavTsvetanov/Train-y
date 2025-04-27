package com.antoan.trainy.navigation

enum class Destinations(val route: String) {
    Home("home"),
    Login("login"),
    Register("register"),
    Card("card"),
    Forums("forum"),
    Forum("forum/{id}"),
//    Profile("profile"),
    Analytics("analytics");
}