const path = require('path');

module.exports = {
  mode: 'development', // o 'production'
  entry: 'server.js', // ruta al archivo principal de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // directorio de salida para los archivos compilados
    filename: 'bundle.js', // nombre del archivo compilado
  },
  module: {
    rules: [
      {
        test: /\.js$/, // todas las extensiones de archivo .js
        exclude: /node_modules/, // excluye la carpeta node_modules
        use: {
          loader: 'babel-loader', // utiliza babel-loader para transpilar archivos .js
        },
      },
    ],
  },
};
