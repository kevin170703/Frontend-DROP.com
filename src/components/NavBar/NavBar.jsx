import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NavBar() {
  const user = useSelector((state) => state.user);

  return (
    <div className={style.contentAll}>
      <div className={style.contentNavegation}>
        <NavLink to="/" className={style.title}>
          DROP.com
        </NavLink>
        <NavLink to="/" className={style.navegationLinks}>
          Inicio
        </NavLink>
        <NavLink to="/" className={style.navegationLinks}>
          Panel
        </NavLink>
      </div>

      {user.email ? (
        <NavLink to="/profile">
          <FaUserAlt size="30" className={style.profileLogo} />
        </NavLink>
      ) : (
        <div>
          <NavLink to="/login" className={style.buutonLogin}>
            Iniciar sesion
          </NavLink>
          <NavLink to="/register" className={style.buutonRegister}>
            Registrate
          </NavLink>
        </div>
      )}
    </div>
  );
}
