import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Dropdown } from "bootstrap";

export default function AdminCitas() {
  const [citasPasadas, setCitasPasadas] = useState();
  const [citasProximas, setCitasProximas] = useState();
  const [timeslots, setTimeslots] = useState();
  const [ts, setTs] = useState();
  const [fecha, setFecha] = useState(new Date());
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const token = useState("Bearer " + user.accessToken);
  const [comentario, setComentario] = useState("");
  const [message, setMessage] = useState();
  const [userAux, setUserAux] = useState();
  const [userName, setUserName] = useState();

  var options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  function obtenUser() {
    axios
      .get("http://localhost:8080/usuario/buscarUserName/" + userName, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setUserAux(response.data);
        obtenerCitasPasadas();
        obtenerCitasProximas();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function obtenerCitasPasadas() {
    axios
      .get(
        "http://localhost:8080/cita/listar/pasadasUsuario/" + userAux.userId,
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {
        setCitasPasadas(response.data);
      })
      .catch(function (error) {});
  }
  function obtenerCitasProximas() {
    axios
      .get(
        "http://localhost:8080/cita/listar/proximasUsuario/" + userAux.userId,
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {
        setCitasProximas(response.data);
      })
      .catch(function (error) {});
  }

  function verDisponibilidad() {
    var dia = fecha.toLocaleDateString("es-ES").split("/")[0];
    var mes = fecha.toLocaleDateString("es-ES").split("/")[1];
    var año = fecha.toLocaleDateString("es-ES").split("/")[2];
    axios
      .get(
        "http://localhost:8080/timeslot/disponibilidadMedico/" +
          userAux.userId +
          "/" +
          año +
          "-" +
          mes +
          "-" +
          dia,
        {
          data: {
            date: fecha.toLocaleDateString("es-ES"),
          },
        },
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {
        setTimeslots(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function crearCita(tipo) {
    var dia = fecha.toLocaleDateString("es-ES", options).split("/")[0];
    var mes = fecha.toLocaleDateString("es-ES", options).split("/")[1];
    var año = fecha.toLocaleDateString("es-ES", options).split("/")[2];
    var fechaAux = año + "-" + mes + "-" + dia;
    console.log(fechaAux);

    axios
      .post(
        "http://localhost:8080/cita/crear",
        {
          comentario: comentario,
          fecha: fechaAux,
          timeslot: {
            timeslotId: ts,
          },
          tipoCitaModel: {
            tipoDeCitaModel: tipo,
          },
          usuarioModel: {
            userId: userAux.userId,
          },
        },
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {
        setMessage("cita creada");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function eliminaCita(id) {
    axios
      .delete("http://localhost:8080/cita/eliminar/" + id, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        console.log(userName);
      })
      .catch(function (error) {});
  }

  return (
    <div className="container">
      <div className="row mb-3">
        <label className="col-mb-6 col-form-label">Nombre de usuario</label>
        <div className="col-mb-10">
          <input
            className=""
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <br />
          <br />
          <button type="submit" className="btn btn-primary" onClick={obtenUser}>
            Buscar
          </button>
        </div>
      </div>
      <div className="row">
        {citasPasadas && (
          <div className="col-4">
            <br />
            <label>Citas Pasadas</label>
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
                </tr>
              </thead>
              <tbody>
                {citasPasadas.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">{item.fecha.split("T")[0]}</td>
                    <td className="text-center">{item.timeslot.horaInicio}</td>
                    <td className="text-center">{item.comentario}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {citasProximas && (
          <div className="col-8">
            <br />
            <label>Próximas citas</label>
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
                </tr>
              </thead>
              <tbody>
                {citasProximas.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">{item.fecha.split("T")[0]}</td>
                    <td className="text-center">{item.timeslot.horaInicio}</td>
                    <td className="text-center">{item.comentario}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={(e) => eliminaCita(item.citaModelid)}
                      >
                        {" "}
                        eliminar{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {userAux && (
          <div className="row">
            <div className="col-6">
              <div className="calendar-container">
                <Calendar onChange={setFecha} value={fecha} /> <br />
                {fecha && (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={verDisponibilidad}
                  >
                    Ver disponibilidad
                  </button>
                )}
              </div>
            </div>

            <div className="col-8">
              {timeslots && (
                <div className="col-6">
                  <br />
                  <label>Horas libres</label>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center" scope="col">
                          Hora inicio
                        </th>
                        <th className="text-center" scope="col">
                          Hora final
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeslots.map((item) => (
                        <tr key={item.timeslotId}>
                          <td className="text-center">{item.horaInicio}</td>
                          <td className="text-center">{item.horaFin}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              onClick={(e) => setTs(item.timeslotId)}
                            >
                              {" "}
                              seleccionar{" "}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {ts && (
                <div className="row mb-3">
                  <label className="col-mb-6 col-form-label">Comentario</label>
                  <div className="col-mb-10">
                    <input
                      className=""
                      onChange={(e) => setComentario(e.target.value)}
                    ></input>
                  </div>
                </div>
              )}
              {ts && (
                <div className="row mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => crearCita(1)}
                  >
                    {" "}
                    pedir cita presencial{" "}
                  </button>
                </div>
              )}
              {ts && (
                <div className="row mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => crearCita(2)}
                  >
                    {" "}
                    pedir cita telefonica{" "}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
          </div>
        )}
        
      </div>
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}
