import { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./Skills.module.scss";

export const Skills: FC = () => {
  const { t } = useTranslation();

  return (
    <section id={"skills"} className={styles.skills}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("skills_title")}</h2>
        </div>
        <div className={styles.main}>
          <div data-aos="fade-up">
            <h3>Hard Skills</h3>
            <ul>
              <li>HTML5</li>
              <li>SCSS</li>
              <li>TS | JS | Node</li>
              <li>React | Next</li>
              <li>Redux | MobX | Zustand</li>
              <li>MUI | Tailwind | Ant | Chakra | Bootstrap</li>
              <li>Cypress | Jest</li>
              <li>Webpack | Vite</li>
              <li>Prettier | ESLint</li>
              <li>Git | Docker | Firebase | MongoDb | SQL</li>
            </ul>
          </div>
          <div data-aos="fade-up">
            <h3>Soft Skills</h3>
            <ul>
              {Array(7)
                .fill("0")
                .map((i, idx) => (
                  <li key={idx}>{t(`skills_soft_${idx + 1}`)} </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
