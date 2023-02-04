import React from "react";
import style from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Login() {
  return (
    <div className={style.contentAll}>
      <div className={style.contentImage}>
        <h5>Bienvenido/a de nuevo!</h5>
        <p>Si aun no tienes una cuentra registarada, creala desde aqui.</p>
        <NavLink to="/register" className={style.buutonRegister}>
          Registrarme
        </NavLink>
      </div>
      <form action="" className={style.formLogin}>
        <h6>Iniciar sesion</h6>
        <div className={style.contentInputs}>
          <input type="text" placeholder="Correo electronico" />
        </div>
        <div className={style.contentInputs}>
          <input type="text" placeholder="Contraseña" />
        </div>

        <NavLink to="login" className={style.buutonLogin}>
          Iniciar sesion
        </NavLink>
      </form>
    </div>
  );
}
