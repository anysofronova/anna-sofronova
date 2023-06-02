import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./About.module.scss";
import photo from "../../assets/img-about.png";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={cn(styles.about)}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className="text-light">{t("common_title")}</h3>
          <h2>{t("about_title")}</h2>
        </div>
        <div className={cn(styles.main)} data-aos="fade-up">
          <div className={cn(styles.info1)}>
            <p>{t("about_info1")}</p>
            <p>{t("about_info2")}</p>
          </div>
          <div className={cn(styles.image)}>
            <img src={photo} alt="img" />
          </div>
          <div className={cn(styles.info2)}>
            <p>{t("about_info3")}</p>
            <a href="#contact" className="btn btn-primary-variant">
              {t("common_button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
