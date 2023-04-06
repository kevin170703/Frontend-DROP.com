import React from "react";
import Navegation from "../Navegation/Navegation";
import style from "./MyPhoto.module.css";
import { getImages } from "../../redux/action.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import fileDownload from "js-file-download";
import axios from "axios";

export default function MyPhoto() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(user.id));
  }, []);

  const user = useSelector((state) => state.user);
  const images = useSelector((state) => state.images);

  const [imageView, setImageView] = useState({
    view: false,
    image: "",
  });

  const dowloadFile = async (imageUrl, nameImage) => {
    const response = await axios.get(imageUrl, { responseType: "blob" });
    const blob = response.data;
    fileDownload(blob, `${nameImage}.${blob.type.slice(6)}`);
  };

  return (
    <div className={style.contentAll}>
      {imageView.view && (
        <div className={style.imageView}>
          <button onClick={() => setImageView({ view: false, image: "" })}>
            <IoIosClose size="50" />
          </button>
          <img src={imageView.image} alt="" />
        </div>
      )}
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
            <div className={style.contentImage} key={index}>
              <img src={photo.imageUrl} alt="" />
              <div className={style.buttonsActions}>
                <button
                  className={style.buttonsAction}
                  onClick={() => dowloadFile(photo.imageUrl, photo.name)}
                >
                  Desacargar
                </button>
                <button
                  className={style.buttonsAction}
                  onClick={() =>
                    setImageView({ view: true, image: photo.imageUrl })
                  }
                >
                  Ver
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
