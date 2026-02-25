// app/types.ts

import { ColorValue, StatusBarStyle } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { SvgProps } from "react-native-svg";

import { BottomTabParamList } from "@/navigation/types";

export type SplashConfig = {
    logo: number;
    backgroundColor: ColorValue;
    loaderColor: ColorValue;
}

export type StatusBarConfig = {
    style: StatusBarStyle;
    backgroundColor: ColorValue;
}

export type TabBarConfig = {
    inactiveTintColor?: string;     // Options du TabBar
    activeTintColor: string;        // Thème de navigation
    borderTopColor?: string;        // Thème de navigation
    backgroundColor?: string;       // Thème de navigation
}

export type TabConfig = {
    stack: keyof BottomTabParamList;
    label: string;
    icon: LucideIcon | React.FC<SvgProps> ;
}   

export type ThemeConfig = {
    splash: SplashConfig;

    // StatusBar (Android only < 15)
    statusBar: StatusBarConfig;

    // Tab Bar options
    tabBar: TabBarConfig;
}

export type AppConfig = {
    theme: ThemeConfig;
    tabs: TabConfig[];
}