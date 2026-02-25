// HarborStackNavigator.tsx

import React from "react"
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HarborStackParamsList } from "./types"

const Stack = createNativeStackNavigator<HarborStackParamsList>();

const HarborStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Harbor" component={HarborScreen} />
        </Stack.Navigator>
    );
};

export default HarborStackNavigator;

const HarborScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Harbor</Text>
        </View>
    );
};