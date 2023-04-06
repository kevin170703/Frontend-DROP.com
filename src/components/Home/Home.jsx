import React, { useState, useRef, useEffect } from "react";
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

//Images and logos
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import panelImg from "../../images/panel.png";
import uploadCard from "../../images/uploadCard.png";

export default function Home() {
  //Animation scroll
  const titleRef = useRef();
  const [activateAnimation, setActivateAnimation] = useState(true);

  useEffect(() => {
    const animationScroll = () => {
      const title = titleRef.current;
      const { y } = title.getBoundingClientRect();
      y > 10 ? setActivateAnimation(true) : setActivateAnimation(false);
    };

    window.addEventListener("scroll", animationScroll);
    return () => window.removeEventListener("scroll", animationScroll);
  }, []);
  //Animation scroll

  return (
    <div className={style.contentAll}>
      <NavBar />
      <div className={style.contentPresentation}>
        <div className={style.contentText}>
          <h1
            ref={titleRef}
            className={activateAnimation ? style.title : style.titleAnimation}
          >
            DROP.com
          </h1>
          <p
            className={
              activateAnimation ? style.subtitle : style.subtitleAnimation
            }
          >
            Una plataforma donde podrás subir tus imágenes de forma rápida para
            compartirlas en varios con dispositivos.
          </p>
        </div>
        <div
          className={
            activateAnimation ? style.contentImg : style.contentImgAnimation
          }
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
          <h6>Panel fácil de usar</h6>
          <p>
            Puedes subir, guardar, ver y descargar tus imágenes de manera rápida
            en un panel cómodo e intuitivo.
          </p>
        </div>
        <img src={panelImg} alt="Panel image" className={style.panelImage} />
      </div>
    </div>
  );
}
