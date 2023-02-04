import React from "react";
import style from "./Register.module.css";
import { NavLink } from "react-router-dom";
import { register } from "../../redux/action";

export default function Register() {
  return (
    <div className={style.contentAll}>
      <div className={style.contentImage}>
        <h5>Bienvenido/a </h5>
        <p>Si ya tienes una cuanta, inicia sesion aqui.</p>
        <NavLink to="/login" className={style.buutonRegister}>
          Iniciar sesion
        </NavLink>
      </div>
      <form action="" className={style.formLogin}>
        <h6>Registrate</h6>
        <div className={style.contentInputs}>
          <input type="text" placeholder="Nombre de usuario" />
        </div>
        <div className={style.contentInputs}>
          <input type="text" placeholder="Correo electronico" />
        </div>
        <div className={style.contentInputs}>
          <input type="text" placeholder="Contraseña" />
        </div>

        <NavLink to="/login" className={style.buutonLogin}>
          Crear cuenta
        </NavLink>
      </form>
    </div>
  );
}
