// rafc
import React from "react";
import style from "./Header.module.css";
import { Wrapper, Menu, Socials } from "../index";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className={style.header} id="header">
      <Wrapper>
        <div className={style.content}>
          <div className={style.navigation}>
            <a className={style.logo} href="#">
              [David]
            </a>
            <Menu />
            <div>
              {theme === "light" ? (
                <button
                  className={style.theme}
                  onClick={() => setTheme("dark")}
                  aria-label="Change theme"
                >
                  <FiMoon />
                </button>
              ) : (
                <button
                  className={style.theme}
                  onClick={() => setTheme("light")}
                  aria-label="Change theme"
                >
                  <FiSun />
                </button>
              )}
            </div>
          </div>
          <Socials />
        </div>
      </Wrapper>
    </header>
  );
};
