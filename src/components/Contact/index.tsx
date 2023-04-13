import cn from "classnames";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

import styles from "./Contact.module.scss";
import { ContactForm } from "./ContactForm";
import { LINKS } from "../../data/constants";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id={"contact"} className={styles.contact}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("contact_title")}</h2>
        </div>

        <div className={styles.main}>
          <div className={styles.messages} data-aos="fade-up">
            <div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <h4>Email</h4>
              <a href={LINKS.EMAIL} target={"_blank"} rel="noreferrer">
                anysofronova@yandex.ru
              </a>
            </div>
            <div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faTelegram} />
              </div>
              <h4>Telegram</h4>
              <a href={LINKS.TELEGRAM} target={"_blank"} rel="noreferrer">
                @Anna_Fawn
              </a>
            </div>
            <div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <h4>Linked In</h4>
              <a href={LINKS.LINKEDIN} target={"_blank"} rel="noreferrer">
                @anna-sofronova
              </a>
            </div>
          </div>
          <div className={styles.form} data-aos="fade-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
