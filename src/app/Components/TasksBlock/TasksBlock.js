import styles from "@/app/Components/TasksBlock/tasksBlock.module.scss";
import Title from "@/app/Components/Title/Title";

export default function TasksBlock() {
  return (
    <div className={styles.tasks}>
      <Title>Основные задачи</Title>
      <div className={styles.tasks__wrapper}>
        <div className={styles.tasks__task}>
          <div className={styles.tasks__wrapper_img}>
            <img src="./image/1.png" alt="first"></img>
          </div>
          <div className={styles.tasks__wrapper_text}>
            Создание комфортных условий и повышение качества обслуживания
            клиентов
          </div>
        </div>
        <div className={styles.tasks__task}>
          <div className={styles.tasks__wrapper_img}>
            <img src="./image/2.png" alt="second"></img>
          </div>
          <div className={styles.tasks__wrapper_text}>
            Постоянно совершенствовать качество предоставляемых услуг путем
            обучения персонала, закупки нового оборудования и усиленной рекламы
            на рынке
          </div>
        </div>
      </div>
    </div>
  );
}
