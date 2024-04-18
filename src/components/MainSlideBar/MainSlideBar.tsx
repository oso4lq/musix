"use client"

import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./MainSlideBar.module.css"
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { logOut } from "@/store/features/authSlice";

type mainSideBarType = {
  isSideBar: boolean
}

export default function MainSlideBar({ isSideBar }: mainSideBarType) {

  const dispatcher = useAppDispatch();
  const username = useAppSelector((state) => state.auth.authUserData.username);

  const handleLogout = () => {
    dispatcher(logOut());
  }

  return (
    <div className={classNames(styles.mainSidebar, styles.sidebar)}>
      <div className={styles.sidebarPersonal}>
        <p className={styles.sidebarPersonalName}>
          {username ? username : (<Link href={"/signin/"}>Sign In</Link>)}
        </p>
        <div className={styles.sidebarIcon}>
          <div onClick={() => handleLogout()}>
            <svg>
              <use href="/img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
      </div>
      {isSideBar && (
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <Link href={"/tracks/1"}>
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImage}
                  src="/img/playlist01.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link href={"/tracks/2"}>
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImage}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link href={"/tracks/3"}>
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImage}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
