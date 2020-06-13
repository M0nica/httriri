import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <h1 className={styles.heading}>
        HTT<span className={styles.accent}>RIRI</span>
      </h1>
      <p className={styles.subheading}>
        Explore HTTP status codes with this collection of Rihanna GIFs
      </p>
    </>
  );
}
