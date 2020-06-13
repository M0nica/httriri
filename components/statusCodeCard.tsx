import styles from "./statusCodeCard.module.css";

export default function StatusCodeCard({ code, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.gif} src={`/images/${code}.gif`} />

      <a className={styles.link} href={`https://httpstatuses.com/${code}`}>
        {code}: {title} &#x2197;
      </a>
    </div>
  );
}
