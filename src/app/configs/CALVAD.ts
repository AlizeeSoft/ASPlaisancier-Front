// app/configs/CALVAD.ts

import { LayoutDashboard, User } from "lucide-react-native";

import { AppConfig } from "../types";

import { Harbor } from "@/assets/svg";

export const CALVAD: AppConfig = {
    theme: {
        splashLogo: require("@/assets/logos/calvados.png"),
        splashBackgroundColor: "#072b4d",
        splashAccentColor: "#ffffff",

        statusBarStyle: "light-content",
        statusBarBackgroundColor: "#072b4d",
    },
    tabs: [
        {
            stack: "HomeStack",
            label: "Accueil",
            icon: LayoutDashboard
        },
        {
            stack: "HarborStack",
            label: "Port",
            icon: Harbor,
        },
        {
            stack: "ProfileStack",
            label: "Compte",
            icon: User
        },
    ]
};