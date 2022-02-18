import React from "react";
import style from "./Wrapper.module.css";

export const Wrapper = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
