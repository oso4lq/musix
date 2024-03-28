"use client"
import styles from "./Main.module.css";
import { Nav } from "@components/Nav";
import { CenterBlock } from "@/components/CenterBlock";
import { MainSlideBar } from "@components/MainSlideBar";
import { Bar } from "@components/Bar";
import { useAppSelector } from "@/hooks";

export default function Main() {
  const { track } = useAppSelector((state) => state.tracks)
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <MainSlideBar />
      </main>
      {track && <Bar />}
      <footer className="footer"></footer>
    </>
  );
}
