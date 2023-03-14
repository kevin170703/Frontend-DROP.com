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
      {user.email ? (
        <NavLink to="/profile">
          <FaUserAlt size="30" className={style.profileLogo} />
        </NavLink>
      ) : (
        <div>
          <NavLink to="/login" className={style.buutons}>
            Iniciar sesion
          </NavLink>
          <NavLink to="/register" className={style.buutons}>
            Registrate
          </NavLink>
        </div>
      )}
    </div>
  );
}
