import Link from "next/link";
import Content from "@/app/Components/Content/Content";
import styles from "@/app/Components/Footer/footer.module.scss";
import Logo from "@/app/Components/Logo/Logo";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Content>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__logo}>
            <Link href={"/"}>
              <Logo fill={"#FFFFFF"} width={"70px"} height={"70px"}></Logo>
            </Link>
          </div>
          <div>
            <div className={styles.footer__title}>Информация</div>
            <ul className={styles.footer__menu}>
              <li>
                <Link href={"/"}>Главная</Link>
              </li>
              <li>
                <Link href={"/"}>Галерея</Link>
              </li>
              <li>
                <Link href={"/"}>Проекты</Link>
              </li>
              <li>
                <Link href={"/"}>Сертификаты</Link>
              </li>
              <li>
                <Link href={"/"}>Контакты</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className={`${styles.footer__title} ${styles.contacts_title}`}>
              Контакты
            </div>
            <div className={styles.footer__contact}>
              <div className={styles.footer__contact_img}>
                <img src="./image/social_1.png" alt="social"></img>
              </div>
              <div>
                100000, Республика Казахстан,<br></br> г. Караганда, ул.
                Телевизионная 10
              </div>
            </div>
            <div className={styles.footer__contact}>
              <div className={styles.footer__contact_img}>
                <img src="./image/social_2.png" alt="social"></img>
              </div>
              <Link href="tel:+380000000000">+38 (000) 000 00 00</Link>
            </div>
            <div className={styles.footer__contact}>
              <div className={styles.footer__contact_img}>
                <img src="./image/social_3.png" alt="social"></img>
              </div>
              <Link href="mailto:mail@gmail.com">mail@gmail.com</Link>
            </div>
          </div>
          <div className={styles.footer__wrapper_social_icons}>
            <div className={`${styles.footer__title} ${styles.social_title}`}>
              Социальные сети
            </div>
            <div className={styles.footer__wrapper_social}>
              <div>
                <Link href={"/"}>
                  <img src="./image/social_4.png" alt="social"></img>
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <img src="./image/social_5.png" alt="social"></img>
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <img src="./image/social_6.png" alt="social"></img>
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <img src="./image/social_7.png" alt="social"></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <div className={styles.footer__right}>
        © 2019 Digital Project. Все права защищены.
      </div>
    </div>
  );
}
