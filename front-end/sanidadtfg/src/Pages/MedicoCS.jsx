import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MedicoCS() {
  const [centroSalud, setCentroSalud] = useState();
  const [medico, setMedico] = useState();
  const [CSUrgencias, setCSurgencias] = useState();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const token = useState("Bearer " + user.accessToken);

  useEffect(() => {
   
   CSFind();
   CSurgenciasFind();
   

  },[]);

  function CSFind() {
    axios
      .get("http://localhost:8080/centroSaludMedico/buscarPorMedico/" + user.id, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setCentroSalud(response.data);
        console.log(response.data)

      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function CSurgenciasFind() {
    axios
      .get("http://localhost:8080/centroSalud/urgencias", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
          setCSurgencias(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

 
  

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            {centroSalud && <div className="col-6">
              <h5>Datos del Centro Salud </h5>
             
              <label> Nombre: {centroSalud.centroSaludModel.nombre}</label>
              <br />
              <label> Dirección: {centroSalud.centroSaludModel.direccion}</label>
              <br />
              <label>
                {" "}
                Horario: {centroSalud.centroSaludModel.horaApertura} - {centroSalud.centroSaludModel.horaCierre}{" "}
              </label>
              <br />
              <label> Teléfono: {centroSalud.centroSaludModel.telefono}</label>
            </div>}
            
            
            <br /><br /><br />
            {CSUrgencias && <div className="col-6">
            
              <h5>Centro de salud con urgencias</h5>
              <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    Nombre
                  </th>
                  <th className="text-center" scope="col">
                    Dirección
                  </th>
                  <th className="text-center" scope="col">
                   Telefono
                  </th>
                </tr>
              </thead>
              <tbody>
                {CSUrgencias.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">{item.nombre}</td>
                    <td className="text-center">{item.direccion}</td>
                    <td className="text-center">{item.telefono}</td>
                  </tr>
                ))}
              </tbody>
            </table>
              
          
            </div>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
