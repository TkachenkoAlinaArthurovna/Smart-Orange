import styles from "@/app/Components/AboutBlock/aboutBlock.module.scss";
import Button from "@/app/Components/Button/Button";
import Title from "@/app/Components/Title/Title";

export default function AboutBlock() {
  return (
    <div className={styles.about}>
      <div className={styles.about__gallery}>
        <div>
          <img src="./image/image_2.png" alt="architecture"></img>
          <img src="./image/image_4.png" alt="architecture"></img>
        </div>
        <div>
          <img src="./image/image_3.png" alt="architecture"></img>
        </div>
      </div>
      <div className={styles.about__text}>
        <Title>О компании</Title>
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
