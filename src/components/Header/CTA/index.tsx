import { FC } from "react";
import { useTranslation } from "react-i18next";

import cv from "../../../assets/CV_Sofronova_Anna.pdf";

const ctaStyles = {
  display: "flex",
  gap: "1.2rem",
  justifyContent: "center",
};

export const CTA: FC = () => {
  const { t } = useTranslation();

  return (
    <div style={ctaStyles}>
      <a href={cv} download className={"btn"}>
        {t("header_CV")}
      </a>
      <a href={"#about"} className={"btn btn-primary"}>
        {t("common_button")}
      </a>
    </div>
  );
};
