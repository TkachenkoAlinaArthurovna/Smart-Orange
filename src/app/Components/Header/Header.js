import Link from "next/link";

import Navigation from "@/app/Components/Header/ComponentsHeader/Navigation";
import styles from "@/app/Components/Header/header.module.scss";
import Logo from "@/app/Components/Logo/Logo";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          <Logo fill={"#2C2C2C"}></Logo>
        </Link>
      </div>
      <Navigation></Navigation>
    </div>
  );
}
