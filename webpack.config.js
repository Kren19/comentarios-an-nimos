const path = require('path');

module.exports = {
  entry: './src/index.js', // Ruta de tu archivo principal de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida para el bundle
    publicPath: '', // Ruta pública del bundle (si es necesario)
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "buffer": require.resolve("buffer/"),
    },
  },
  module: {
    rules: [
      // Aquí puedes configurar reglas para cargar diferentes tipos de archivos si es necesario
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
