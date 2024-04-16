"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import contactUs from "../contactUs.jpg";
import styles from "../page.module.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      telephone: "",
      services: "",
    },
  });

  const form = useRef<string | HTMLFormElement | any>();

  const onSubmit = (formData: Record<string, unknown> | undefined) => {
    console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID)
    if (process.env.NEXT_PUBLIC_YOUR_SERVICE_ID && process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID && process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY) {
      emailjs.send(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, formData, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY).then(
        () => {
          setIsSubmitSuccessful(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    }
  };

  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", telephone: "", services: "", message: "" });
      setIsSubmitSuccessful(false);
    }
  }, [isSubmitSuccessful]);

  return (
    <div className={styles.contactWrapper} id="Contact">
      <Image src={contactUs} className={styles.contactImage} alt="" />
      <div className={styles.contactContent}>
        <div className={styles.contectTitle}>
          <h1>
            <span className={styles.darkBlueTitle}>КОНТАКТИРАЈТЕ</span> НАС
          </h1>
          <p>
          За сва додатна питања и стручну подршку, молимо вас да попуните
контакт форму у наставку. Наше колеге ће Вас контактирати у
најкраћем року.{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputsWrapper}>
            <div className={styles.inputs}>
              <input
                placeholder="Пуно име"
                {...register("name", { required: true, maxLength: 20 })}
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className={styles.input}
              />
            </div>
            <div className={styles.inputs}>
              <input
                type="tel"
                placeholder="Телефон"
                {...register("telephone", { required: true })}
                className={styles.input}
              />
              <select
                placeholder="Services"
                {...register("services", { required: true })}
                className={styles.input}
              >
                <option value="" hidden>Изаберите услугу:</option>
                <option>Финансије</option>
                <option>Ревизија</option>
                <option>Осигурање</option>
                <option>Планирање</option>
                <option>Финансијско Планирање</option>
                <option>Друго...</option>
              </select>
            </div>
            <div className={styles.inputMassage}>
              <p className={styles.message}>Порука:</p>
              <input
                type="text"
                placeholder=""
                {...register("message", { required: true })}
                className={styles.input}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => alert("Poruka poslata")}
            className={styles.submitButton}
          >
            Послати
          </button>
        </form>
      </div>
    </div>
  );
}
