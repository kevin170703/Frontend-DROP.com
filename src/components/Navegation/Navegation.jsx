import React from "react";
import style from "./Navegation.module.css";
import { CiSearch, CiCirclePlus, CiCircleList } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";

export default function Navegation() {
  return (
    <div className={style.contentAll}>
      <NavLink to="/" className={style.buttonBack}>
        <BiLeftArrowAlt size="40" />
      </NavLink>
      <form action="" className={style.search}>
        <CiSearch size="40" color="fff" />
        <input type="text" placeholder="Buscar" />
      </form>

      {/* <div className={style.menus}>
        <CiCircleList size="35" />
        <p>Lista de productos</p>
      </div> */}
      <NavLink to="/createProduct" className={style.menus}>
        <CiCirclePlus size="35" />
        <p>Nuevo</p>
      </NavLink>
    </div>
  );
}
