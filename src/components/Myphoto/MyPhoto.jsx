import React from "react";
import Navegation from "../Navegation/Navegation";
import style from "./MyPhoto.module.css";

export default function MyPhoto() {
  return (
    <div className={style.contentAll}>
      <Navegation />
      <div className={style.contentPhotos}>
        <h1>Mis Fotos</h1>
        {/* {myPhotos.map((photo) => (
        <img src={photo.src} alt="" />
      ))} */}
      </div>
    </div>
  );
}
