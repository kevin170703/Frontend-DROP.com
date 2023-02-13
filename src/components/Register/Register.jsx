import React, { useState } from "react";
import style from "./Register.module.css";
import { NavLink } from "react-router-dom";
import { register } from "../../redux/action";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function Register() {
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errors, seterrors] = useState({});

  function updateState(e) {
    e.preventDefault();
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
    seterrors(validations({ ...dataUser, [e.target.name]: e.target.value }));
  }

  function validations(dataUser) {
    let errors = {};
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const userNameRegex = /^[0-9a-zA-Z]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if (!dataUser.userName)
      errors.userName = "Debe ingresar un nombre de usuario";
    else if (!userNameRegex.test(dataUser.userName))
      errors.userName = "Solo pude contener numeros y letras";

    if (!dataUser.email) errors.email = "Debe ingresar su correo";
    else if (!emailRegex.test(dataUser.email)) errors.email = "Email invalido";

    if (!dataUser.password) errors.password = "Debe ingresar una contraseña";
    else if (!passwordRegex.test(dataUser.password))
      errors.password = (
        <p>
          Minimo 8 caracteres Maximo 15 <br />
          Al menos una letra mayúscula <br />
          Al menos una letra minucula <br />
          Al menos un dígito <br />
          No espacios en blanco <br />
          Al menos 1 caracter especial
        </p>
      );

    return errors;
  }

  function setData(e) {
    e.preventDefault();
    if (
      dataUser.userName === "" ||
      dataUser.email === "" ||
      dataUser.password === ""
    )
      return Swal.fire({
        icon: "error",
        title: "Algun campo se encuentra incompeto",
      });
    dispatch(register(dataUser));
  }

  return (
    <div className={style.contentAll}>
      <div className={style.contentImage}>
        <h5>Bienvenido/a </h5>
        <p>Si ya tienes una cuanta, inicia sesion aqui.</p>
        <NavLink to="/login" className={style.buutonLogin}>
          Iniciar sesion
        </NavLink>
      </div>

      <form action="" className={style.formLogin} onSubmit={(e) => setData(e)}>
        <h6>Registrate</h6>
        <div className={style.contentInputs}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="userName"
            value={dataUser.userName}
            onChange={(e) => updateState(e)}
          />
          {errors.userName && <p className={style.errors}>{errors.userName}</p>}
        </div>
        <div className={style.contentInputs}>
          <input
            type="text"
            placeholder="Correo electronico"
            name="email"
            value={dataUser.email}
            onChange={(e) => updateState(e)}
          />
          {errors.email && <p className={style.errors}>{errors.email}</p>}
        </div>
        <div className={style.contentInputs}>
          <input
            type="text"
            name="password"
            value={dataUser.password}
            placeholder="Contraseña"
            onChange={(e) => updateState(e)}
          />
          {errors.password && <p className={style.errors}>{errors.password}</p>}
        </div>

        <button
          type="submit"
          className={
            !errors.userName &&
            !errors.email &&
            !errors.password &&
            dataUser.userName
              ? style.buutonRegister
              : style.buutonRegisteDisable
          }
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
