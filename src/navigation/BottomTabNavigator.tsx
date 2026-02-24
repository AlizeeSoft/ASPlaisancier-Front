// BottomTabNavigator.tsx

import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Hello" component={HelloScreen} options={{
                tabBarIcon: ({ color, size }) => <FontAwesome6 name="house" iconStyle="solid" size={size} color={color} />
            }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const HelloScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Hello, World!</Text>
        </View>
    );
};