import React, { useEffect, useState } from "react";
import axios from 'axios';
import UsuarioIndividual from "./UsuarioIndividual";

const ListaUsuarios = () => {
   const [lista, setLista] = useState([])

   useEffect(() => {
     axios.get('api/usuario/usuarios').then(res => {
      console.log(res);
        setLista(res.data)
     }).catch(err => {
       console.log(err);
     })
   }, [])

    const listaUsuarios = lista.map(usuario => {
        return(
        <div>
            <UsuarioIndividual usuario={usuario}/>
        </div>
        )
    })

    return(
        <div>
        <h1>Lista de Usuarios</h1>
        {listaUsuarios}
        </div>
    )
}

export default ListaUsuarios