// app/configs/index.ts

import { AppConfig } from "../types";

import { GRUISS } from "./GRUISS";
import { CALVAD } from "./CALVAD";

const Configs: Record<string, AppConfig> = {
    GRUISS,
    CALVAD,
};

export const getAppConfig = (ID_PO: string): AppConfig => { return Configs[ID_PO] };