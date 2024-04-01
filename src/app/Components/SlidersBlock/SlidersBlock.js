"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/app/Components/SlidersBlock/slidersBlock.module.scss";
import Button from "@/app/Components/Button/Button";

export default function SlidersBlock() {
  const [swiper, setSwiper] = useState();
  return (
    <div className={styles.sliders__block_wrapper}>
      <div className={styles.sliders__title}>
        <div>
          <div className={styles.sliders__project}>PROJECT</div>
          <div className={styles.sliders__home}>HOME</div>
        </div>
        <div
          className={styles.sliders__arrow_next}
          onClick={() => swiper.slideNext()}
        >
          <img src="./image/arrow-right.png" alt="arrow"></img>
        </div>
        <div
          className={styles.sliders__arrow_prev}
          onClick={() => swiper.slidePrev()}
        >
          <img src="./image/arrow-left.png" alt="arrow"></img>
        </div>
      </div>
      <div className={styles.sliders__wrapper}>
        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation]}
          className={styles.sliders}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide>
            <img
              className={styles.sliders__image}
              src="./image/image_1.png"
              alt="architecture"
            ></img>
            <Button>ВЗГЛЯНУТЬ</Button>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.sliders__image}
              src="./image/image_1.png"
              alt="architecture"
            ></img>
            <Button>ВЗГЛЯНУТЬ</Button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
