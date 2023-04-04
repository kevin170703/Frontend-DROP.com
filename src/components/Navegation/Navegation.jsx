import React from "react";
import style from "./Navegation.module.css";
import { NavLink } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { TbPhotoPlus } from "react-icons/tb";
import { RiHomeLine } from "react-icons/ri";

export default function Navegation() {
  return (
    <div className={style.contentAll}>
      <NavLink to="/" className={style.buttonBack}>
        <BiLeftArrowAlt size="40" />
      </NavLink>

      {/* <div className={style.menus}>
        <CiCircleList size="35" />
        <p>Lista de productos</p>
      </div> */}
      <div className={style.contentButtonsData}>
        <NavLink to="/perfil/:id" className={style.menus}>
          <FaRegUser size="35" />
          <p>Perfil</p>
        </NavLink>
        <NavLink to="/MyPhoto" className={style.menus}>
          <TbPhoto size="35" />
          <p>Mis fotos</p>
        </NavLink>
        <NavLink to="/uploadPhoto" className={style.menus}>
          <TbPhoto size="35" />
          <p>Subir fotos</p>
        </NavLink>
        <div className={style.navegationButtons}>
          <NavLink to="/" className={style.menus}>
            <RiHomeLine size="35" />
            <p>Home</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
