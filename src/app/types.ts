// app/types.ts

import { ColorValue, StatusBarStyle } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { SvgProps } from "react-native-svg";

import { BottomTabParamList } from "@/navigation/types";

export type ThemeConfig = {
    // SplashScreen
    splashLogo: number;
    splashBackgroundColor: ColorValue;
    splashAccentColor: ColorValue;

    // StatusBar (Android only < 15)
    statusBarStyle: StatusBarStyle;
    statusBarBackgroundColor: ColorValue;
}

export type TabConfig = {
    stack: keyof BottomTabParamList;
    label: string;
    icon: LucideIcon | React.FC<SvgProps> ;
}   

export type AppConfig = {
    theme: ThemeConfig;
    tabs: TabConfig[];
}