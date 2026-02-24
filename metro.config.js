const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
        // Support des SVG
        assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
        sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],

        // Alias @ -> src
        extraNodeModules: {
            "@": path.resolve(__dirname, "src"),
        },
    },
};

module.exports = mergeConfig(defaultConfig, config);