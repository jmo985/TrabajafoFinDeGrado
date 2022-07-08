import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsuarioCitas from "./UsuarioCitas";

export default function AdminUsuarios() {
  const [historial, setHistorial] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [usuarios, setUsuarios] = useState();
  const token = useState("Bearer " + user.accessToken);
  const [id] = useState(user.id);
  const [nombre, setNombre] = useState();
  const [apellidos, setApellidos] = useState();
  const [mail, setMail] = useState();
  const [telefono, setTelefono] = useState();
  const [userAux, setUserAux] = useState();
  const [userNameAdd, setUsernameAdd] = useState();
  const [passwordAdd, setPasswordAdd] = useState();
  const [mailAdd, setMailAdd] = useState();
  const [nombreAdd, setNombreAdd] = useState();
  const [apellidosAdd, setApellidosAdd] = useState();
  const [TelefonoAdd, setTelefonoAdd] = useState();
  const [numeroSSAdd, setNumeroSSAdd] = useState();
  const [css, setCss] = useState();
  const [csId, setCsID] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/usuario/listar/", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setUsuarios(response.data);
        obtenCSM();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  function updateUser(e) {
    e.preventDefault();

    console.log(userAux);

    if (apellidos === "" || apellidos === undefined) {
      setApellidos(userAux.apellidos);
      console.log(mail);
    }
    if (nombre === "" || nombre === undefined) {
      setNombre(userAux.nombre);
      console.log(nombre);
    }
    if (mail === "" || mail === undefined) {
      setMail(userAux.mail);
      console.log(mail);
    }
    if (telefono === "" || telefono === undefined) {
      setTelefono(userAux.telefono);
      console.log(mail);
    }
    console.log(nombre);
    console.log(mail);
    console.log(mail);
    console.log(mail);

    axios
      .patch(
        "http://localhost:8080/usuario/actualizaUsuario/" + userAux.userId,
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

  function eliminaUsuario(id) {
    axios
      .delete("http://localhost:8080/usuario/eliminar/" + id, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        window.location.reload(true);
      })
      .catch(function (error) {});
  }

  function crearUser() {
    console.log(csId)
    console.log(userNameAdd)
    console.log(passwordAdd)
    console.log(mailAdd)
    console.log(nombreAdd)
    axios
      .post(
        "http://localhost:8080/usuario/crear",
        {
          userName: userNameAdd,
          password: passwordAdd,
          mail: mailAdd,
          nombre: nombreAdd,
          apellidos: apellidosAdd,
          rol: "USUARIO",
          telefono: TelefonoAdd,
          numeroSS: numeroSSAdd,
          centroSaludMedicoModel: {
            centroSaludMedicoModelid: csId,
          },
        },
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function obtenCSM() {
    axios
      .get("http://localhost:8080/centroSaludMedico/listar", {
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
  }

  return (
    <div className="container">
      <div className="row">
        {usuarios && (
          <div className="col-12">
            <br />
            <h5>Usuarios</h5>
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    Nombre
                  </th>
                  <th className="text-center" scope="col">
                    Apellidos
                  </th>
                  <th className="text-center" scope="col">
                    Telefono
                  </th>
                  <th className="text-center" scope="col">
                    Correo Electronico
                  </th>
                  <th className="text-center" scope="col">
                    Numero Seguridad Social
                  </th>
                  <th className="text-center" scope="col">
                    Nombre Usuario
                  </th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((item) => (
                  <tr key={item.userId}>
                    <td className="text-center">{item.nombre}</td>
                    <td className="text-center">{item.apellidos}</td>
                    <td className="text-center">{item.telefono}</td>
                    <td className="text-center">{item.mail}</td>
                    <td className="text-center">{item.numeroSS}</td>
                    <td className="text-center">{item.userName}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={(e) => setUserAux(item)}
                      >
                        {" "}
                        editar{" "}
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-primary"
                        onClick={(e) => eliminaUsuario(item.userId)}
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
        {userAux && (
          <div className="col-4">
            <h5>Actualizar datos de usuario</h5>
            <br />
            <br />
            <label>Nombre </label>
            <br></br>
            <input
              type="text"
              defaultValue={userAux.nombre}
              onChange={(e) => setNombre(e.target.value)}
            ></input>
            <br />
            <label>Apellidos</label>
            <br></br>
            <input
              type="text"
              defaultValue={userAux.apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            ></input>
            <br />
            <label>Correo electrónico</label>
            <br></br>
            <input
              type="text"
              defaultValue={userAux.mail}
              onChange={(e) => setMail(e.target.value)}
            ></input>
            <br />
            <label>Teléfono</label>
            <br></br>
            <input
              type="text"
              defaultValue={userAux.telefono}
              onChange={(e) => setTelefono(e.target.value)}
            ></input>
            <br /> <br />
            <button className="btn btn-primary" onClick={updateUser}>
              Actualizar datos
            </button>
          </div>
        )}

        {css && (
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
              <label className="col-mb-6 col-form-label">Apellidos</label>
              <div className="col-mb-10">
                <input
                  className=""
                  type="text"
                  onChange={(e) => setApellidosAdd(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-mb-6 col-form-label">
                Correo electrónico
              </label>
              <div className="col-mb-10">
                <input
                  className=""
                  type="text"
                  onChange={(e) => setMailAdd(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-mb-6 col-form-label">
                Nombre de usuario
              </label>
              <div className="col-mb-10">
                <input
                  className=""
                  type="text"
                  onChange={(e) => setUsernameAdd(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-mb-6 col-form-label">Contraseña</label>
              <div className="col-mb-10">
                <input
                  className=""
                  type="text"
                  onChange={(e) => setPasswordAdd(e.target.value)}
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
              <label className="col-mb-6 col-form-label">
                Número Seguridad Social
              </label>
              <div className="col-mb-10">
                <input
                  className=""
                  type="text"
                  onChange={(e) => setNumeroSSAdd(e.target.value)}
                ></input>
              </div>
            </div>
            <select
              className="btn btn-light"
              aria-label="Default select example"
              defaultValue={"seleccionar"}
              onChange={(e) => setCsID(e.target.value)}
            >
              <option> </option>
              {css.map((item) => (
                <option
                  key={item.centroSaludMedicoModelid}
                  value={item.centroSaludMedicoModelid}
                >
                  {item.centroSaludModel.nombre +
                    " - " +
                    item.medicoModel.userName}
                </option>
              ))}
            </select>
            <div className="row mb-3">
              <div className="col-mb-10"></div>
            </div>
            <button className="btn btn-primary" onClick={crearUser}>
              Registrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
