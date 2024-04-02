import classNames from "classnames";
import styles from "./CenterBlock.module.css";
import React from "react";
import { FilterBlock } from "@/components/FilterBlock";
import dynamic from "next/dynamic";

export default function CenterBlock() {

  const ContentPlaylistWithCustomLoading = dynamic(() => import("../ContentPlaylist/ContentPlaylist"), {
    loading: () => <p>Loading...</p>,
  })

  return (
    <div className={classNames(styles.mainCenterBlock, styles.centerBlock)}>
      <div className={classNames(styles.centerBlockSearch, styles.search)}>
        <svg className={styles.searchSvg}>
          <use href="/img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Search"
          name="search"
        />
      </div>
      <h2 className={styles.centerBlockH2}>Tracks</h2>
      <FilterBlock />
      <div
        className={classNames(
          styles.centerBlockContent,
          styles.playlistContent
        )}
      >
        <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>
            Track
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>
            Artist
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>
            Album
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use href="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
          <div></div>
        </div>
        <ContentPlaylistWithCustomLoading />
      </div>
    </div>
  );
}
