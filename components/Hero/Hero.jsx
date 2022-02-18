import React from "react";
import Image from "next/image";
import style from "./Hero.module.css";
import { Wrapper, Rocket } from "../index";
import Perfil from "../../public/perfil.webp";
import Focus from "../../public/focus.svg";
import Target from "../../public/target.svg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <main className={style.hero} aria-label="Hero David Mario Licla">
      <Wrapper>
        <div className={style.content}>
          <div className={style.wrapperPhoto}>
            <motion.div
              className={style.focus}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <Image src={Focus} alt="Focus decorate" title="Focus decorate" />
            </motion.div>

            <motion.div
              className={style.target}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <Image
                src={Target}
                alt="Target decorate"
                title="Target decorate"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <Image
                src={Perfil}
                alt="David Mario Licla"
                title="David Mario Licla"
              />
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <div className={style.information}>
              <Rocket />
              <p className={style.name}>David Licla</p>
              <h1 className={style.title}>
                <strong className={style.highlightBlue}>Front End</strong>{" "}
                Engineer
              </h1>
              <p className={style.description}>
                Ser Front End es increíble. No solo creamos interfaces hermosas
                también creamos experiencias que hacen la vida de las personas
                más fácil.
              </p>
              <a className={style.button} href="#contact">
                Contactate conmigo
              </a>
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </main>
  );
};
