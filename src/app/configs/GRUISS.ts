// app/configs/GRUISS.ts

import { LayoutDashboard, User } from "lucide-react-native";

import { AppConfig } from "../types";

import { Harbor } from "@/assets/svg";

export const GRUISS: AppConfig = {
    theme: {
        splash: {
            logo: require("@/assets/logos/gruissan.png"),
            backgroundColor: "#054360",
            loaderColor: "#ffffff"
        },
        statusBar: {
            style: "light-content",
            backgroundColor: "#054360",
        },
        tabBar: {
            activeTintColor: "#054360"
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