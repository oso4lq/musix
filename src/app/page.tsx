"use client"

import Main from "@components/Main/Main";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getTracks } from '../api';
import { TracksProvider } from "@/contexts/tracks-context";

export default function Home() {

  // const { userData } = useUser();
  // const { theme } = useGlobal();

  // useEffect(() => {
  //   window.localStorage.setItem("theme", theme);
  // }, [theme]);

  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    getTracks()
      .catch((error) => {
        setHasError(true);
        console.warn(error);
      });
  }, []);

  return (
    <TracksProvider>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Main />
        </div>
      </div>
    </TracksProvider>
  );
}
