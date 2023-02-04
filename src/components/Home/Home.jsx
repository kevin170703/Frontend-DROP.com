import React from "react";
import style from "./Home.module.css";
import DataIamge from "../../images/DataImage.svg";
import dashboard from "../../images/dashboard.png";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <div className={style.contentAll}>
      <NavBar />
      <div className={style.contentPresentation}>
        <div className={style.contentText}>
          <h1>Titulo</h1>
          <p>
            Guarda tus datos, productos, los que desees, de forma facil y
            sensillla.
          </p>
          <NavLink to="/listProducts" className={style.buutonLestsGo}>
            Empezar
          </NavLink>
        </div>
        <img src={DataIamge} alt="" />
        <div className={style.networks}>
          <a
            href="https://www.linkedin.com/in/kevin-correa-dev/"
            target="_blank"
          >
            <FaLinkedinIn size="30" />
          </a>
          <a
            href="mailto:correakevinfabian01@gmail.com"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <FiMail size="30" />
          </a>
        </div>
        <IoIosArrowDown size="30" className={style.arrow} />
      </div>
      <div className={style.info}>
        <div className={style.contentInfo}>
          <h6>Dashborad facil de usar</h6>
          <p>
            Puedes buscar, crear, guardar, editar, eliminar tus datos de manera
            rapida en un dashboard comodo de utilizar e intutivo.
          </p>
        </div>
        <img src={dashboard} alt="" />
      </div>
    </div>
  );
}
