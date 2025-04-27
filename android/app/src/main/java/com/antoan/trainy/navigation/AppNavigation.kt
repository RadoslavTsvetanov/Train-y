package com.antoan.trainy.navigation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.antoan.trainy.ui.screens.AnalyticsScreen
import com.antoan.trainy.ui.screens.CardScreen
import com.antoan.trainy.ui.screens.ForumInfoScreen
import com.antoan.trainy.ui.screens.ForumsScreen
import com.antoan.trainy.ui.screens.HomeScreen
import com.antoan.trainy.ui.screens.LoginScreen
import com.antoan.trainy.ui.screens.RegisterScreen


@Composable
fun AppNavigation(
    navController: NavHostController = rememberNavController(),
) {

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
            composable(Destinations.Home.route) { HomeScreen(navController) }
            composable(Destinations.Login.route) { LoginScreen() }
            composable(Destinations.Register.route) { RegisterScreen() }
            composable(Destinations.Card.route) { CardScreen(onBack = { navController.popBackStack() }) }
            composable(Destinations.Forums.route) { ForumsScreen(navController) }
            composable(
                Destinations.Forum.route,
                arguments = listOf(navArgument("id") { type = NavType.StringType })
            ) { backStackEntry ->
                val id = backStackEntry.arguments?.getString("id")
                ForumInfoScreen(id = id, onBack = { navController.popBackStack() })
            }
            composable(Destinations.Analytics.route) { AnalyticsScreen() }
        }
    }
}