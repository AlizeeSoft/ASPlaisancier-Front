// ProfileStackNavigator.tsx

import React from "react"
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ProfileStackParamsList } from "./types"

const Stack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default ProfileStackNavigator;

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Profile</Text>
        </View>
    );
};