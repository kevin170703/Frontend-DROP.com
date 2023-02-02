import React from "react";
import style from "./Home.module.css";
import Navegation from "../Navegation/Navegation";

export default function Home() {
  return (
    <div className={style.content}>
      <Navegation />
      <div className={style.contentList}>
        <h6>Mis productos</h6>
      </div>
    </div>
  );
}
