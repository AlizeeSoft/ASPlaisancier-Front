// app/useApp.ts

import { useContext } from "react";

import { AppContext } from "./AppProvider";
import { AppConfig } from "./types";

export const useApp = (): AppConfig => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used inside AppProvider");

    return context;
};