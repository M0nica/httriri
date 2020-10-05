import styles from "./header.module.css";
import React from "react"

export default function Header() {
  return (
    <React.Fragment>
      <h1 className={styles.heading}>
        HTT<span className={styles.accent}>RIRI</span>
      </h1>
      <p className={styles.subheading}>
        Explore HTTP status codes with this collection of Rihanna GIFs
      </p>
    </React.Fragment>
  );
}
