import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={style.contentAll}>
      <NavLink to="/login" className={style.buutons}>
        Iniciar sesion
      </NavLink>
      <NavLink to="/register" className={style.buutons}>
        Registrate
      </NavLink>
    </div>
  );
}
