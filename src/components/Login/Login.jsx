import React, { useState } from "react";
import style from "./Login.module.css";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { login } from "../../redux/action";
import { useDispatch } from "react-redux";

import { BiLeftArrowAlt } from "react-icons/bi";

export default function Login() {
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({
    userName: "",
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
    if (!dataUser.userName)
      errors.userName = "Debe ingresar el nombre de usuario";

    if (!dataUser.password) errors.password = "Debe ingresar la contraseña";
    return errors;
  }

  function setData(e) {
    e.preventDefault();
    if (dataUser.userName === "" || dataUser.password === "")
      return Swal.fire({
        icon: "error",
        title: "Algun campo se encuentra incompeto",
      });
    dispatch(login(dataUser));
  }

  return (
    <div className={style.contentAll}>
      <div className={style.contentImage}>
        <NavLink to="/">
          <BiLeftArrowAlt size="30" className={style.buttonBack} />
        </NavLink>
        <h5>Bienvenido/a de nuevo!</h5>
        <p>Si aun no tienes una cuentra registarada, creala desde aqui.</p>
        <NavLink to="/register" className={style.buutonRegister}>
          Registrarme
        </NavLink>
      </div>

      <form action="" className={style.formLogin} onSubmit={(e) => setData(e)}>
        <h6>Iniciar sesion</h6>

        <div className={style.contentInputs}>
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="userName"
            value={dataUser.userName}
            onChange={(e) => updateState(e)}
          />
          {errors.userName && <p className={style.errors}>{errors.userName}</p>}
        </div>

        <div className={style.contentInputs}>
          <label>Contraseña</label>
          <input
            type="text"
            name="password"
            value={dataUser.password}
            onChange={(e) => updateState(e)}
          />
          {errors.password && <p className={style.errors}>{errors.password}</p>}
        </div>

        <button type="submit" to="login" className={style.buutonLogin}>
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}
