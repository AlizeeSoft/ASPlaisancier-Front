// app/configs/GRUISS.ts

import { LayoutDashboard, User } from "lucide-react-native";

import { AppConfig } from "../types";

import { Harbor } from "@/assets/svg";

export const GRUISS: AppConfig = {
    theme: {
        splashLogo: require("@/assets/logos/gruissan.png"),
        splashBackgroundColor: "#054360",
        splashAccentColor: "#ffffff",

        statusBarStyle: "light-content",
        statusBarBackgroundColor: "#054360",
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