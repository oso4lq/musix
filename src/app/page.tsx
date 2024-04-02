import Main from "@components/Main/Main";
import styles from "./page.module.css";

export default function Home() {

  // const { userData } = useUser();
  // const { theme } = useGlobal();

  // useEffect(() => {
  //   window.localStorage.setItem("theme", theme);
  // }, [theme]);

  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Main />
        </div>
      </div>
  );
}
