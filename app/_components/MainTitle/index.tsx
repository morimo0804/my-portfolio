"use client";

import { useEffect, useRef } from "react";
import styles from "./index.module.css";

type Props = {
  text: string;
};

export default function MainTitle({ text }: Props) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      titleRef.current?.classList.add(styles.visible);
    }, 130);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 ref={titleRef} className={styles.title}>
      {text.split("").map((char, index) => (
        <span key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
