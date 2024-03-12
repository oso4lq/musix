"use client"

import Main from "@components/Main/Main";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getTracks } from '../api.tsx';
import { useTracks } from "@/hooks/useTracks";

export default function Home() {

  // const { userData } = useUser();
  // const { theme } = useGlobal();

  // useEffect(() => {
  //   window.localStorage.setItem("theme", theme);
  // }, [theme]);

  // const { returnTrack } = useTracks();

  //  Loader
  const { returnTrack } = useTracks();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    getTracks()
      .then((data) => {
        // returnTrack(data);
        returnTrack(data);
      })
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        setHasError(true);
        console.warn(error);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main isLoaded={isLoaded} />
      </div>
    </div>
  );
}
