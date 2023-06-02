import { FC, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Navigation,
  Portfolio,
  Skills,
} from "./components";
import Cookies from "js-cookie";
import { LANG } from "./data/constants";

const langBrowser = window.navigator.language.split("-")[0];
const defaultLang =
  Cookies.get("i18next") ||
  (Object.values(LANG).includes(langBrowser) && langBrowser) ||
  LANG.EN;

export const App: FC = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>(defaultLang);

  useEffect(() => {
    changeLanguage(lang);
  }, []);

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  useEffect(() => {
    AOS.init();
  }, [lang]);

  return (
    <>
      <Header handleChange={changeLanguage} lang={lang} />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <Navigation />
    </>
  );
};
