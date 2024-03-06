"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import contactUs from "../contactUs.png";
import styles from "../page.module.css";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.contactWrapper} id="Contact">
      <Image src={contactUs} className={styles.contactImage} alt="" />
      <div className={styles.contactContent}>
        <div className={styles.contectTitle}>
          <h1>
            <span className={styles.darkBlueTitle}>CONTACT</span> US
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis eleifend quam, non efficitur nisi mattis quis.{" "}
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
                {...register("Message", { required: true })}
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
