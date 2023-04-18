import { FC } from "react";
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

export const App: FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };

  AOS.init();

  return (
    <>
      <Header handleChange={changeLanguage} />
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
