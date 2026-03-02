// HomeStackNavigator.tsx

import React from "react"
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeStackParamsList } from "./types"

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
            <Text style={{ width: "100%", padding: 16, backgroundColor: "white", elevation: 5, borderRadius: 8, shadowColor: "black", shadowOffset: { width: 4, height: 0 }, shadowRadius: 12, shadowOpacity: 0.12 }}>Home</Text>
        </View>
    );
};