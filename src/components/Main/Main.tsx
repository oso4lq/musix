"use client"
import styles from "./Main.module.css";
import { Nav } from "@components/Nav";
import { CenterBlock } from "@/components/CenterBlock";
import { MainSlideBar } from "@components/MainSlideBar";
import { Bar } from "@components/Bar";
import { useAppSelector } from "@/store/store";

export default function Main() {
  // const [track, setTrack] = useState<trackType | null>(null);

  const { track } = useAppSelector((state) => state.tracks)
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <MainSlideBar />
      </main>
      {track && <Bar />}
      {/* <Bar/> */}
      <footer className="footer"></footer>
    </>
  );
}
