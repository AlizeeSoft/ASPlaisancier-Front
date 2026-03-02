// app/configs/CALVAD.ts

import { LayoutDashboard, User } from "lucide-react-native";

import { AppConfig } from "../types";

import { Harbor } from "@/assets/svg";

const colors = {
    PRIMARY: "#072b4d",
    ACCENT: "#13A2AF",
    BACKGROUND: "#f7fcfe",
    WHITE: "#fff",
    BACK_WAVE: "#355d83cc",
    FRONT_WAVE: "#1c476fe6"
}

export const CALVAD: AppConfig = {
    theme: {
        background: colors.BACKGROUND,
        logo: require("@/assets/logos/calvados.png"),
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
    ],
};