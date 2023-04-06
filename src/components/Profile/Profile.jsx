import React from "react";
import { useSelector } from "react-redux";
import Navegation from "../Navegation/Navegation";
import style from "./Profile.module.css";

export default function Profile() {
  const images = useSelector((state) => state.images);
  const totalSizeImages = images.reduce(
    (acumulador, image) => image.size + acumulador,
    0
  );
  const totalSize = (totalSizeImages.toString().slice(0, -3) / 1024).toFixed(1);

  return (
    <div className={style.contentAll}>
      <Navegation profile={true} />
      <p>Total de almacenamiento: {totalSize} MB</p>
    </div>
  );
}
