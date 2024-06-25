const path = require('path');

module.exports = {
  mode: 'development', // Cambia a 'production' en producción
  entry: './server.js', // Nombre del archivo principal de entrada
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardarán los archivos compilados
  },
};
