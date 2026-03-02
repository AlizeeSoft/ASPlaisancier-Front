// PortalAccessCard.tsx

import React from "react";
import { View, Image, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

import { PortalAccessCardProps } from "./PortalAccessCard.types";
import { styles } from "./PortalAccessCard.styles";

import BackWave from "@/assets/svg/back-wave.svg";
import FrontWave from "@/assets/svg/front-wave.svg";

import { useApp } from "@/app";

const PortalAccessCard: React.FC<PortalAccessCardProps> = ({ onPress }) => {
    const { theme } = useApp();

    const buttonStyle: StyleProp<ViewStyle> = [
        styles.button, 
        { backgroundColor: theme.accessPortal.buttonColor }
    ];

    return (
        <View style={styles.card}>
            <View style={styles.backgroundContainer}>
                <View style={{ flex: 1, backgroundColor: theme.accessPortal.backgroundColor }} />
                <BackWave
                    color={theme.accessPortal.backWaveColor}
                    style={{ position: "absolute", bottom: -17, left: 0, right: 0, width: "100%" }}
                />
                <FrontWave
                    color={theme.accessPortal.frontWaveColor}
                    style={{ position: "absolute", bottom: -16, left: 0, right: 0, width: "100%" }}
                />
            </View>

            <View style={styles.container}>
                <Image style={styles.logo} source={theme.logo} />
                <View style={styles.content}>
                    <Text style={styles.title}>Accédez à votre espace sur le portail</Text>
                    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.8}>
                        <Text style={styles.buttonLabel}>Accéder à mon espace</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default React.memo(PortalAccessCard);