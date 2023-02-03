import React from "react";
import style from "./ContentList.module.css";
import Products from "../Products/Products";

export default function ContentList() {
  return (
    <div className={style.contentList}>
      <h6>Datos guardados</h6>
      <div className={style.referencies}>
        <div className={style.contentText}>
          <p>Nombre</p>
        </div>
        <div className={style.contentText}>
          <p>Precio</p>
        </div>
        <div className={style.contentText}>
          <p>Cantidad</p>
        </div>
      </div>
      <Products TitleProduct="Dato 1" price="240" quantity="10" />
      <Products TitleProduct="Dato 2" price="200" quantity="20" />
    </div>
  );
}
