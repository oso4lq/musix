"use client"

import classNames from "classnames";
import styles from "./FilterBlock.module.css";
import { useState } from "react";
import FilterBlockItem from "../FilterBlockItem/FilterBlockItem";
import { useAppSelector } from "@/hooks";
import { trackType } from "@/types/types";

const FilterBlock = () => {

  // opens filter
  const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);
  const handleFilterClick = (newFilter: keyof trackType) => {
    setActiveFilter((prev) => (newFilter === prev ? null : newFilter));
  };
  const playList = useAppSelector((state) => state.tracks.playList);
  // returns unique values depenging on the key
  const getUniqueValues = (property: keyof trackType) => {
    return playList
      ? Array.from(new Set(playList.map((track: trackType) => track[property])))
        .filter((value) => typeof value === "string" && value !== "-")
        .map((value) => value as string)
        .sort((a, b) => a.localeCompare(b))
      : [];
  };
  // getUniqueValues function adjusted to sort release_date params to unique years 
  const getUniqueYears = () => {
    return playList
      ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))
        .filter((date) => typeof date === "string" && date !== "-")
        .map((date) => date.split("-")[0])
        .filter((year, index, self) => self.indexOf(year) === index)
        .sort((a, b) => a.localeCompare(b))
      : [];
  };

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>

      <FilterBlockItem
        onClick={() => handleFilterClick("author")}
        isOpened={activeFilter === "author"}
        list={getUniqueValues("author")}
      >
        artist
      </FilterBlockItem>
      <FilterBlockItem
        onClick={() => handleFilterClick("release_date")}
        isOpened={activeFilter === "release_date"}
        // list={getUniqueValues("release_date")}
        list={getUniqueYears()}
      >
        year
      </FilterBlockItem>
      <FilterBlockItem
        onClick={() => handleFilterClick("genre")}
        isOpened={activeFilter === "genre"}
        list={getUniqueValues("genre")}
      >
        genre
      </FilterBlockItem>
    </div>
  );
};

export default FilterBlock;
