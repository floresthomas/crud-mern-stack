const express = require('express')
const app = express()

//Importar conexion a mongoDB
const archivoDB = require('./conexion')

//Importar rutas y modelos de usuario
const rutaUser = require('./rutas/usuario')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutaUser)

//Configuracion server basico
app.listen(5000, function(){
    console.log("Servidor corriendo correctamente")
})