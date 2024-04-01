"use client";

import Link from "next/link";
import styles from "@/app/Components/ProjectsBlock/projectsBlock.module.scss";
import Title from "@/app/Components/Title/Title";
import Button from "@/app/Components/Button/Button";
import ButtonBlack from "@/app/Components/ButtonBlack/ButtonBlack";

export default function ProjectsBlock() {
  return (
    <div className={styles.projects}>
      <Title>Наши проекты</Title>
      <div className={styles.projects__wrapper}>
        <div className={styles.projects__wrapper_top}>
          <div className={styles.projects__wrapper_img}>
            <Link href="/">
              <img
                id="img_1"
                className={`${styles.projects__img_1} ${styles.projects__img}`}
                src="./image/image_5.png"
                alt="architecture"
              ></img>
              <span className={styles.projects__hover_img}>
                <span className={styles.projects__hover_wrapper}>
                  <span className={styles.projects__hover_title}>
                    ДОСУГОВЫЙ ЦЕНТР
                  </span>
                  <span className={styles.projects__hover_transition}>
                    <span>ПОДРОБНЕЕ</span>
                    <img src="./image/arrow-white.png" alt="arrow"></img>
                  </span>
                </span>
              </span>
            </Link>
          </div>
          <div className={styles.projects__wrapper_img}>
            <Link href="/">
              <img
                id="img_2"
                className={`${styles.projects__img_2} ${styles.projects__img}`}
                src="./image/image_6.png"
                alt="architecture"
              ></img>
              <span className={styles.projects__hover_img}>
                <span className={styles.projects__hover_wrapper}>
                  <span className={styles.projects__hover_title}>
                    ДОСУГОВЫЙ ЦЕНТР
                  </span>
                  <span className={styles.projects__hover_transition}>
                    <span>ПОДРОБНЕЕ</span>
                    <img src="./image/arrow-white.png" alt="arrow"></img>
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.projects__wrapper_bottom}>
          <div className={styles.projects__wrapper_img}>
            <Link href="/">
              <img
                id="img_3"
                className={`${styles.projects__img_3} ${styles.projects__img}`}
                src="./image/image_7.png"
                alt="architecture"
              ></img>
              <span className={styles.projects__hover_img}>
                <span className={styles.projects__hover_wrapper}>
                  <span className={styles.projects__hover_title}>
                    ДОСУГОВЫЙ ЦЕНТР
                  </span>
                  <span className={styles.projects__hover_transition}>
                    <span>ПОДРОБНЕЕ</span>
                    <img src="./image/arrow-white.png" alt="arrow"></img>
                  </span>
                </span>
              </span>
            </Link>
          </div>
          <div className={styles.projects__wrapper_img}>
            <Link href="/">
              <img
                id="img_4"
                className={`${styles.projects__img_4} ${styles.projects__img}`}
                src="./image/image_8.png"
                alt="architecture"
              ></img>
              <span className={styles.projects__hover_img}>
                <span className={styles.projects__hover_wrapper}>
                  <span className={styles.projects__hover_title}>
                    ДОСУГОВЫЙ ЦЕНТР
                  </span>
                  <span className={styles.projects__hover_transition}>
                    <span>ПОДРОБНЕЕ</span>
                    <img src="./image/arrow-white.png" alt="arrow"></img>
                  </span>
                </span>
              </span>
            </Link>
          </div>
          <div className={styles.projects__wrapper_img}>
            <Link href="/">
              <img
                id="img_5"
                className={`${styles.projects__img_5} ${styles.projects__img}`}
                src="./image/image_9.png"
                alt="architecture"
              ></img>
              <span className={styles.projects__hover_img}>
                <span className={styles.projects__hover_wrapper}>
                  <span className={styles.projects__hover_title}>
                    ДОСУГОВЫЙ ЦЕНТР
                  </span>
                  <span className={styles.projects__hover_transition}>
                    <span>ПОДРОБНЕЕ</span>
                    <img src="./image/arrow-white.png" alt="arrow"></img>
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.projects__wrapper_button}>
        <ButtonBlack>ВСЕ ПРОЕКТИ</ButtonBlack>
      </div>
    </div>
  );
}
