import axios from "axios";
import React from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom'

const UsuarioIndividual = ({usuario}) => {

    const navegar = useNavigate()
    function borrarUsuario(idusuario){
        axios.post('/api/usuario/borrar', {idusuario: idusuario}).then(res => {
            console.log(res.data);
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err);
        })
    }


    return(
       <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-3">
            <ul className="list-group">
                <li className="list-group-item">{usuario._id}</li>                
                <li className="list-group-item">{usuario.nombre}</li>
                <li className="list-group-item">{usuario.email}</li>
                <li className="list-group-item">{usuario.telefono}</li>
            </ul>

            <Link to={`/editar/${usuario._id}`}>
            <li className="btn btn-success">Editar</li>
            </Link> 
            <button onClick={() => {borrarUsuario(usuario.idusuario)}} className="btn btn-danger">Borrar</button>
            <hr className="mt-4"/>
            </div>

            
        </div>
       </div>
    )
}

export default UsuarioIndividual;