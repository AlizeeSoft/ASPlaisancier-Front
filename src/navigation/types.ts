// navigation/types.ts

import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamsList = {
    Tabs: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
    // add tabs
}