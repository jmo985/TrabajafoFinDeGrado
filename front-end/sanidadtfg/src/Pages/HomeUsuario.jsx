import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function HomeUsuario() {
  const { id } = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = useState("Bearer " + user.accessToken);

  let navigate = useNavigate();

  //console.log(token[0]);

  


  function handleUser(id) {
    navigate(`/Usuario/Datos`);
  }
  function handleCitas(id) {
    navigate(`/Usuario/Citas`);
  }
 
  function handleCS(id) {
    navigate(`/Usuario/CentroSaludMedico`);
  }



  return (
    
    <div>
      <div className="row mb-3">
        <div className="col-mb-6 col-form-label">
          <button className="btn btn-outline-primary" onClick={handleUser}>
            Mis datos
          </button>
        </div>
        <div className="col-mb-6 col-form-label">
          <button className="btn btn-outline-primary" onClick={handleCitas}>
            Mis citas
          </button>
        </div>
        <div className="col-mb-6 col-form-label">
          <button className="btn btn-outline-primary" onClick={handleCS}>
            Centros de salud y médico
          </button>
        </div>
      </div>
    </div>
  );
}
