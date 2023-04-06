import React from "react";
import Navegation from "../Navegation/Navegation";
import style from "./MyPhoto.module.css";
import { getImages } from "../../redux/action.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MyPhoto() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(user.id));
  }, []);

  const images = useSelector((state) => state.images);
  return (
    <div className={style.contentAll}>
      <Navegation myPhotos={true} />
      <div className={style.contentPhotos}>
        <h1>Mis Fotos</h1>
        {images.map((photo) =>
          photo.msj ? (
            <h4>No cuentas con imagenes aun</h4>
          ) : (
            <img src={photo.imageUrl} alt="" />
          )
        )}
      </div>
    </div>
  );
}
