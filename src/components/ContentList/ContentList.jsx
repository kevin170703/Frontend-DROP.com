import React, { useEffect } from "react";
import style from "./ContentList.module.css";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { searchProductsforUser } from "../../redux/action";
import { motion } from "framer-motion";

export default function ContentList() {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchProductsforUser(user.id));
  }, []);

  if (!user.email) return <h1>ERROR</h1>;
  return (
    <motion.div
      className={style.contentList}
      initial={{ opacity: 0, y: -20 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
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
      {posts.msj ? (
        <div className={style.contentMsj}>
          <h6>Aun no cuentas con datos guardados</h6>
        </div>
      ) : (
        posts.map((element) => (
          <Products
            key={element.id}
            TitleProduct={element.nameProduct}
            price={element.price}
            quantity={element.stock}
            id={element.id}
          />
        ))
      )}
    </motion.div>
  );
}
