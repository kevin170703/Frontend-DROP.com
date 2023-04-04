import React from "react";
import style from "./Upload.module.css";
import uploadCard from "../../images/uploadCard.png";
import Navegation from "../Navegation/Navegation";

export default function Upload() {
  return (
    <div className={style.contentAll}>
      <Navegation uploadPhotos={true} />
      <div className={style.contentUploader}>
        <h1>Sube tu imagen</h1>
        <p>Tus imagenes favoritas</p>

        <label for="hola">
          <img src={uploadCard} alt="" />
          <input id="hola" type="file" accept="image/png,image/jpeg" />
        </label>
      </div>
    </div>
  );
}
