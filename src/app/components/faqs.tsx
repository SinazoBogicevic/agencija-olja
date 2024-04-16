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
            Често постављана {" "}<span className={styles.darkBlueTitle}>питања</span>
          </span>
        }
        subtitle={
          "Рачуноводствене агенције играју кључну улогу у финансијском управљању пословања својих клијената. Поред пружања рачуноводствених и књиговодствених услуга, данас се агенције све више ослањају на онлајн платформе како би унапредиле своје пословање и обезбедиле успех на конкурентном тржишту. За сва додатна питања и консултације контактирајте нас."
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