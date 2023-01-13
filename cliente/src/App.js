import './App.css';
import React from 'react';
import EditarUsuario from '../src/components/EditarUsuario';
import AgregarUsuario from '../src/components/AgregarUsuario';
import ListaUsuarios from '../src/components/ListaUsuarios';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaUsuarios/>} exact/>
        <Route path='/agregar' element={<AgregarUsuario/>} exact/>
        <Route path='/editar/:idusuario' element={<EditarUsuario/>} exact/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
