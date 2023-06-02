import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./ContactForm.module.scss";

type TInputs = {
  name: string;
  email: string;
  message?: string;
};

export const ContactForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInputs>();

  const sendEmail: SubmitHandler<TInputs> = async (formData) => {
    try {
      await emailjs.send(
        "service_6d7lceo",
        "template_nzyz4ph",
        formData,
        "R4L-T1FPTvIgE6xIx"
      );
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <label>{t("contact_name")}</label>
      <input
        {...register("name", {
          required: true,
          pattern: /[a-zA-zа-яА-Я]/gi,
          maxLength: 30,
        })}
      />

      <label>Email: </label>
      <input
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+\.\S+$/gi,
        })}
      />

      <label>{t("contact_message")}</label>
      <textarea {...register("message")} />

      {errors.name?.type === "maxLength" && (
        <p className={styles.error}>{t("contact_error_name")}</p>
      )}
      {errors.email?.type === "pattern" && (
        <p className={styles.error}>{t("contact_error_email")}</p>
      )}
      {(errors.name?.type === "required" ||
        errors.email?.type === "required") && (
        <p className={styles.error}>{t("contact_error_type")}</p>
      )}

      <div className={styles.button}>
        <button type="submit" className="btn btn-primary">
          {t("contact_button")}
        </button>
      </div>
    </form>
  );
};
