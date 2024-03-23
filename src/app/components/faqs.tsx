"use client";
import styles from "../page.module.css";
import { HTMLAttributes, ReactNode, use, useState } from "react";
import Section from "./section";
import { questions } from "../statics";
import Faq from "./faq";

export function Faqs() {

    const [openFaq, setOpenFaq] = useState(false);
    const [selected, setSelected] = useState(0);

  return (
    <Section
        title={
          <span>
            Cesto Postavljena {" "}
            <span className={styles.darkBlueTitle}>Pitanja</span>
          </span>
        }
        subtitle={
          "Za sva dodatna pitanja i konsultacije, kontaktirajte nas."
        }
        style={styles.cards}
      >
        {questions.map(({ id, title, body }) => 
          <Faq key={id} title={title} body={body} isOpen={selected === id ? openFaq : false} onClick={() => {
            setSelected(id)
            setOpenFaq((curr)=>!curr)}} />
        )}
      </Section>
  );
}

export default Faqs;