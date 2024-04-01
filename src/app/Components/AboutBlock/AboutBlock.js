"use client";
import { useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/app/Components/AboutBlock/aboutBlock.module.scss";
import Button from "@/app/Components/Button/Button";
import Title from "@/app/Components/Title/Title";

export default function AboutBlock() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tlImg1 = gsap.timeline({
      scrollTrigger: { trigger: ".animation-img1", scrub: true, restart: true },
    });
    tlImg1.to(".animation-img1", { scale: 1 });

    const tlImg2 = gsap.timeline({
      scrollTrigger: { trigger: ".animation-img2", scrub: true, restart: true },
    });
    tlImg2.to(".animation-img2", { scale: 1 });

    const tlImg3 = gsap.timeline({
      scrollTrigger: { trigger: ".animation-img3", scrub: true, restart: true },
    });
    tlImg3.to(".animation-img3", { scale: 1 });
  }, []);

  return (
    <div className={styles.about}>
      <div className={styles.about__gallery}>
        <div>
          <img
            className="animation-img1"
            src="./image/image_2.png"
            alt="architecture"
          ></img>
          <img
            className="animation-img2"
            src="./image/image_4.png"
            alt="architecture"
          ></img>
        </div>
        <div>
          <img
            className="animation-img3"
            src="./image/image_3.png"
            alt="architecture"
          ></img>
        </div>
      </div>
      <div className={styles.about__text}>
        <Title className>О компании</Title>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <Button>ЧИТАТЬ</Button>
      </div>
    </div>
  );
}
