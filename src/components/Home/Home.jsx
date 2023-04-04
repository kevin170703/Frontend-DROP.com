import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.css";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";

//media
import { FaLinkedinIn, FaWindows } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import panelImg from "../../images/panel.png";
import uploadCard from "../../images/uploadCard.png";

export default function Home() {
  const user = useSelector((state) => state.user);

  //Animacion scroll
  const [showTitle, setShowTitle] = useState(true);
  const titleRef = useRef();

  useEffect(() => {
    const handelScroll = () => {
      const { y } = titleRef.current.getBoundingClientRect();
      y > 10 ? setShowTitle(true) : setShowTitle(false);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <div className={style.contentAll}>
      <NavBar />
      <div className={style.contentPresentation}>
        <div className={style.contentText}>
          <h1
            ref={titleRef}
            className={showTitle ? style.title : style.titleAnimation}
          >
            DROP.com
          </h1>
          <p className={showTitle ? style.subtitle : style.subtitleAnimation}>
            Sube tus imagenes de forma rapida para compartirlas en varios
            dispositivos.
          </p>
        </div>
        <div
          className={showTitle ? style.contentImg : style.contentImgAnimation}
        >
          <img src={uploadCard} alt="" />
        </div>

        <div className={style.networks}>
          <a
            href="https://www.linkedin.com/in/kevin-correa-dev/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn size="30" />
          </a>
          <a
            href="mailto:correakevinfabian01@gmail.com"
            target="_BLANK"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMail size="30" />
          </a>
        </div>
        {/* <IoIosArrowDown size="30" className={style.arrow} /> */}
      </div>

      {/* /-------------Info-------------------------/ */}

      <div className={style.info}>
        <div
          className={style.contentInfo}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
        >
          <h6>Panel facil de usar</h6>
          <p>
            Puedes subir, guardar, ver, descargar de manera rapida en un panel
            comodo de utilizar e intutivo.
          </p>
        </div>
        <img src={panelImg} alt="Panel image" className={style.panelImage} />
      </div>
    </div>
  );
}
