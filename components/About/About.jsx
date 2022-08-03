import React from "react";
import style from "./About.module.css";
import { Wrapper, Technologies, Title, DownArrow } from "../index";

export const About = () => {
  return (
    <section className={style.about} aria-label="About Me" id="about">
      <Wrapper>
        <div className={style.content}>
          <div className={style.resume}>
            <DownArrow />
            <Title text="Sobre" highlight="Mí" />
            <p className={style.text}>
              Me llamo David Mario Licla nací en la ciudad del eterno sol ☀
              llamada Ica en Perú.
              <br />
              <br />
              Me fascina el mundo del desarrollo web, sobre todo el Front End.
              Disfruto mucho del proceso creativo de crear interfaces, así como
              también me encanta estar en constante aprendizaje y compartir lo
              que aprendo.
            </p>
          </div>
          <div className={style.stack}>
            <Title text="Mi" highlight="stack" />
            <Technologies />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
