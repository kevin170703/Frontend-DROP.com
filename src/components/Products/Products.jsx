import React from "react";
import style from "./Products.module.css";

export default function Products({ TitleProduct, price, quantity }) {
  return (
    <div className={style.contetAll}>
      <div className={style.contentText}>
        <h5>{TitleProduct}</h5>
      </div>
      <div className={style.contentText}>
        <p>{price}</p>
      </div>
      <div className={style.contentText}>
        <p>{quantity}</p>
      </div>
      <div className={style.moreOptions}>
        <p>...</p>
      </div>
    </div>
  );
}
