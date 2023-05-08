import React, { useState } from "react";
import style from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { login } from "../../redux/action";
import { useDispatch } from "react-redux";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useValidateErrors } from "../../hooks/useValidateErrors.jsx";

export default function Login() {
  const dispatch = useDispatch();
  const { validationsLogin, errors } = useValidateErrors();
  const [dataUser, setDataUser] = useState({
    userName: "",
    password: "",
  });

  function updateUserData(e) {
    e.preventDefault();
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
    validationsLogin({ ...dataUser, [e.target.name]: e.target.value });
  }

  function setData(e) {
    e.preventDefault();
    dispatch(login(dataUser));
  }

  return (
    <div className={style.contentAll}>
      <div className={style.contentImage}>
        <NavLink to="/">
          <BiLeftArrowAlt size="30" className={style.backButton} />
        </NavLink>
        <h5>Bienvenido/a de nuevo!</h5>
        <p>Si aun no tienes una cuentra registarada, creala desde aqui.</p>
        <NavLink to="/register" className={style.buttonRegister}>
          Registrarme
        </NavLink>
      </div>

      <form action="" className={style.form} onSubmit={(e) => setData(e)}>
        <h6>Iniciar sesion</h6>

        <div className={style.contentInputs}>
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="userName"
            value={dataUser.userName}
            onChange={(e) => updateUserData(e)}
          />
        </div>

        <div className={style.contentInputs}>
          <label>Contraseña</label>
          <input
            type="text"
            name="password"
            value={dataUser.password}
            onChange={(e) => updateUserData(e)}
          />
        </div>

        <button
          type="submit"
          disabled={errors.exist}
          className={style.buutonLogin}
        >
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}
