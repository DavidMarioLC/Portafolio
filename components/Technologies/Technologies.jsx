import React from "react";
import Image from "next/image";
import style from "./Technologies.module.css";
import logoHTML from "../../public/stack/html.svg";
import logoCSS from "../../public/stack/css.svg";
import logoJS from "../../public/stack/javascript.svg";
import logoTS from "../../public/stack/typescript.svg";
import logoFigma from "../../public/stack/figma.svg";
import logoReact from "../../public/stack/react.svg";
import logoRedux from "../../public/stack/redux.svg";
import logoJest from "../../public/stack/jest.svg";
import logoSASS from "../../public/stack/sass.svg";
import logoFirebase from "../../public/stack/firebase.svg";
import logoNext from "../../public/stack/next.svg";
import logoTesting from "../../public/stack/testing.svg";

export const Technologies = () => {
  const technologies = [
    { id: "1", name: "HTML", image: logoHTML },
    { id: "2", name: "CSS", image: logoCSS },
    { id: "3", name: "JavaScript", image: logoJS },
    { id: "4", name: "SASS", image: logoSASS },
    { id: "5", name: "Figma", image: logoFigma },
    { id: "6", name: "React", image: logoReact },
    { id: "7", name: "Redux", image: logoRedux },
    { id: "8", name: "Next", image: logoNext },
    { id: "9", name: "TypeScript", image: logoTS },
    { id: "10", name: "Jest", image: logoJest },
    { id: "11", name: "Firebase", image: logoFirebase },
    { id: "12", name: "Testing", image: logoTesting },
  ];

  const hiddenTech = (name) => {
    // return false;
    return ["Jest", "Firebase", "Testing"].includes(name);
  };

  return (
    <div className={style.technologies}>
      {technologies.map((technology) => (
        <figure
          key={technology.id}
          className={`${style.logo} ${
            hiddenTech(technology.name) ? ` ${style.opacity}` : ""
          }`}
        >
          <Image
            src={technology.image}
            alt={technology.name}
            title={technology.name}
          />
          <figcaption className={style.logoName}>{technology.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};
