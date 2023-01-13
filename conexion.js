const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetoDb = mongoose.connection
objetoDb.on('connected', ()=>{console.log('Te conectaste correctamente')})
objetoDb.on('error', ()=>{console.log('Error en la conexion a mongodb')})

module.exports = mongoose