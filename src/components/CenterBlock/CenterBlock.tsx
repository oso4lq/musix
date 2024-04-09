"use client"

import styles from "./CenterBlock.module.css";
import React from "react";
import dynamic from "next/dynamic";
import { FilterBlock } from "@/components/FilterBlock";
import { SearchBar } from "@/components/SearchBar";
import { ContentTitle } from "@/components/ContentTitle";

export default function CenterBlock() {

  const ContentPlaylistWithCustomLoading = dynamic(() => import("../ContentPlaylist/ContentPlaylist"), {
    loading: () => <p className={styles.playlistTitleCol}>Loading...</p>,
  })

  return (
    <div className={styles.mainCenterBlock}>
      <SearchBar />
      <h2 className={styles.centerBlockH2}>Tracks</h2>
      <FilterBlock />
      <div className={styles.centerBlockContent}>
        <ContentTitle />
        <ContentPlaylistWithCustomLoading />
      </div>
    </div>
  );
}
