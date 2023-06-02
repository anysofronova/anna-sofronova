import { FC } from "react";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Socials.module.scss";
import { CONTACT_LINKS } from "../../../data/constants";

export const Socials: FC = () => {
  return (
    <div className={styles.socials}>
      <a
        href={CONTACT_LINKS.LINKEDIN}
        aria-label={CONTACT_LINKS.LINKEDIN}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href={CONTACT_LINKS.GITHUB}
        aria-label={CONTACT_LINKS.GITHUB}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={CONTACT_LINKS.TELEGRAM}
        aria-label={CONTACT_LINKS.TELEGRAM}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a
        href={CONTACT_LINKS.CODEWARS}
        aria-label={CONTACT_LINKS.CODEWARS}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faCode} />
      </a>
    </div>
  );
};
