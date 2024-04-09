"use client"

import { useAppDispatch } from "@/hooks";
import styles from "./MainSlideBar.module.css"
import classNames from "classnames";
import Image from "next/image";
import { setPlaylistNumber } from "@/store/features/tracksSlice";

export default function MainSlideBar() {

  const dispatcher = useAppDispatch();
  const handlePlaylistNumber = (number: number) => {
    dispatcher(setPlaylistNumber(number));
  };

  return (
    <div className={classNames(styles.mainSidebar, styles.sidebar)}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>Authorised Osetr</p>
        <div className={styles.sidebarIcon}>
          <svg>
            <use href="/img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            {/* <a className={styles.sidebarLink} href="#"> */}
            <Image
              width={250}
              height={150}
              className={styles.sidebarImage}
              onClick={() => handlePlaylistNumber(1)}
              src="/img/playlist01.png"
              alt="day's playlist"
            />
            {/* </a> */}
          </div>
          <div className={styles.sidebarItem}>
            {/* <a className={styles.sidebarLink} href="#"> */}
            <Image
              width={250}
              height={150}
              className={styles.sidebarImage}
              onClick={() => handlePlaylistNumber(2)}
              src="/img/playlist02.png"
              alt="day's playlist"
            />
            {/* </a> */}
          </div>
          <div className={styles.sidebarItem}>
            {/* <a className={styles.sidebarLink} href="#"> */}
            <Image
              width={250}
              height={150}
              className={styles.sidebarImage}
              onClick={() => handlePlaylistNumber(3)}
              src="/img/playlist03.png"
              alt="day's playlist"
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
