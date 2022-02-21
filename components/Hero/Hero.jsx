import React from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import { Wrapper, Rocket } from "../index";
import Perfil from "../../public/perfil.webp";
import Focus from "../../public/focus.svg";
import Target from "../../public/target.svg";

export const Hero = () => {
  return (
    <main className={style.hero} aria-label="Hero David Mario Licla">
      <Wrapper>
        <div className={style.content}>
          <div className={style.wrapperPhoto}>
            <div className={style.focus}>
              <Image src={Focus} alt="Focus decorate" title="Focus decorate" />
            </div>

            <div className={style.target}>
              <Image
                src={Target}
                alt="Target decorate"
                title="Target decorate"
              />
            </div>

            <Image
              src={Perfil}
              alt="David Mario Licla"
              title="David Mario Licla"
            />
          </div>

          <div className={style.information}>
            <Rocket />
            <p className={style.name}>David Licla</p>
            <h1 className={style.title}>
              <strong className={style.highlightBlue}>Front End</strong>{" "}
              Engineer
            </h1>
            <p className={style.description}>
              Ser Front End es increíble. No solo creamos interfaces hermosas
              también creamos experiencias que hacen la vida de las personas más
              fácil.
            </p>
            <a className={style.button} href="#contact">
              Contactate conmigo
            </a>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
