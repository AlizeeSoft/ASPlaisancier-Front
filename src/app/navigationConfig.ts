// app/navigationConfig.ts

import { DefaultTheme, Theme } from "@react-navigation/native";
import { ThemeConfig } from "./types";

export const createNavigationTheme = (colors: ThemeConfig): Theme => ({
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.tabBar.activeTintColor,
        card: colors.tabBar.backgroundColor ?? DefaultTheme.colors.card,
        border: colors.tabBar.borderTopColor ?? DefaultTheme.colors.border,
    }
});