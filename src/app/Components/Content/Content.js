import styles from "@/app/Components/Content/content.module.scss";

export default function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}
