import { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import styles from "./Portfolio.module.scss";
import { PortfolioItem } from "./PortfolioItem";
import { portfolioData } from "../../data/portfolio-data";

export const Portfolio: FC = () => {
  const { t } = useTranslation();

  return (
    <section id={"portfolio"} className={styles.portfolio}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3 className={"text-light"}>{t("common_title")}</h3>
          <h2>{t("portfolio_title")}</h2>
        </div>
        <div className={styles.main}>
          {portfolioData.map((i) => (
            <PortfolioItem key={i.id} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
};
