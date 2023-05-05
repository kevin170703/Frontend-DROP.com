import React from "react";
import Navegation from "../Navegation/Navegation";
import style from "./MyPhoto.module.css";
import { getImages } from "../../redux/action.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardImage from "../CardImage/CardImage";

export default function MyPhoto() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const images = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(getImages(user.id));
  }, []);

  return (
    <div className={style.contentAll}>
      <Navegation myPhotos={true} className={style.navegation} />
      <div className={style.contentPhotos}>
        <div className={style.contentText}>
          <h1>Mis Fotos</h1>
          <p>Aca puedes ver todas tus fotos</p>
        </div>

        {images.map((photo, index) =>
          photo.msj ? (
            <h4>No cuentas con imagenes aun</h4>
          ) : (
            <CardImage photo={photo} key={index} />
          )
        )}
      </div>
    </div>
  );
}
