import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UsuarioDatos() {
  const [historial, setHistorial] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = useState("Bearer " + user.accessToken);
  const [id] = useState(user.id);
  const [nombre, setNombre] = useState();
  const [apellidos, setApellidos] = useState();
  const [mail, setMail] = useState();
  const [telefono, setTelefono] = useState();

  useEffect(() => {
    console.log(user);
    axios
      .get("http://localhost:8080/usuario/buscar/" + id, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setUser(response.data);
        setApellidos(user.apellidos);
        setNombre(user.nombre);
        setMail(user.mail);
        setTelefono(user.telefono);
      })
      .catch(function (error) {
        console.log(error.message);
      });

    axios
      .get("http://localhost:8080/usuario/buscar/" + id + "/historialMedico", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setHistorial(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  function updateUser(e) {
    e.preventDefault();

    console.log(nombre, apellidos, mail, telefono);

    if (apellidos === "" || apellidos === undefined) {
      setApellidos(user.apellidos);
      console.log(apellidos);
    }
    if (nombre === "" || nombre === undefined) {
      setNombre(user.nombre);
      console.log(nombre);
    }
    if (mail === "" || mail === undefined) {
      setMail(user.mail);
      console.log(mail);
    }
    if (telefono === "" || telefono === undefined) {
      setTelefono(user.telefono);
      console.log(telefono);
    }

    console.log(user.nombre, user.apellidos, user.mail, user.telefono);

    axios
      .patch(
        "http://localhost:8080/usuario/actualizaUsuario/" + id,
        {
          nombre: nombre,
          apellidos: apellidos,
          telefono: telefono,
          mail: mail,
        },
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {
        window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {user && (
            <div className="col-6">
              <label>Datos de usuario</label>
              <br />
              <br />
              <label> Nombre: {user.nombre}</label>
              <br />
              <label> Apellidos: {user.apellidos}</label>
              <br />
              <label> Correo electrónico: {user.mail}</label>
              <br />
              <label> Teléfono: {user.telefono}</label>
              <br />
              <label> Número de seguridad social: {user.numeroSS}</label>
              <br />
              <label> Nombre de usuario: {user.userName}</label>
              <br />
              <br />
              <br />

              {historial && (
                <div>
                  <label>Historial médico</label>
                </div>
              )}
            </div>
          )}

          {user && (
            <div className="col-6">
              <label>Actualizar datos de usuario</label>
              <br />
              <br />
              <label>Nombre </label>
              <br></br>
              <input
                type="text"
                defaultValue={user.nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></input>
              <br />
              <label>Apellidos</label>
              <br></br>
              <input
                type="text"
                defaultValue={user.apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              ></input>
              <br />
              <label>Correo electrónico</label>
              <br></br>
              <input
                type="text"
                defaultValue={user.mail}
                onChange={(e) => setMail(e.target.value)}
              ></input>
              <br />
              <label>Teléfono</label>
              <br></br>
              <input
                type="text"
                defaultValue={user.telefono}
                onChange={(e) => setTelefono(e.target.value)}
              ></input>
              <br /> <br />
              <button className="btn btn-primary" onClick={updateUser}>
                Actualizar datos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
