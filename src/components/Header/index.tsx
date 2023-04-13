import cn from "classnames";
import Cookies from "js-cookie";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { CTA } from "./CTA";
import { Socials } from "./Socials";
import styles from "./Header.module.scss";
import { LANG, THEMES } from "../../data/constants";
import MyPhoto from "../../assets/img-home.png";
import { useTheme } from "../../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type THeader = {
  handleChange: (e: string) => void;
};

export const Header: FC<THeader> = ({ handleChange }) => {
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation();

  const [lang, setLang] = useState<string | undefined>(Cookies.get("i18next"));
  if (!lang) {
    const [defaultLang] = window.navigator.language.split("-");
    setLang(defaultLang in LANG ? defaultLang : LANG.EN);
  }

  return (
    <header className={styles.header} id={"home"} data-aos="fade-up">
      <div className={cn("container", styles.container)}>
        <div>
          <h3>{t("header_hello")}</h3>

          <h1>{t("header_name")}</h1>
          <h3 className={cn("text-light")}>{t("header_profession")}</h3>
        </div>
        <CTA currentLocale={lang} />
        <div className={styles.me}>
          <div className={styles.social}>
            <Socials />
          </div>
          <div className={styles.photo}>
            <img src={MyPhoto} alt="Me" />
          </div>
          <div className={styles.scrollDown}>
            <a href={"#contact"}>{t("header_scroll")}</a>
          </div>
        </div>
      </div>
      <div className={styles.other}>
        <div className={styles.lang}>
          <select
            value={lang}
            onChange={(e: any) => {
              handleChange(e.target.value);
              setLang(e.target.value);
            }}
          >
            <option value={LANG.EN}>🇬🇧</option>
            <option value={LANG.IT}>🇮🇹</option>
            <option value={LANG.FR}>🇫🇷</option>
            <option value={LANG.RU}>🇷🇺</option>
          </select>
        </div>
        <div
          className={styles.switch}
          onClick={() =>
            setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
          }
        >
          {theme === THEMES.LIGHT ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </div>
      </div>
    </header>
  );
};
