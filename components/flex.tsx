import styles from "./flex.module.css";
export default function Flex({ children }) {
  return <div className={styles.flex}>{children}</div>;
}
