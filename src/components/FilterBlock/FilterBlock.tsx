import styles from "./FilterBlock.module.css";
import classNames from "classnames";
import { useContext, useState } from "react";
import { TracksContext } from "@/contexts/tracks-context";
import { Track } from "@/interfaces/interfaces";

const FilterBlock: React.FC = () => {

  const { tracks } = useContext(TracksContext);

  {/* ARTIST */ }
  const [isArtistOpened, setIsArtistOpened] = useState(false);
  const [uniqueArtistsCount, setUniqueArtistsCount] = useState(0);
  const uniqueArtists = tracks
    ? Array.from(new Set(tracks.map((track: Track) => track.author)))
      .filter((author) => author && author !== "-")
      .sort((a, b) => (a && b ? a.localeCompare(b) : 0))
    : [];
  const countUniqueArtists = () => {
    if (tracks) {
      setUniqueArtistsCount(uniqueArtists.length);
    }
    return 0;
  };
  const toggleArtist = () => {
    countUniqueArtists();
    setIsDateOpened(false);
    setIsGenreOpened(false);
    setIsArtistOpened((prevState) => !prevState);
  };

  {/* DATE */ }
  const [isDateOpened, setIsDateOpened] = useState(false);
  const [uniqueDatesCount, setUniqueDatesCount] = useState(0);
  const uniqueDates = tracks
    ? Array.from(new Set(tracks.map((track: Track) => track.release_date)))
      .filter((release_date) => release_date !== "-")
      .sort((a, b) => (a && b ? a.localeCompare(b) : 0))
    : [];
  const countUniqueDates = () => {
    if (tracks) {
      setUniqueDatesCount(uniqueDates.length);
    }
    return 0;
  };
  const toggleDate = () => {
    countUniqueDates();
    setIsArtistOpened(false);
    setIsGenreOpened(false);
    setIsDateOpened((prevState) => !prevState);
  };

  {/* GENRE */ }
  const [isGenreOpened, setIsGenreOpened] = useState(false);
  const [uniqueGenresCount, setUniqueGenresCount] = useState(0);
  const uniqueGenres = tracks
    ? Array.from(new Set(tracks.map((track: Track) => track.genre)))
      .filter((genre) => genre !== "-")
      .sort((a, b) => (a && b ? a.localeCompare(b) : 0))
    : [];
  const countUniqueGenres = () => {
    if (tracks) {
      setUniqueGenresCount(uniqueGenres.length);
    }
    return 0;
  };
  const toggleGenre = () => {
    countUniqueGenres();
    setIsArtistOpened(false);
    setIsDateOpened(false);
    setIsGenreOpened((prevState) => !prevState);
  };

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>

      {/* ARTIST */}
      {uniqueArtistsCount > 0 && isArtistOpened && (
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
      }

      {/* YEAR */}
      {uniqueDatesCount > 0 && isDateOpened && (
        <div className={classNames(styles.CountPopUp, styles.year)}>
          {uniqueDatesCount}
        </div>
      )}
      <button
        type="button"
        className={classNames(styles.filterButton, styles.buttonYear, styles.btnText,
          {
            [styles.active]: isDateOpened,
          })}
        onClick={() => toggleDate()}
      >
        release date
      </button>
      {
        isDateOpened && (
          <div className={styles.filterBy}>
            {tracks ? (
              <ul>
                {uniqueDates.map((release_date, index) => (
                  <li key={index} className={styles.filterByP}>
                    {release_date}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.playlistTitleCol}>No data...</p>
            )}
          </div>
        )
      }

      {/* GENRE */}
      {uniqueGenresCount > 0 && isGenreOpened && (
        <div className={classNames(styles.CountPopUp, styles.genre)}>
          {uniqueGenresCount}
        </div>
      )}
      <button
        type="button"
        className={classNames(styles.filterButton, styles.buttonYear, styles.btnText,
          {
            [styles.active]: isGenreOpened,
          })}
        onClick={() => toggleGenre()}
      >
        genre
      </button>
      {
        isGenreOpened && (
          <div className={styles.filterBy}>
            {tracks ? (
              <ul>
                {uniqueGenres.map((genre, index) => (
                  <li key={index} className={styles.filterByP}>
                    {genre}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.playlistTitleCol}>No data...</p>
            )}
          </div>
        )
      }
    </div >
  );
}

export default FilterBlock;