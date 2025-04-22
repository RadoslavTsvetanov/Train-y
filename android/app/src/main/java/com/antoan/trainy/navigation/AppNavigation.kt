package com.antoan.trainy.navigation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.antoan.trainy.ui.screens.HomeScreen
import com.antoan.trainy.ui.screens.LoginScreen
import com.antoan.trainy.ui.screens.RegisterScreen


@Composable
fun AppNavigation(
    modifier: Modifier = Modifier,
    navController: NavHostController = rememberNavController(),
) {
    // A box filling the screen, for cleaner look
    Box(modifier = Modifier
        .fillMaxSize()
    ) {
        val startDestination = Destinations.Home.route

        NavHost(
            navController = navController,
            startDestination = startDestination,
            Modifier
                .fillMaxSize()
        ) {
            composable(Destinations.Home.route) { HomeScreen() }
            composable(Destinations.Login.route) { LoginScreen() }
            composable(Destinations.Register.route) { RegisterScreen() }
        }
    }
}