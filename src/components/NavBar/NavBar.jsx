import React from "react";
import style from "./NavBar.module.css";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const navegation = useNavigate();

  const alertLogin = () => {
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
    <header className={style.contentAll}>
      <nav className={style.contentNavegation}>
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
            onClick={() => alertLogin()}
          >
            Empezar
          </NavLink>
        )}
      </nav>

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
    </header>
  );
}
