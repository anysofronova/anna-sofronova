import { FC } from "react";
import {
  faArrowUp,
  faBriefcase,
  faFaceSmile,
  faGraduationCap,
  faHouse,
  faMessage,
  faSquarePollVertical,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Navigation.module.scss";
import useScrollspy from "../../hooks/useScrollspy";

type TNav = {
  title: string;
  icon: any;
};

export const Navigation: FC = () => {
  const ids: TNav[] = [
    { title: "home", icon: <FontAwesomeIcon icon={faHouse} /> },
    { title: "about", icon: <FontAwesomeIcon icon={faFaceSmile} /> },
    { title: "education", icon: <FontAwesomeIcon icon={faGraduationCap} /> },
    { title: "experience", icon: <FontAwesomeIcon icon={faBriefcase} /> },
    { title: "skills", icon: <FontAwesomeIcon icon={faStar} /> },
    {
      title: "portfolio",
      icon: <FontAwesomeIcon icon={faSquarePollVertical} />,
    },
    { title: "contact", icon: <FontAwesomeIcon icon={faMessage} /> },
  ];
  const { activeId, scroll } = useScrollspy(
    ids.map((id) => id.title),
    -2
  );

  return (
    <nav className={styles.nav}>
      {ids.map((item) => (
        <a
          href={`#${item.title}`}
          aria-label={item.title}
          key={item.title}
          className={item.title === activeId ? styles.active : ""}
        >
          {item.icon}
        </a>
      ))}
      {scroll > 800 && (
        <div className={styles.up}>
          <a href="#home" aria-label="home">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      )}
    </nav>
  );
};
