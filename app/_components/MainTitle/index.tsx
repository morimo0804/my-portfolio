"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";

type Props = {
  text: string;
};

export default function MainTitle({ text }: Props) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, [text]);

  return <h1 className={styles.mainTitle}>{displayedText}</h1>;
}
