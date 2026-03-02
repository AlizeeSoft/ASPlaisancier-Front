// app/types.ts

import { ColorValue, StatusBarStyle } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { SvgProps } from "react-native-svg";

import { BottomTabParamList } from "@/navigation/types";

export type SplashConfig = {
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

export type AccessPortalConfig = {
    backgroundColor: ColorValue;
    backWaveColor: ColorValue;
    frontWaveColor: ColorValue;
    buttonColor: ColorValue;
}

export type ThemeConfig = {
    background: string;
    logo: number;
    splash: SplashConfig;
    statusBar: StatusBarConfig;     // StatusBar (Android only < 15)
    tabBar: TabBarConfig;
    accessPortal: AccessPortalConfig;

}

export type AppConfig = {
    theme: ThemeConfig;
    tabs: TabConfig[];
}