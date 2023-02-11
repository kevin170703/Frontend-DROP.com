import React, { useState } from "react";
import style from "./Products.module.css";
import { deleteProduct } from "../../redux/action";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function Products({ TitleProduct, price, quantity, id }) {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  function delate() {
    dispatch(deleteProduct(id));
  }

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
        <p onClick={() => setView(true)}>...</p>
        <div className={view ? style.opotions : style.optionsDisable}>
          <MdDelete size="20" onClick={() => delate()} />
          <MdEdit size="20" />
        </div>
      </div>
    </div>
  );
}
