import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //const [user, setUser] = useState({ username: "", password: "" });
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  let navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify(response.data));
        handleUser(response.data.roles.authority, response.data.id);
      })
      .catch(function (error) {
        setMessage("fallo al iniciar sesion");
      });
  }

  function handleUser(role, id) {
    switch (role) {
      case "ADMIN":
        navigate(`/HomeAdmin/${id}`);
        break;

      case "MEDICO":
        navigate(`/HomeMedico/${id}`);
        break;

      case "USUARIO":
        navigate(`/HomeUsuario/${id}`);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <form>
        <div className="row mb-3">
          <label className="col-mb-6 col-form-label">Nombre de usuario</label>
          <div className="col-mb-10">
            <input
              className=""
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-mb-6 col-form-label">Contraseña</label>
          <div className="col-mb-10">
            <input
              className=""
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={login}>
          Iniciar sesion
        </button>
      </form>
      {message && <div className="alert alert-danger" role="alert">{message}</div>}
    </div>
  );
}
