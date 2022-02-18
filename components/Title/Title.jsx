import React from "react";
import style from "./Title.module.css";
import { Underline } from "../index";
export const Title = ({ text, highlight }) => {
  return (
    <h2 className={style.title}>
      {text}{" "}
      <strong className={style.highlight}>
        {highlight}
        <Underline />
      </strong>
    </h2>
  );
};
