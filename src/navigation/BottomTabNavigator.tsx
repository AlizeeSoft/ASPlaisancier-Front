// BottomTabNavigator.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStackNavigator from "./HomeStackNavigator";
import HarborStackNavigator from "./HarborStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

import TabIcon from "@/components/TabIcon";

import { BottomTabParamList } from "./types";

const Tab = createBottomTabNavigator<BottomTabParamList>();

import { useApp } from "@/app";

const StackComponents = {
    HomeStack: HomeStackNavigator,
    HarborStack: HarborStackNavigator,
    ProfileStack: ProfileStackNavigator,
}

const BottomTabNavigator: React.FC = () => {
    const { tabs, theme } = useApp();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: theme.tabBar.inactiveTintColor,
        }}>
            {tabs.map((tab) => (
                <Tab.Screen 
                    key={tab.stack}
                    name={tab.stack}
                    component={StackComponents[tab.stack]}
                    options={{
                        tabBarLabel: tab.label,
                        tabBarIcon: ({ color, size }) => (
                            <TabIcon icon={tab.icon} size={size} color={color} />
                        )
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
