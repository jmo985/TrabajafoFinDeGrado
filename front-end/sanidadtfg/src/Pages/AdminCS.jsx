import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsuarioCitas from "./UsuarioCitas";

export default function AdminCS() {
  const [historial, setHistorial] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [css, setCss] = useState();
  const token = useState("Bearer " + user.accessToken);
  const [id] = useState(user.id);
  const [nombre, setNombre] = useState();
  const [direccion, setDireccion] = useState();
  const [telefono, setTelefono] = useState();
  const [horaCierre, setHoraCierre] = useState();
  const [horaApertura, setHoraApertura] = useState();
  const [urgencias, setUrgencias] = useState();
  const [csAux, setCsAux] = useState();
  const [nombreAdd, setNombreAdd] = useState();
  const [direccionAdd, setDireccionAdd] = useState();
  const [telefonoAdd, setTelefonoAdd] = useState();
  const [horaCierreAdd, setHoraCierreAdd] = useState();
  const [horaAperturaAdd, setHoraAperturaAdd] = useState();
  const [urgenciasAdd, setUrgenciasAdd] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/centroSalud/listar/", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setCss(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  function updateUser(e) {
    e.preventDefault();

    if (nombre === "" || nombre === undefined) {
      setNombre(csAux.nombre);
      console.log(nombre + " ////" + csAux.nombre);
    }
    if (direccion === "" || direccion === undefined) {
      setDireccion(csAux.direccion);
    }
    if (telefono === "" || telefono === undefined) {
      setTelefono(csAux.telefono);
    }
    if (horaApertura === "" || horaApertura === undefined) {
      setHoraApertura(csAux.horaApertura);
    }
    if (horaCierre === "" || horaCierre === undefined) {
      setHoraCierre(csAux.horaCierre);
    }
    if (urgencias === "" || urgencias === undefined) {
      setUrgencias(csAux.urgencias);
    }

    axios
      .patch(
        "http://localhost:8080/centroSalud/actualizaCentroSalud/" +
          csAux.centroSaludId,
        {
          nombre: nombre,
          direccion: direccion,
          telefono: telefono,
          horaApertura: horaApertura,
          horaCierre: horaCierre,
          urgencias: urgencias,
        },
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {})
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function eliminaCS(id) {
    axios
      .delete("http://localhost:8080/centroSalud/eliminar/" + id, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        window.location.reload(true);
      })
      .catch(function (error) {});
  }

  function isUrgencias(urgencias) {
    if (urgencias === true) {
      return "Sí";
    }
    if (urgencias === false) {
      return "No";
    }
  }

  function crearCS(){
    axios
    .post(
      "http://localhost:8080/centroSalud/crear",
      {
        nombre: nombreAdd,
        direccion: direccionAdd,
        telefono: telefonoAdd,
        horaApertura: horaAperturaAdd,
        horaCierre: horaCierreAdd,
        urgencias: urgenciasAdd,
      },
      {
        headers: {
          Authorization: token[0],
        },
      }
    )
    .then(function (response) {})
    .catch(function (error) {
      console.log(error.message);
    });
  }


  return (
    <div className="container">
      <div className="row">
        {css && (
          <div className="col-12">
            <br />
            <h5>Centros de salud</h5>
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    Nombre
                  </th>
                  <th className="text-center" scope="col">
                    Direccion
                  </th>
                  <th className="text-center" scope="col">
                    Telefono
                  </th>
                  <th className="text-center" scope="col">
                    Hora Apertura
                  </th>
                  <th className="text-center" scope="col">
                    Hora Cierre
                  </th>
                  <th className="text-center" scope="col">
                    Servicio urgencias
                  </th>
                </tr>
              </thead>
              <tbody>
                {css.map((item) => (
                  <tr key={item.centroSaludId}>
                    <td className="text-center">{item.nombre}</td>
                    <td className="text-center">{item.direccion}</td>
                    <td className="text-center">{item.telefono}</td>
                    <td className="text-center">{item.horaApertura}</td>
                    <td className="text-center">{item.horaCierre}</td>
                    <td className="text-center">
                      {isUrgencias(item.urgencias)}
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={(e) => setCsAux(item)}
                      >
                        {" "}
                        editar{" "}
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={(e) => eliminaCS(item.centroSaludId)}
                      >
                        {" "}
                        eliminar{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {csAux && (
          <div className="col-4">
            <h5>Actualizar datos de usuario</h5>
            <br />
            <br />
            <label>Nombre </label>
            <br></br>
            <input
              type="text"
              defaultValue={csAux.nombre}
              onChange={(e) => setNombre(e.target.value)}
            ></input>
            <br />
            <label>Direccion</label>
            <br></br>
            <input
              type="text"
              defaultValue={csAux.direccion}
              onChange={(e) => setDireccion(e.target.value)}
            ></input>
            <br />
            <label>Telefono</label>
            <br></br>
            <input
              type="text"
              defaultValue={csAux.telefono}
              onChange={(e) => setTelefono(e.target.value)}
            ></input>
            <br />
            <label>Hora Apertura</label>
            <br></br>
            <input
              type="text"
              defaultValue={csAux.horaApertura}
              onChange={(e) => setHoraApertura(e.target.value)}
            ></input>
            <br />
            <label>Hora Cierre</label>
            <br></br>
            <input
              type="text"
              defaultValue={csAux.horaCierre}
              onChange={(e) => setHoraApertura(e.target.value)}
            ></input>
            <br />
            <div className="row mb-3">
          <label className="col-mb-6 col-form-label">Servicio Urgencias</label>
            <div className="col-mb-10">
              <select className="btn btn-light" aria-label="Default select example" form-select-line-height onChange={ (e) =>setUrgencias(e.target.value)}>

                <option value={"true"} >Sí</option>
                <option value={"false"}>No</option>
              </select>
              </div>
            
          </div>
            
           
            <button className="btn btn-primary" onClick={updateUser}>
              Actualizar datos
            </button>
          </div>
        )}



        <form>
        <br /> <br />
        <h5>Registrar</h5>
          <div className="row mb-3">
            <label className="col-mb-6 col-form-label">Nombre</label>
            <div className="col-mb-10">
              <input
                className=""
                type="text"
                onChange={(e) => setNombreAdd(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-mb-6 col-form-label">Dirección</label>
            <div className="col-mb-10">
              <input
                className=""
                type="text"
                onChange={(e) => setDireccionAdd(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-mb-6 col-form-label">Telefóno</label>
            <div className="col-mb-10">
              <input
                className=""
                type="text"
                onChange={(e) => setTelefonoAdd(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-mb-6 col-form-label">Hora Apertura</label>
            <div className="col-mb-10">
              <input
                className=""
                type="text"
                onChange={(e) => setHoraAperturaAdd(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-mb-6 col-form-label">HoraCierre</label>
            <div className="col-mb-10">
              <input
                className=""
                type="text"
                onChange={(e) => setHoraCierreAdd(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="row mb-3">
          <label className="col-mb-6 col-form-label">Servicio Urgencias</label>
            <div className="col-mb-10">
              <select className="btn btn-light" aria-label="Default select example" form-select-line-height onChange={ (e) =>setUrgenciasAdd(e.target.value)}>

                <option value={"true"} >Sí</option>
                <option value={"false"}>No</option>
              </select>
              </div>
            
          </div>

          <button type="submit" className="btn btn-primary" onClick={crearCS}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
