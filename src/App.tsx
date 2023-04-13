import { FC } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

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
    </>
  );
};
