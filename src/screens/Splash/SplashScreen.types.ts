// SplashScreen.types.ts

/**
 * Props pour l'écran SplashScreen.
 */
export interface SplashScreenProps {
    /** L'app est prête (auth, data, etc.) */
    isAppReady: boolean;

    /** Callback appelé quand le Splash peut disparaître */
    onFinish: () => void;
}