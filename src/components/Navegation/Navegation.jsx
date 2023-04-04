import React from "react";
import style from "./Navegation.module.css";
import { NavLink } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { TbPhotoPlus } from "react-icons/tb";
import { RiHomeLine } from "react-icons/ri";

export default function Navegation({ perfile, myPhotos, uploadPhotos }) {
  return (
    <div className={style.contentAll}>
      <NavLink to="/" className={style.buttonBack}>
        <BiLeftArrowAlt size="40" />
      </NavLink>

      <div className={style.contentButtonsData}>
        <NavLink
          to="/perfil/:id"
          className={perfile ? style.titleLinkActive : style.links}
        >
          <FaRegUser size="35" />
          <p className={style.titleLink}>Perfil</p>
        </NavLink>
        <NavLink
          to="/MyPhoto"
          className={myPhotos ? style.titleLinkActive : style.links}
        >
          <TbPhoto size="35" />
          <p className={style.titleLink}>Mis fotos</p>
        </NavLink>
        <NavLink
          to="/uploadPhoto"
          className={uploadPhotos ? style.titleLinkActive : style.links}
        >
          <TbPhoto size="35" />
          <p>Subir fotos</p>
        </NavLink>

        <div className={style.navegationButtons}>
          <NavLink to="/" className={style.links}>
            <RiHomeLine size="35" />
            <p className={style.titleLink}>Home</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
