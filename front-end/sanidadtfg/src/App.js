import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Login from "./Pages/Login";
import HomeAdmin from "./Pages/HomeAdmin";
import HomeUsuario from "./Pages/HomeUsuario";
import HomeMedico from "./Pages/HomeMedico";
import UsuarioDatos from "./Pages/UsuarioDatos";
import UsuarioCitas from "./Pages/UsuarioCitas";
import UsuarioCS from "./Pages/UsuarioCS";
import AdminDatos from "./Pages/AdminDatos";
import MedicoDatos from "./Pages/MedicoDatos";
import MedicoCitas from "./Pages/MedicoCitas";
import MedicoCS from "./Pages/MedicoCS";
import AdminUsuarios from "./Pages/AdminUsuarios";
import AdminMedicos from "./Pages/AdminMedicos";
import AdminCrearCita from "./Pages/AdminCrearCita";
import AdminCS from "./Pages/AdminCS";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/HomeAdmin/:id" element={<HomeAdmin/>}/>
            <Route exact path="/HomeUsuario/:id" element={<HomeUsuario/>}/>
            <Route exact path="/HomeMedico/:id" element={<HomeMedico/>}/>
            <Route exact path="/Usuario/Datos" element={<UsuarioDatos/>}/>
            <Route exact path="/Usuario/Citas" element={<UsuarioCitas/>}/>s
            <Route exact path="/Usuario/CentroSaludMedico" element={<UsuarioCS/>}/>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/Medico/Datos" element={<MedicoDatos/>}/>
            <Route exact path="/Medico/Citas" element={<MedicoCitas/>}/>
            <Route exact path="/Medico/CentroSalud" element={<MedicoCS/>}/>
            <Route exact path="/Admin/Datos" element={<AdminDatos/>}/>
            <Route exact path="/Admin/Usuarios" element={<AdminUsuarios/>}/>
            <Route exact path="/Admin/Medicos" element={<AdminMedicos/>}/>
            <Route exact path="/Admin/CrearCita" element={<AdminCrearCita/>}/>
            <Route exact path="/Admin/CentroSalud" element={<AdminCS/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
