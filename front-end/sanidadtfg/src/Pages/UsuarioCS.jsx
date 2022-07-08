import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UsuarioCS() {
  const [centroSalud, setCentroSalud] = useState();
  const [medico, setMedico] = useState();
  const [CSUrgencias, setCSurgencias] = useState();
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const token = useState("Bearer " + user.accessToken);

  useEffect(() => {
   medicoFind();
   CSFind();
   CSurgenciasFind();
   

  },[]);

  function medicoFind() {
    axios
      .get("http://localhost:8080/usuario/buscar/" + user.id + "/medico", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setMedico(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function CSFind() {
    axios
      .get("http://localhost:8080/usuario/buscar/" + user.id + "/centroSalud", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setCentroSalud(response.data);

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
           {medico && <div className="col-6">
              <h5>Datos del médico </h5>
             
              <label> Nombre: {medico.nombre}</label>
              <br />
              <label> Apellidos: {medico.apellidos}</label>
              <br />
              <label> Correo electrónico: {medico.mail}</label>
            </div>}
            {centroSalud && <div className="col-6">
              <h5>Datos del Centro Salud </h5>
             
              <label> Nombre: {centroSalud.nombre}</label>
              <br />
              <label> Dirección: {centroSalud.direccion}</label>
              <br />
              <label>
                {" "}
                Horario: {centroSalud.horaApertura} - {centroSalud.horaCierre}{" "}
              </label>
              <br />
              <label> Teléfono: {centroSalud.telefono}</label>
            </div>}
            
            <div>
            <br /><br /><br />
            {CSUrgencias && <div className="row">
            
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
    </div>
  );
}
