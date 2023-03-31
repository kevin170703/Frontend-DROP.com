import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.css";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";

//Icons
import { FaLinkedinIn, FaWindows } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import dashboard from "../../images/dashboard.png";

export default function Home() {
  const user = useSelector((state) => state.user);

  //Animacion scroll
  const [showTitle, setShowTitle] = useState(true);
  const titleRef = useRef();
  useEffect(() => {
    const handelScroll = () => {
      const { y } = titleRef.current.getBoundingClientRect();
      y > 100 ? setShowTitle(true) : setShowTitle(false);
    };
    window.addEventListener("scroll", handelScroll);
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
            Titulo
          </h1>
          <p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Un lugar donde puedes guardar datos manera fácil.
          </p>
          {user.email ? (
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className={style.buutonLestsGo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Empezar
            </button>
          ) : (
            <button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
              transition={{ delay: 1, duration: 0.8 }}
              className={style.buutonLestsGo}
              onClick={() => {
                Swal.fire({
                  icon: "error",
                  title: `debes iniciar sesion o crear un cuenta antes de empezar`,
                  showCancelButton: true,
                  confirmButtonText: "Iniciar sesion",
                  cancelButtonText: "Crear cuenta",
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/login";
                  } else if (result.isDismissed) {
                    window.location.href = "/register";
                  }
                });
              }}
            >
              Go
            </button>
          )}
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
        <IoIosArrowDown size="30" className={style.arrow} />
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
          <h6>Dashborad facil de usar</h6>
          <p>
            Puedes buscar, crear, guardar, editar, eliminar tus datos de manera
            rapida en un dashboard comodo de utilizar e intutivo.
          </p>
        </div>
        <img
          src={dashboard}
          alt="Dashboard image"
          className={style.contentInfo}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
    </div>
  );
}
