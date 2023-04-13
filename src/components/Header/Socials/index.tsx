import { FC } from "react";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Socials.module.scss";
import { LINKS } from "../../../data/constants";

export const Socials: FC = () => {
  return (
    <div className={styles.socials}>
      <a
        href={LINKS.LINKEDIN}
        aria-label={LINKS.LINKEDIN}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href={LINKS.GITHUB}
        aria-label={LINKS.GITHUB}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={LINKS.TELEGRAM}
        aria-label={LINKS.TELEGRAM}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a
        href={LINKS.CODEWARS}
        aria-label={LINKS.CODEWARS}
        target={"_blank"}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faCode} />
      </a>
    </div>
  );
};
