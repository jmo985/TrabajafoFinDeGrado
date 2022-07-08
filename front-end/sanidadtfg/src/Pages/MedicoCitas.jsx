import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Dropdown } from "bootstrap";

export default function MedicoCitas() {
  const [citasPasadas, setCitasPasadas] = useState();
  const [citasProximas, setCitasProximas] = useState();
  const [timeslots, setTimeslots] = useState();
  const [ts, setTs] = useState();
  const [fecha, setFecha] = useState(new Date());
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const token = useState("Bearer " + user.accessToken);
  const [comentario, setComentario] = useState("");
  const [message, setMessage] = useState();
  const [usuario,setUsuario] = useState();
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  useEffect(() => {
    obtenerCitas();
  }, []);

 
  function obtenerCitas() {
    console.log(user.id);
    axios
      .get("http://localhost:8080/cita/listar/proximasMedico/" + user.id, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setCitasProximas(response.data);
        console.log(response.data)
      })
      .catch(function (error) {});
  }




  return (
    <div className="container">
      <div className="row">
        {citasProximas && (
          <div className="col-8">
            <br />
            <h5>Citas</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    fecha
                  </th>
                  <th className="text-center" scope="col">
                    hora
                  </th>
                  <th className="text-center" scope="col">
                    comentario
                  </th>
                  <th className="text-center" scope="col">
                    Nombre Usuario
                  </th>
                  <th className="text-center" scope="col">
                    Apellidos Usuario
                  </th>
                </tr>
              </thead>
              <tbody>
                {citasProximas.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">{item.fecha.split("T")[0]}</td>
                    <td className="text-center">{item.timeslot.horaInicio}</td>
                    <td className="text-center">{item.comentario}</td>
                    <td className="text-center">{item.usuarioModel.nombre}</td>
                    <td className="text-center">{item.usuarioModel.apellidos}</td>
                    <td><button
                            className="btn btn-primary"
                            onClick={(e) => setUsuario(item.usuarioModel)}
                          >
                            {" "}
                            ver Usuario{" "}
                          </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
         {usuario && (
            <div className="col-4">
                <br />
                <div>
              <h5>Datos de usuario</h5>
              <br />
              <br />
              <label> Nombre: {usuario.nombre}</label>
              <br />
              <label> Apellidos: {usuario.apellidos}</label>
              <br />
              <label> Correo electrónico: {usuario.mail}</label>
              <br />
              <label> Teléfono: {usuario.telefono}</label>
              <br />
              <label> Número de seguridad social: {usuario.numeroSS}</label>
              <br />
              <label> Nombre de usuario: {usuario.userName}</label>
              <br />
              <br />
              <br />
              </div>

            </div>
          )}
        </div>
    </div>
  );
}
