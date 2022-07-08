import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsuarioCitas from "./UsuarioCitas";

export default function AdminMedicos() {
  const [historial, setHistorial] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [usuarios, setUsuarios] = useState();
  const token = useState("Bearer " + user.accessToken);
  const [id] = useState(user.id);
  const [nombre, setNombre] = useState();
  const [apellidos, setApellidos] = useState();
  const [mail, setMail] = useState();
  const [userAux, setUserAux] = useState();
  const [userNameAdd, setUsernameAdd] = useState();
  const [nombreAdd, setNombreAdd] = useState();
  const [apellidosAdd, setApellidosAdd] = useState();
  const [mailAdd, setMailAdd] = useState();
  const [contraseñaAdd, setContraseñaAdd] = useState();
  const [css, setCss] = useState();
  const [cs, setCs] = useState();
 

  useEffect(() => {
    axios
      .get("http://localhost:8080/medico/listar/", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setUsuarios(response.data);
        obtenCS();
      })
      .catch(function (error) {
        console.log(error.message);
      });

  
   
  }, []);

  function updateUser(e) {
    e.preventDefault();

   

    if (apellidos === "" || apellidos === undefined) {
      setApellidos(userAux.apellidos);
  
    }
    if (nombre === "" || nombre === undefined) {
      setNombre(userAux.nombre);
     
    }
    if (mail === "" || mail === undefined) {
      setMail(userAux.mail);
    
    }
   

    axios
      .patch(
        "http://localhost:8080/medico/actualizaMedico/" + userAux.userId,
        {
          nombre: nombre,
          apellidos: apellidos,
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

  function eliminaMedico(id) {
    axios
      .delete("http://localhost:8080/medico/eliminar/" + id, {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        window.location.reload(true);
      })
      .catch(function (error) {});
  }

  function crearMedico() {
 
    axios
      .post(
        "http://localhost:8080/medico/crear",
        {
          userName: userNameAdd,
          password: contraseñaAdd,
          mail: mailAdd,
          nombre: nombreAdd,
          apellidos: apellidosAdd,
          rol: "MEDICO"
        },
        {
          headers: {
            Authorization: token[0],
          },
        }
      )
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error.message);
      });
 
  }

  function crearCSMed(){
    axios
    .post(
      "http://localhost:8080/centroSaludMedico/crear",
      {
        
        horaInicio: "09:00",
        horaFin: "14:00",
        centroSaludModel: {
        centroSaludId: cs,
        },
        medicoModel: {
          userId: userAux.userId,
    
        }
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


  function obtenCS() {
    axios
      .get("http://localhost:8080/centroSalud/listar", {
        headers: {
          Authorization: token[0],
        },
      })
      .then(function (response) {
        setCss(response.data);
        console.log(response.data)
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
                    Correo Electronico
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
                    <td className="text-center">{item.mail}</td>
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
                        onClick={(e) => eliminaMedico(item.userId)}
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
            <br /> <br />
            <button className="btn btn-primary" onClick={(e) => updateUser(e)}>
              Actualizar datos
            </button>


            <h5>Asignar centro de Salud</h5>
            <select
                className="btn btn-light"
                aria-label="Default select example"
                defaultValue={"seleccionar"}
                onChange={(e) => setCs(e.target.value)}
              >   
                <option> </option>
                {css.map((item) => (
                  <option
                    key={item.centroSaludId}
                    value={item.centroSaludId}
                  >
                    {item.nombre}
                  </option>
                ))}
              </select>

              <button className="btn btn-primary" onClick={(e) => crearCSMed()}>
              Asignar
            </button>
          </div>
        )}

      


{css && <form>
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
            <label className="col-mb-6 col-form-label">Nombre de usuario</label>
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
                onChange={(e) => setContraseñaAdd(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            
            <div className="col-mb-10">
             
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={crearMedico}
          >
            Registrar
          </button>
        </form>}
      </div>
    </div>
  );
}
