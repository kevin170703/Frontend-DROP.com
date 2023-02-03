import React from "react";
import style from "./Navegation.module.css";
import { CiSearch, CiCirclePlus, CiCircleList } from "react-icons/ci";

export default function Navegation() {
  return (
    <div className={style.contentAll}>
      <form action="" className={style.search}>
        <CiSearch size="40" color="fff" />
        <input type="text" placeholder="Buscar" />
      </form>

      <div className={style.menus}>
        <CiCircleList size="35" />
        <p>Lista de productos</p>
      </div>
      <div className={style.menus}>
        <CiCirclePlus size="35" />
        <p>Nuevo</p>
      </div>
    </div>
  );
}
