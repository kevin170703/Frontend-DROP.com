import React from "react";
import style from "./Upload.module.css";
import uploadCard from "../../images/uploadCard.png";
import Navegation from "../Navegation/Navegation";
import { putImages } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const user = useSelector((state) => state.user);

  const [imagenes, setImagenes] = useState("");
  const dispatch = useDispatch();

  const imageAPI = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_API_URL);
    // const image = e.target.files[0];
    // const data = new FormData();
    // data.append("file", image);
    // data.append("upload_preset", env.FOLDER_NAME);
    // const file = await axios.post(env.API_URL, data);
    // console.log(file.data);
    // const obj = {
    //   image: file.data.url,
    //   imageName: file.data.public_id,
    //   userId: user.id,
    // };
    // console.log(obj);

    // const imagePreview = URL.createObjectURL(image);
    // setImagenes(imagePreview);
    // dispatch(putImages(obj));
  };

  return (
    <div className={style.contentAll}>
      <Navegation uploadPhotos={true} />
      {imagenes && <img src={imagenes} alt="" />}
      <div className={style.contentUploader}>
        <h1>Sube tu imagen</h1>
        <p>Tus imagenes favoritas</p>

        <label for="hola">
          <img src={uploadCard} alt="" />
          <input
            id="hola"
            type="file"
            accept="image/png,image/jpeg"
            onChange={(e) => imageAPI(e)}
          />
        </label>
      </div>
    </div>
  );
}
