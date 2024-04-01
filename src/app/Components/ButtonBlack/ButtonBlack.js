import Link from "next/link";
import styles from "@/app/Components/ButtonBlack/buttonBlack.module.scss";

export default function ButtonBlack({ children, type }) {
  return (
    <>
      {type ? (
        <button type={type} className={styles.button}>
          <div>{children}</div>
          <img src="./image/arrow-white.png" alt="arrow"></img>
        </button>
      ) : (
        <Link href="/">
          <button type="button" className={styles.button}>
            <div>{children}</div>
            <img src="./image/arrow-white.png" alt="arrow"></img>
          </button>
        </Link>
      )}
    </>
  );
}
