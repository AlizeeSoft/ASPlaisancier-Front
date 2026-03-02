// SplashScreen.tsx

import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { View, Animated, Easing, ActivityIndicator, StatusBar } from "react-native";

import { SplashScreenProps } from "./SplashScreen.types";
import { styles } from "./SplashScreen.styles";

import { isColorDark } from "@/utils/color";

import { useApp } from "@/app";

const BASE_LOGO_SIZE = 200;
const LOGO_IN_MS = 1000;

const SplashScreen: React.FC<SplashScreenProps> = ({ isAppReady, onFinish }) => {
    const { theme } = useApp();

    const splashBarStyle = useMemo(() => {
        const dark = isColorDark(String(theme.splash.backgroundColor));
        return dark ? "light-content" : "dark-content";
    }, [theme.splash.backgroundColor]);

    const logoScale = useRef(new Animated.Value(0)).current;
    const hasFinished = useRef(false);

    const [animationDone, setAnimationDone] = useState<boolean>(false);

    const finishOnce = useCallback(() => {
        if (!hasFinished.current) {
            hasFinished.current = true;
            onFinish();
        }
    }, [onFinish]);

    useEffect(() => {
        Animated.timing(logoScale, {
            toValue: 1,
            duration: LOGO_IN_MS,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
        }).start(() => setAnimationDone(true));
    }, []);

    useEffect(() => {
        if (animationDone && isAppReady) finishOnce();
    }, [animationDone, isAppReady, finishOnce]);

    const logoStyle = useMemo(() => ({ transform: [{ scale: logoScale }] }), [logoScale]);

    return (
        <>
            <StatusBar barStyle={splashBarStyle} />
            <View style={{ ...styles.container, backgroundColor: theme.splash.backgroundColor }}>
                <Animated.Image
                    source={theme.logo}
                    style={[{ width: BASE_LOGO_SIZE, height: BASE_LOGO_SIZE }, logoStyle]}
                    resizeMode="contain"
                />

                {animationDone && !isAppReady && (
                    <ActivityIndicator size="small" color={theme.splash.loaderColor} style={styles.loader} />
                )}
            </View>
        </>
    );
};

export default React.memo(SplashScreen);