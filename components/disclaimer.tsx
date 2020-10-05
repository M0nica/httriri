import styles from "./disclaimer.module.css";
import React from "react"

export default function Disclaimer() {
  return (
    <React.Fragment>
      <p className={styles.disclaimer}>
        Images are used on this site for educational purposes only.
      </p>
    </React.Fragment>
  );
}
