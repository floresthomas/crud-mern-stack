import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const EditarUsuario = () => {
    const params = useParams()
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    useEffect(() => {
        axios.post('/api/usuario/editar', {idusuario: params._id}).then(res => {
            console.log(res.data[0])
            const data = res.data[0]
            setNombre(data.nombre)
            setEmail(data.email)
            setTelefono(data.telefono)
        })
    }, [])
    
        function editarUsuario (){
            let actualizarUser = {
                nombre: nombre,
                email: email,
                telefono: telefono,
                idusuario: params._id
            }
            axios.post('/api/usuario/actualizar', actualizarUser).then(res => { alert(res.data) }).then(err => {console.log(err)})
          }

    return(
        <div className="container">
        <div className="row">
            <h2 className="mt-4">Editar Usuario</h2>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type='text' className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type='email' className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type='text' className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                </div>

                <button onClick={editarUsuario} className='btn btn-success'>Guardar Usuario</button>
            </div>
        </div>
    </div>
    )
}

export default EditarUsuario;