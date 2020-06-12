import styles from "./header.module.css";
import Flex from "./flex";
export default function Header() {
  return (
    <Flex>
      <h1 className={styles.heading}>
        HTTP<span className={styles.accent}>RIRI</span>
      </h1>
      <p className={styles.subheading}>
        Explore HTTP status codes with this collection of Rihanna GIFs
      </p>
    </Flex>
  );
}
