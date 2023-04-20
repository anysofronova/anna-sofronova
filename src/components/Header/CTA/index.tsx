import { FC } from "react";
import { useTranslation } from "react-i18next";

import cv_ru from "../../../assets/CV-ru.pdf";
import cv_en from "../../../assets/CV-en.pdf";
import { LANG } from "../../../data/constants";

const cta = {
  display: "flex",
  gap: "1.2rem",
  justifyContent: "center",
};

type TCta = {
  currentLocale: string | undefined;
};

export const CTA: FC<TCta> = ({ currentLocale }) => {
  const { t } = useTranslation();

  const cv = currentLocale === LANG.RU ? cv_ru : cv_en;

  return (
    <div style={cta}>
      <a href={cv} download className={"btn"}>
        {t("header_CV")}
      </a>
      <a href={"#about"} className={"btn btn-primary"}>
        {t("common_button")}
      </a>
    </div>
  );
};
