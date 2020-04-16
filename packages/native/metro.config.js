const path = require('path');

const currentDir = __dirname;

const config = {
  watchFolders: [
    // To allow finding files outside native
    path.resolve(currentDir, '..'),
  ],

  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(currentDir, 'node_modules/react-native'),
    },
  }
};

module.exports = config;
