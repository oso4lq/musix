"use client"
import styles from "./Main.module.css";
import { useState } from "react";
import { Nav } from "@components/Nav";
import { CenterBlock } from "@/components/CenterBlock";
import { MainSlideBar } from "@components/MainSlideBar";
import { Bar } from "@components/Bar";
import { trackType } from "@/types/types";

export default function Main() {
  const [track, setTrack] = useState<trackType | null>(null);
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock setTrack={setTrack} />
        <MainSlideBar />
      </main>
      {/* {track && <Bar tracks={track} />} */}
      <Bar tracks={track} />
      <footer className="footer"></footer>
    </>
  );
}
