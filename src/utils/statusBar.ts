// utils/statusBar.ts

import { Platform, StatusBarStyle } from "react-native";

import { ThemeConfig } from "@/app/types";

import { isColorDark } from "./color";

export function getStatusBarStyle(theme: ThemeConfig): StatusBarStyle {
    if (Platform.OS === "ios") return theme.statusBarStyle;

    const version = Number(Platform.Version);
    
    // Android 15+ → fond blanc par défaut, on force "dark-content"
    if (version >= 35) return "dark-content";

    // Android < 15 → on se base sur la couleur du thème
    return isColorDark(String(theme.statusBarBackgroundColor))
        ? "light-content"
        : "dark-content";
}