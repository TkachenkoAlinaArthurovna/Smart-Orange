import Image from "next/image";
import styles from "./page.module.css";
import Content from "@/app/Components/Content/Content";
import Header from "@/app/Components/Header/Header";
import SlidersBlock from "@/app/Components/SlidersBlock/SlidersBlock";
import AboutBlock from "@/app/Components/AboutBlock/AboutBlock";
import TasksBlock from "@/app/Components/TasksBlock/TasksBlock";
import ProjectsBlock from "@/app/Components/ProjectsBlock/ProjectsBlock";
import FormaBlock from "@/app/Components/FormaBlock/FormaBlock";
import Footer from "@/app/Components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Content>
        <Header></Header>
        <SlidersBlock></SlidersBlock>
        <AboutBlock></AboutBlock>
        <TasksBlock></TasksBlock>
        <ProjectsBlock></ProjectsBlock>
        <FormaBlock></FormaBlock>
      </Content>
      <Footer></Footer>
    </main>
  );
}
