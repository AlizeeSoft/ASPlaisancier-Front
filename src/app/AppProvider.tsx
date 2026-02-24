// app/AppProvider.tsx

import React, { createContext, useMemo } from "react";
import { NativeModules } from "react-native";

import { AppConfig } from "./types";
import { getAppConfig } from "./configs";

const { AppConfig: NativeAppConfig } = NativeModules;

export const AppContext = createContext<AppConfig | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ID_PO = NativeAppConfig?.ID_PO;
    if (!ID_PO) throw new Error("AppProvider: ID_PO is missing from NativeModules.AppConfig");

    const config = useMemo(() => getAppConfig(ID_PO), [ID_PO]);

    return (
        <AppContext.Provider value={config}>
            {children}
        </AppContext.Provider>
    );
};