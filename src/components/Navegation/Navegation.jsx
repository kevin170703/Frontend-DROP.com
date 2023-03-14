import React from "react";
import style from "./Navegation.module.css";
import { CiSearch, CiCirclePlus, CiCircleList } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Navegation() {
  return (
    <motion.div
      className={style.contentAll}
      initial={{ opacity: 0, x: -20 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
}
