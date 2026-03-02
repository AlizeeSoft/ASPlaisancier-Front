// app/configs/GRUISS.ts

import { LayoutDashboard, User } from "lucide-react-native";

import { AppConfig } from "../types";

import { Harbor } from "@/assets/svg";

const colors = {
    PRIMARY: "#054360",
    ACCENT: "#f58172",
    BACKGROUND: "#f7fcfe",
    WHITE: "#fff",
    BACK_WAVE: "#336e88cc",
    FRONT_WAVE: "#0f5b7ee6"
}

export const GRUISS: AppConfig = {
    theme: {
        background: colors.BACKGROUND,
        logo: require("@/assets/logos/gruissan.png"),
        splash: {
            backgroundColor: colors.PRIMARY,
            loaderColor: colors.WHITE,
        },
        statusBar: {
            style: "dark-content",
            backgroundColor: colors.PRIMARY,
        },
        tabBar: {
            activeTintColor: colors.PRIMARY,
        },
        accessPortal: {
            backgroundColor: colors.PRIMARY,
            backWaveColor: colors.BACK_WAVE,
            frontWaveColor: colors.FRONT_WAVE,
            buttonColor: colors.ACCENT,
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