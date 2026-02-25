// navigation/types.ts

import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamsList = {
    Tabs: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamsList>;
    HarborStack: NavigatorScreenParams<HarborStackParamsList>;
    ProfileStack: NavigatorScreenParams<ProfileStackParamsList>;
}

export type HomeStackParamsList = {
    Home: undefined
}

export type HarborStackParamsList = {
    Harbor: undefined
}

export type ProfileStackParamsList = {
    Profile: undefined
}