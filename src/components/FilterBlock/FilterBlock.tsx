import styles from "./FilterBlock.module.css";
import classNames from "classnames";
import { useState } from "react";
import FilterBlockItem from "../FilterBlockItem/FilterBlockItem";
import { artists, genres, years } from "./data";
import { useAppSelector } from "@/hooks";

const FilterBlock = () => {

  const playList = useAppSelector((state) => state.tracks.playList)

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterClick = (newFilter: string) => {
    setActiveFilter((prev) => newFilter === prev ? null : newFilter);
  }

  {/* PREVIOUS LOGICS EXAMPLE */ }
  // const [isArtistOpened, setIsArtistOpened] = useState(false);
  // const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);
  // const uniqueArtists = tracks
  //   ? Array.from(new Set(tracks.map((track: Track) => track.author)))
  //     .filter((author) => author && author !== "-")
  //     .sort((a, b) => (a && b ? a.localeCompare(b) : 0))
  //   : [];
  // const countUniqueArtists = () => {
  //   if (tracks) {
  //     setUniqueArtistsCount(uniqueArtists.length);
  //   }
  //   return 0;
  // };
  // const toggleArtist = () => {
  //   countUniqueArtists();
  //   setIsDateOpened(false);
  //   setIsGenreOpened(false);
  //   setIsArtistOpened((prevState) => !prevState);
  // };

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>

      <FilterBlockItem onClick={() => handleFilterClick("artists")} isOpened={activeFilter === "artists"} list={artists}>artist</FilterBlockItem>
      <FilterBlockItem onClick={() => handleFilterClick("years")} isOpened={activeFilter === "years"} list={years}>year</FilterBlockItem>
      <FilterBlockItem onClick={() => handleFilterClick("genres")} isOpened={activeFilter === "genres"} list={genres}>genre</FilterBlockItem>

    </div >
  );
}

export default FilterBlock;