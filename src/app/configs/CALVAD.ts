// app/configs/CALVAD.ts

import { LayoutDashboard, User } from "lucide-react-native";

import { AppConfig } from "../types";

import { Harbor } from "@/assets/svg";

export const CALVAD: AppConfig = {
    theme: {
        splash: {
            logo: require("@/assets/logos/calvados.png"),
            backgroundColor: "#072b4d",
            loaderColor: "#ffffff"
        },
        statusBar: {
            style: "light-content",
            backgroundColor: "#072b4d",
        },
        tabBar: {
            activeTintColor: "#072b4d"
        },
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