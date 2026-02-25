// HomeStackNavigator.tsx

import React from "react"
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeStackParamsList } from "./types"

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home</Text>
        </View>
    );
};