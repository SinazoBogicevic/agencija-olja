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
            Our landscaping work and{" "}
            <span className={styles.darkBlueTitle}>services</span>
          </span>
        }
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis."
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