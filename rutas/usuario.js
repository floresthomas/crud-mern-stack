const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaUser = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', schemaUser)

module.exports = router

router.post('/agregar', (req,res) => {
    const nuevoUser = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario : req.body.idusuario
    })
    nuevoUser.save(function(err){
        if(!err){
            return res.send('Usuario agregado correctamente')
        }else{
            return res.send(err)
        }
    })
})

router.get('/usuarios', (req,res) => {
    ModeloUsuario.find({}, function(docs,err){
        if(!err){
            return res.send(docs)
        }else{
            return res.send(err)
        }
    })
})

router.post('/editar', (req,res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs,err){
        if(!err){
             res.send(docs)
        }else{
             res.send(err)
        }
    })
})

router.post('/actualizar', (req,res) => {
        ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }, (err) => {
            if(!err){
                res.send('Usuario actualizado')
            }else{
                res.send(err)
            }
        }) 
})

router.post('/borrar', (req,res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('Usuario borrado')
        }else{
            res.send(err)
        }
})
}
)
