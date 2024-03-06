"use client";
import React, { useState } from "react";
import Image from "next/image";
import expand from "../expand.png";
import styles from "../page.module.css";
import clsx from 'clsx';

export type FaqProps = {
  title: string;
  body: string;
  isOpen: boolean;
  onClick: () => void;
};

export function Faq({ title, body, isOpen, onClick }: FaqProps) {
  return (
    <div id="FAQs" onClick={onClick} className={clsx(styles.cardQuestion, {
      [styles.success]: isOpen,
      [styles.error]: !isOpen,
    })}>
      <span className={styles.cardTitle}>
      <p>
        {title} 
      </p>
      <Image src={expand} alt={""} width={16} />
      </span>
      {isOpen && <p>{body}</p>}
    </div>
  );
}

export default Faq;
