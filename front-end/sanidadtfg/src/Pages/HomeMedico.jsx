import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function HomeAdmin() {

  const { id } = useParams();
  const[user,setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token  = useState('Bearer ' + user.accessToken);
  let navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/medico/buscar/${id}`,
      {
        headers:{
            "Authorization": token[0]
        }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  },[]);

  function handleUser(id) {
    navigate(`/Medico/Datos`);
  }
  function handleCitas(id) {
    navigate(`/Medico/Citas`);
  }
 
  function handleCS(id) {
    navigate(`/Medico/CentroSalud`);
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
        <button className="btn btn-outline-primary" onClick={handleCitas}>
          Mis citas y usuarios
        </button>
      </div>
      <div className="col-mb-6 col-form-label">
        <button className="btn btn-outline-primary" onClick={handleCS}>
          Centros de salud
        </button>
      </div>
    </div>
  </div>
  );
}
