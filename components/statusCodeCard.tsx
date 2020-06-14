import styles from "./statusCodeCard.module.css";

export default function StatusCodeCard({ code, title, description }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.gif}
        src={`/images/${code}.gif`}
        alt={description}
      />

      <a className={styles.link} href={`https://httpstatuses.com/${code}`}>
        {code}: {title} &#x2197;
      </a>
    </div>
  );
}
