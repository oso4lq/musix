import styles from "./FilterBlock.module.css";
import classNames from "classnames";
import { useContext, useState } from "react";
// import { TracksContext } from "@/contexts/tracks-context";
import FilterBlockItem from "../FilterBlockItem/FilterBlockItem";
import { artists, genres, years } from "./data";

const FilterBlock: React.FC = () => {

  // const { tracks } = useContext(TracksContext);

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

      {/* PREVIOUS RENDER EXAMPLE */}
      {/* {uniqueArtistsCount > 0 && isArtistOpened && (
        <div className={classNames(styles.CountPopUp, styles.artist)}>
          {uniqueArtistsCount}
        </div>
      )}
      <button
        type="button"
        className={classNames(styles.filterButton, styles.buttonAuthor, styles.btnText,
          {
            [styles.active]: isArtistOpened,
          })}
        onClick={() => toggleArtist()}
      >
        artist
      </button>
      {
        isArtistOpened && (
          <div className={styles.filterBy}>
            {uniqueArtists.length > 0 ? (
              <ul className={styles.artistList}>
                {uniqueArtists.map((artist, index) => (
                  <li key={index} className={styles.filterByP}>
                    {artist}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.playlistTitleCol}>No data...</p>
            )}
          </div>
        )
      } */}

    </div >
  );
}

export default FilterBlock;