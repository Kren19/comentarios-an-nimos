const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production', // Cambia a 'production' en producción
  entry: './server.js', // Nombre del archivo principal de entrada
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardarán los archivos compilados
  },
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      zlib: require.resolve('browserify-zlib'),
      assert: require.resolve('assert'),
      util: require.resolve('util'),
      fs: false, // No incluir fs para el navegador
      path: false, // No incluir path para el navegador
      os: false, // No incluir os para el navegador
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
      querystring: require.resolve('querystring-es3'),
      punycode: require.resolve('punycode'),
      process: require.resolve('process/browser'),
      assert: require.resolve('assert/'),
      events: require.resolve('events/'),
      constants: require.resolve('constants-browserify'),
      util: require.resolve('util/'),
      'async_hooks': require.resolve('async_hooks/'),
      'string_decoder': require.resolve('string_decoder/'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
