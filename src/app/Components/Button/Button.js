import Link from "next/link";
import styles from "@/app/Components/Button/button.module.scss";

export default function Button({ children }) {
  return (
    <Link href="/">
      <div className={styles.button}>
        <div>{children}</div>
        <img src="./image/arrow-right.png" alt="arrow"></img>
      </div>
    </Link>
  );
}
