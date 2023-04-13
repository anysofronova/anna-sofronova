import { FC } from "react";
import styles from "./PortfolioItem.module.scss";

import { IPortfolio } from "../../../data/portfolio-data";

export const PortfolioItem: FC<IPortfolio> = ({
  img,
  name,
  tags,
  github,
  link,
}) => {
  return (
    <div className={styles.item} data-aos="fade-up">
      <div className={styles.image}>
        <img src={img} alt={`Portfolio Item ${name}`} />
      </div>
      <h3>{name}</h3>
      <div className={styles.links}>
        <a href={link} target="_blank" rel="noreferrer">
          DEMO
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div className={styles.tags}>
        {tags.map((i) => (
          <div className={styles.tag} key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};
