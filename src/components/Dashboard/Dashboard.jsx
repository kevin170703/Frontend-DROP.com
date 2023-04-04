import React from "react";
import style from "./Dashboard.module.css";
import Navegation from "../Navegation/Navegation";
import Upload from "../Upload/Upload";

export default function Home() {
  return (
    <div className={style.content}>
      <Navegation />
      <Upload />
    </div>
  );
}
