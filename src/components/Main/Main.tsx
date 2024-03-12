"use client"
import styles from "./Main.module.css";
import { Bar } from "@components/Bar";
import { CenterBlock } from "@/components/CenterBlock";
import { MainSlideBar } from "@components/MainSlideBar";
import { Nav } from "@components/Nav";

export default function Main({ isLoaded }) {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        {
          isLoaded && (
            <CenterBlock />
          )}
        <MainSlideBar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </>
  );
}
