import styles from "./statusCode.module.css";
export default function Flex({ code, title }) {
  return (
    <div className={styles.card}>
      <p>
        <img className={styles.gif} src={`/images/${code}.gif`} />
      </p>
      <a className={styles.link} href={`https://httpstatuses.com/${code}`}>
        {title}
      </a>
    </div>
  );
}
