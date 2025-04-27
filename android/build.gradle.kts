// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
    id("org.openapi.generator") version "6.0.0"
}

openApiGenerate {
    generatorName.set("kotlin")
    library.set("jvm-retrofit2")

    inputSpec.set("$rootDir/app/src/main/res/openapi.json")

    outputDir.set("$rootDir/app/build/generated/openapi")

    invokerPackage.set("com.antoan.trainy.openapi")
    apiPackage.set("com.antoan.trainy.openapi.apis")
    modelPackage.set("com.antoan.trainy.openapi.models")

    configOptions.set(
        mapOf(
            "serializationLibrary" to "gson",
            "dateLibrary"         to "java8"
        )
    )
}