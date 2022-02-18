import Image from "next/image";
import style from "./ProjectCard.module.css";
import logoHTML from "../../public/stack/html.svg";
import logoCSS from "../../public/stack/css.svg";
import logoJS from "../../public/stack/javascript.svg";
import logoTS from "../../public/stack/typescript.svg";
import logoReact from "../../public/stack/react.svg";
import logoRedux from "../../public/stack/redux.svg";
import logoJest from "../../public/stack/jest.svg";
import logoSASS from "../../public/stack/sass.svg";
import logoFirebase from "../../public/stack/firebase.svg";
import logoNext from "../../public/stack/next.svg";
import logoTesting from "../../public/stack/testing.svg";

const getIcon = (value) => {
  const tech = {
    HTML: logoHTML,
    CSS: logoCSS,
    JavaScript: logoJS,
    Sass: logoSASS,
    React: logoReact,
    Redux: logoRedux,
    TypeScript: logoTS,
    Testing: logoTesting,
    Firebase: logoFirebase,
    Jest: logoJest,
    Next: logoNext,
  };
  return tech[value];
};

const TagStack = ({ name }) => {
  return (
    <li className={style.tagStack}>
      <div className={style.tagStackImageWrapper}>
        <Image src={getIcon(name)} alt={name} title={name} />
      </div>
      <p className={style.tagStackName}>{name}</p>
    </li>
  );
};

export const ProjectCard = ({ project }) => {
  const { name, thumbnail, linkRepo, linkDemo, description, technologies } =
    project;
  return (
    <div className={style.projectCard} tabIndex={0}>
      <div className={style.thumbnailWrapper}>
        <Image
          className={style.thumbnail}
          src={thumbnail}
          alt={name}
          title={name}
          width="800"
          height="600"
        />
        <div className={style.actionLinks}>
          <a
            className={style.link}
            href={linkDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            className={style.link}
            href={linkRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <h3 className={style.name}>{name}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.stack}>
        {technologies.map((tech, idx) => (
          <TagStack key={idx} name={tech} />
        ))}
      </ul>
    </div>
  );
};
