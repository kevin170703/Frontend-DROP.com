import React from "react";
import style from "./Dashboard.module.css";
import Navegation from "../Navegation/Navegation";
import ContentList from "../ContentList/ContentList";

export default function Home() {
  return (
    <div className={style.content}>
      <Navegation />
      <ContentList />
    </div>
  );
}
