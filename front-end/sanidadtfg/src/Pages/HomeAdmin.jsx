import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function HomeAdmin() {
  const { id } = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = useState("Bearer " + user.accessToken);

  let navigate = useNavigate();

  //console.log(token[0]);

  


  function handleUser(id) {
    navigate(`/Admin/Datos`);
  }
  function handleCitas(id) {
    navigate(`/Usuario/Citas`);
  }
 
  function handleCrearCitas(id) {
    navigate(`/Admin/CrearCita`);
  }
  function handleCS(id) {
    navigate(`/Admin/CentroSalud`);
  }
  function handleMedicos(id) {
    navigate(`/Admin/Medicos`);
  }
  function handleUsuarios(id) {
    navigate(`/Admin/Usuarios`);
  }

  return(
    <div>
    <div className="row mb-3">
    <div className="col-mb-6 col-form-label">
        <button className="btn btn-outline-primary" onClick={handleUser}>
          Mis datos
        </button>
      </div>
      <div className="col-mb-6 col-form-label">
        <button className="btn btn-outline-primary" onClick={handleUsuarios}>
          Usuarios
        </button>
      </div>
      <div className="col-mb-6 col-form-label">
        <button className="btn btn-outline-primary" onClick={handleMedicos}>
          Medicos
        </button>
      </div>
      <div className="col-mb-6 col-form-label">
        <button className="btn btn-outline-primary" onClick={handleCS}>
         CentroSalud
        </button>
      </div>
      <div className="col-mb-6 col-form-label">
        <button className="btn btn-outline-primary" onClick={handleCrearCitas}>
          Cita Usuario
        </button>
      </div>
    </div>
  </div>
  );
}
