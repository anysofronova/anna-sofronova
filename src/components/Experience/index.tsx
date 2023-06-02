import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faMapPin } from "@fortawesome/free-solid-svg-icons";

import styles from "./Experience.module.scss";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id={"experience"} className={styles.experience}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("experience_title")}</h2>
        </div>
        <div className={styles.main}>
          {Array(3)
            .fill("0")
            .map((i, idx) => (
              <div data-aos="fade-up" className={styles.item} key={idx}>
                <h3>{t(`experience_info${idx + 1}`)}</h3>
                <h4>{t(`experience_name${idx + 1}`)}</h4>
                <div className={styles.list}>
                  <p className={styles.info}>
                    {t(`experience_list${idx + 1}1`)}
                  </p>
                  <p>{t(`experience_list${idx + 1}2`)}</p>
                </div>
                <div className={styles.about}>
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>
                      {t(`experience_date${idx + 1}1`)} –{" "}
                      {t(`experience_date${idx + 1}2`)}
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faMapPin} />
                    <span>{t(`experience_place${idx + 1}`)}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
