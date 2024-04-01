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
            <span className={styles.darkBlueTitle}>KONTAKTIRAJTE</span> NAS
          </h1>
          <p>
            Za sva dodatna pitanja i stručnu podršku, molimo vas da popunite
            kontakt formu u nastavku. Naše kolege će vas kontaktirati u
            najkraćem roku.{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputsWrapper}>
            <div className={styles.inputs}>
              <input
                placeholder="Full Name"
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
                placeholder="Telephone"
                {...register("telephone", { required: true })}
                className={styles.input}
              />
              <select
                placeholder="Services"
                {...register("services", { required: true })}
                className={styles.input}
              >
                <option value="" hidden>Odaberite uslugu:</option>
                <option>Finansije</option>
                <option>Revizija</option>
                <option>Osiguranje</option>
                <option>Planiranje</option>
                <option>Finansijsko Planiranje</option>
                <option>Drugo...</option>
              </select>
            </div>
            <div className={styles.inputMassage}>
              <p className={styles.message}>Message:</p>
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
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
