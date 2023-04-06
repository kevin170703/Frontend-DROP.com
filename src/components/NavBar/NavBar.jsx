import React from "react";
import style from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const navegation = useNavigate();
  const alert = () => {
    Swal.fire({
      icon: "info",
      title: "debes iniciar sesion para poder comenzar",
      confirmButtonText: "Iniciar sesion",
      confirmButtonColor: "#2c8cf8",
      showCancelButton: true,
      cancelButtonText: "Hacerlo mas tarde",
    }).then((result) => {
      if (result.isConfirmed) {
        navegation("/login");
      }
    });
  };

  return (
    <div className={style.contentAll}>
      <div className={style.contentNavegation}>
        <NavLink to="/" className={style.title}>
          DROP.com
        </NavLink>
        {user.id ? (
          <NavLink to="/uploadPhoto" className={style.navegationLinks}>
            Empezar
          </NavLink>
        ) : (
          <NavLink
            to="/"
            className={style.navegationLinks}
            onClick={() => alert()}
          >
            Empezar
          </NavLink>
        )}
      </div>

      {user.email ? (
        <NavLink to={`/profile/${user.id}`}>
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
