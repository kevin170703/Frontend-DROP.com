import React from "react";
import style from "./CardImage.module.css";
import axios from "axios";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import fileDownload from "js-file-download";

export default function CardImage({ photo }) {
  const dowloadFile = async (imageUrl, nameImage) => {
    const response = await axios.get(imageUrl, { responseType: "blob" });
    const blob = response.data;
    fileDownload(blob, `${nameImage}.${blob.type.slice(6)}`);
  };

  const [imageView, setImageView] = useState({
    view: false,
    image: "",
  });

  return (
    <div className={style.contentImage}>
      {imageView.view && (
        <div className={style.imageView}>
          <button onClick={() => setImageView({ view: false, image: "" })}>
            <IoIosClose size="50" />
          </button>
          <img src={imageView.image} alt="" />
        </div>
      )}
      <img src={photo.imageUrl} alt="" />
      <div className={style.contentButtonsActions}>
        <button
          className={style.buttonsAction}
          onClick={() => dowloadFile(photo.imageUrl, photo.name)}
        >
          Desacargar
        </button>
        <button
          className={style.buttonsAction}
          onClick={() => setImageView({ view: true, image: photo.imageUrl })}
        >
          Ver
        </button>
        <button
          className={style.buttonDelete}
          onClick={() => setImageView({ view: true, image: photo.imageUrl })}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
