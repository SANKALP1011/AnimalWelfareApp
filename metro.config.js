const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  // Add or modify configuration options
  defaultConfig.transformer = {
    ...defaultConfig.transformer,
    enableBabelRCLookup: true,
    enableBabelRuntime: true,
    babelTransformerPath: require.resolve(
      "metro-react-native-babel-transformer"
    ),
    sourceExts: ["jsx", "js", "ts", "tsx", "json"], // Add any other extensions you're using
  };

  return defaultConfig;
})();
