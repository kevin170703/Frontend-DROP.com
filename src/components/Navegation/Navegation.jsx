import React from "react";
import style from "./Navegation.module.css";
import { CiSearch, CiCirclePlus } from "react-icons/ci";

export default function Navegation() {
  return (
    <div className={style.contentAll}>
      <h1>Productos</h1>
      <form action="" className={style.search}>
        <CiSearch size="40" color="fff" />
        <input type="text" placeholder="Buscar" />
      </form>

      <div className={style.menus}>
        <CiCirclePlus size="35" />
        <p>Nuevo</p>
      </div>
    </div>
  );
}
