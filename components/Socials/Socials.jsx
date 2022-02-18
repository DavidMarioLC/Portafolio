import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import style from "./Socials.module.css";

export const Socials = () => {
  const socials = [
    {
      id: "1",
      name: "linkedin",
      link: "https://www.linkedin.com/in/davidmariolc",
      icon: <FaLinkedinIn />,
    },
    {
      id: "2",
      name: "twitter",
      link: "https://twitter.com/DavidMarioLC",
      icon: <FaTwitter />,
    },
    {
      id: "3",
      name: "github",
      link: "https://github.com/DavidMarioLC",
      icon: <FaGithub />,
    },
  ];

  return (
    <address className={style.socials}>
      {socials.map((social) => (
        <a
          className={style.social}
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </address>
  );
};
