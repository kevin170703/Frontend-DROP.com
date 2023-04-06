import React from "react";
import style from "./Upload.module.css";
import uploadCard from "../../images/uploadCard.png";
import Navegation from "../Navegation/Navegation";
import { putImages } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { BsCheck } from "react-icons/bs";

export default function Upload() {
  const user = useSelector((state) => state.user);

  const [imagenes, setImagenes] = useState("");
  const [loadinImage, setLoadingImage] = useState(true);
  const dispatch = useDispatch();

  const imageAPI = async (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    setImagenes(image);
    setLoadingImage(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.REACT_APP_FOLDER_NAME);
    const file = await axios.post(process.env.REACT_APP_API_URL, data);
    console.log(file.data);
    const obj = {
      image: file.data.url,
      imageName: file.data.original_filename,
      userId: user.id,
    };
    // const imagePreview = URL.createObjectURL(image);
    // setImagenes(imagePreview); //codigo de previsulizacion de imagenes;
    dispatch(putImages(obj));
    setLoadingImage(false);
  };

  return (
    <div className={style.contentAll}>
      <Navegation uploadPhotos={true} />
      {/* {imagenes && (
        <div className={style.contentImage}>
          <img src={imagenes} alt="" className={style.image} />
        </div>
      )} */}
      <div className={style.contentUploader}>
        <h1>Sube tu imagen</h1>
        <p>Tus imagenes favoritas</p>
        <label for="input">
          <img src={uploadCard} alt="" />
          <input
            id="input"
            type="file"
            accept="image/png,image/jpeg"
            onChange={(e) => imageAPI(e)}
          />
        </label>
        {imagenes && (
          <div className={style.contentCardImage}>
            <div className={style.contentInfoImage}>
              <h6>{imagenes.name}</h6>
              <p>
                {(imagenes.size.toString().slice(0, -3) / 1024).toFixed(1)} MB
              </p>
            </div>
            {loadinImage ? (
              <svg viewBox="25 25 50 50" className={style.svgCicle}>
                <circle
                  r="10"
                  cy="50"
                  cx="50"
                  className={style.circleLoading}
                ></circle>
              </svg>
            ) : (
              <BsCheck size="40" className={style.check} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
