import statuses from "../utils/statuses";
import StatusCodeCard from "../components/statusCodeCard";
import styles from "./statusCodeGrid.module.css";

export default function Grid() {
  return (
    <div className={styles.grid}>
      {statuses.map(({ code, title }) => (
        <StatusCodeCard code={code} title={title} key={code} />
      ))}
    </div>
  );
}
