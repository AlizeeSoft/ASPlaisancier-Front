package com.asplaisancier

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class AppConfigModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    override fun getName(): String {
        return "AppConfig"
    }

    override fun getConstants(): MutableMap<String, Any> {
        return mutableMapOf(
            "ID_PO" to BuildConfig.ID_PO
        )
    }
}