"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import expand from "../expand.png";
import styles from "../page.module.css";

export type FaqProps = {
  title: string;
  body: string;
};

export function Faq({ title, body }: FaqProps) {
  const [showLanguages, setShowLanguages] = useState(false);
  return (
    <div className={styles.cardQuestion}>
      <p onClick={() => setShowLanguages((curr) => !curr)}>
        <h3>
          {title} <Image src={expand} alt={""} width={16} />
        </h3>
      </p>
      {showLanguages && <p>{body}</p>}
    </div>
  );
}

export default Faq;
