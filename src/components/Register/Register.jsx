import React, { useState } from "react";
import style from "./Register.module.css";
import { NavLink } from "react-router-dom";
import { register } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useValidateErrors } from "../../hooks/useValidateErrors";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function Register() {
  const dispatch = useDispatch();
  const { validateErrorsRegister, errors } = useValidateErrors();
  const [dataUser, setDataUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function updateUserData(e) {
    e.preventDefault();
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
    validateErrorsRegister({ ...dataUser, [e.target.name]: e.target.value });
  }

  function sendData(e) {
    e.preventDefault();
    dispatch(register(dataUser));
  }

  return (
    <div className={style.contentAll}>
      <div className={style.contentImage}>
        <NavLink to="/">
          <BiLeftArrowAlt size="30" className={style.backButton} />
        </NavLink>
        <h5>Bienvenido/a </h5>
        <p>Si ya tienes una cuanta, inicia sesion aqui.</p>
        <NavLink to="/login" className={style.buttonLogin}>
          Iniciar sesion
        </NavLink>
      </div>

      <form className={style.form} onSubmit={(e) => sendData(e)}>
        <h6>Registrate</h6>
        <div className={style.contentInputs}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="userName"
            value={dataUser.userName}
            onChange={(e) => updateUserData(e)}
          />
          {errors.userName && <p className={style.errors}>{errors.userName}</p>}
        </div>
        <div className={style.contentInputs}>
          <input
            type="text"
            placeholder="Correo electronico"
            name="email"
            value={dataUser.email}
            onChange={(e) => updateUserData(e)}
          />
          {errors.email && <p className={style.errors}>{errors.email}</p>}
        </div>
        <div className={style.contentInputs}>
          <input
            type="text"
            name="password"
            value={dataUser.password}
            placeholder="Contraseña"
            onChange={(e) => updateUserData(e)}
          />
          {errors.password && <p className={style.errors}>{errors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={errors.exist}
          className={style.buutonRegister}
        >
          Crear cuenta
        </button>
      </form>
    </div>
  );
}
