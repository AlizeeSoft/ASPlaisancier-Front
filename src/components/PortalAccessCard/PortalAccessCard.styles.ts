// PortalAccessCard.styles.ts

import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

type Styles = {
    card: ViewStyle;
    backgroundContainer: ViewStyle;
    container: ViewStyle;
    logo: ImageStyle;
    content: ViewStyle;
    title: TextStyle;
    button: ViewStyle;
    buttonLabel: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
    card: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        borderRadius: 12,
        overflow: "visible",
    },
    backgroundContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        borderRadius: 12,
    },
    container: {
        flexDirection: "row",
        width: "100%",
        position: "relative",
        alignItems: "center",
        padding: 16,
        gap: 24,
        zIndex: 1,
        borderRadius: 12,
    },
    logo: {
        width: 80,
        height: 80,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    title: {
        fontFamily: "Poppins-Medium",
        fontSize: 13,
        textAlign: "center",
        color: "white",
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 24,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonLabel: {
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        textAlign: "center",
        color: "white",
    },
});