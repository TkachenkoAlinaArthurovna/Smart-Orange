import styles from "@/app/Components/Title/title.module.scss";

export default function Title({ children }) {
  return <div className={styles.title}>{children}</div>;
}
