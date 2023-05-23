import React, { FC, useState } from "react";
import cn from "classnames";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { CTA } from "./CTA";
import { Socials } from "./Socials";
import styles from "./Header.module.scss";
import MyPhoto from "../../assets/img-home.png";
import { useTheme } from "../../hooks/useTheme";
import { LANG, THEMES } from "../../data/constants";

type THeader = {
  handleChange: (e: string) => void;
};

const options = {
  [LANG.EN]: "GB",
  [LANG.RU]: "RU",
  [LANG.FR]: "FR",
  [LANG.IT]: "IT",
};

export const Header: FC<THeader> = ({ handleChange }) => {
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation();

  const [defaultLang] = window.navigator.language.split("-");

  const [lang, setLang] = useState<string>(
    Cookies.get("i18next") || defaultLang in LANG ? defaultLang : LANG.EN
  );

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
          <ReactFlagsSelect
            selected={options[lang]}
            onSelect={(lang) => {
              const newLang =
                Object.keys(options).find((key) => options[key] === lang) ||
                "GB";
              handleChange(newLang);
              setLang(newLang);
            }}
            countries={["GB", "IT", "FR", "RU"]}
            showSelectedLabel={false}
            showOptionLabel={false}
          />
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
