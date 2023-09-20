module.exports = (api) => {
  api.cache(true);

  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      test: {
        plugins: ['react-native-config-node/transform', 'babel-plugin-styled-components'],
      },
    },
  };
};
