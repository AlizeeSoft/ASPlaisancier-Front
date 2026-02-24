// app/types.ts

import { ColorValue, StatusBarStyle } from "react-native";

export type ThemeConfig = {
    // SplashScreen
    splashLogo: number;
    splashBackgroundColor: ColorValue;
    splashAccentColor: ColorValue;

    // StatusBar (Android only < 15)
    statusBarStyle: StatusBarStyle;
    statusBarBackgroundColor: ColorValue;
}

export type AppConfig = {
    theme: ThemeConfig;
}