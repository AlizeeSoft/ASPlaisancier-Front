// RootStackNavigator.tsx

import React, { useEffect, useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { SplashScreen } from "@/screens/Splash";

import BottomTabNavigator from "./BottomTabNavigator";

import { RootStackParamsList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootStackNavigator: React.FC = () => {
    const [showSplash, setShowSplash] = useState<boolean>(true);
    const [isAppReady, setIsAppReady] = useState<boolean>(false);

    useEffect(() => {
        setIsAppReady(true);
    }, []);

    if (showSplash) return <SplashScreen isAppReady={isAppReady} onFinish={() => setShowSplash(false)} />

    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default RootStackNavigator;