"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import contactUs from "../contactUs.png";
import styles from "../page.module.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { register, handleSubmit } = useForm({
    defaultValues:{
      name:"",
      email:"",
      message:"",
      telephone:"",
      services:"",
    }
  });

  const form = useRef<string | HTMLFormElement | any>();
  const serviceId = "service_da60x1n"
  const templateId = "template_kkut2iq"
  const key = "TOkQO9mDhNq-mkBRJ"

  const onSubmit = (formData: Record<string, unknown> | undefined) => {

    if(serviceId && templateId && key){
      emailjs
      .send(serviceId, templateId, formData, key)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  };

  return (
    <div className={styles.contactWrapper} id="Contact">
      <Image src={contactUs} className={styles.contactImage} alt="" />
      <div className={styles.contactContent}>
        <div className={styles.contectTitle}>
          <h1>
            <span className={styles.darkBlueTitle}>KONTAKTIRAJTE</span> NAS
          </h1>
          <p>
          Za sva dodatna pitanja i stručnu podršku, molimo vas da popunite kontakt formu 
          u nastavku. Naše kolege će vas kontaktirati u najkraćem roku.{" "}
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
              <input
                type="text"
                placeholder="Services"
                {...register("services", { required: true })}
                className={styles.input}
              />
            </div>
            <div className={styles.inputMassage}>
              <p>Messages</p>
              <input
                type="text"
                placeholder=""
                {...register("message", { required: true })}
                className={styles.input}
              />
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
