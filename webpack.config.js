const path = require('path');

module.exports = {
  mode: 'development', // Cambia a 'production' en producción
  entry: './server.js', // Archivo principal de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardarán los archivos compilados
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Añade loaders para procesar archivos CSS si los tienes
      },
    ],
  },
};
