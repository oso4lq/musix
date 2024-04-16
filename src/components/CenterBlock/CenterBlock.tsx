"use client"

import styles from "./CenterBlock.module.css";
import React from "react";
import dynamic from "next/dynamic";
import { FilterBlock } from "@/components/FilterBlock";
import { SearchBar } from "@/components/SearchBar";
import { ContentTitle } from "@/components/ContentTitle";

type centerBlockType = {
  playlistID: string,
  isFilter: boolean,
};

export default function CenterBlock({ playlistID, isFilter }: centerBlockType) {

  const ContentPlaylistWithCustomLoading = dynamic(() => import("../ContentPlaylist/ContentPlaylist"), {
    loading: () => <p className={styles.playlistTitleCol}>Loading...</p>,
  })

  let centerBlockTitle;
  switch (playlistID) {
    case "1":
      centerBlockTitle = "Daily Playlist";
      break;
    case "2":
      centerBlockTitle = "100 Dancing Hits";
      break;
    case "3":
      centerBlockTitle = "Indie Charge";
      break;
    default:
      centerBlockTitle = "Tracks";
      break;
  }

  return (
    <div className={styles.mainCenterBlock}>
      <SearchBar />
      <h2 className={styles.centerBlockH2}>{centerBlockTitle}</h2>
      {isFilter && <FilterBlock />}
      <div className={styles.centerBlockContent}>
        <ContentTitle />
        <ContentPlaylistWithCustomLoading />
      </div>
    </div>
  );
}
