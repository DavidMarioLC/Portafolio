import style from "./Footer.module.css";
import { Wrapper } from "../index";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Wrapper>
        <div className={style.content}>
          <p>Made with ️💙 by DavidMarioLC</p>
        </div>
      </Wrapper>
    </footer>
  );
};
