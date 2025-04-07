"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

type Props = {
  title: string;
};

export default function Heading({ title }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.lines}>
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "97%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={styles.line}
        ></motion.span>
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className={styles.line}
        ></motion.span>
      </div>
    </div>
  );
}
