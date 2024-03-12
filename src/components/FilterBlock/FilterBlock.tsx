import styles from "./FilterBlock.module.css";
import classNames from "classnames";
import { useContext, useState } from "react";
import { TracksContext } from "@/contexts/tracks-context";
import { Track } from "@/interfaces/interfaces";

export default function FilterBlock() {

  const [isArtistOpened, setIsArtistOpened] = useState(false);
  const [isDateOpened, setIsDateOpened] = useState(false);
  const [isGenreOpened, setIsGenreOpened] = useState(false);
  const toggleArtist = () => {
    setIsDateOpened(false);
    setIsGenreOpened(false);
    setIsArtistOpened((prevState) => !prevState);
  }; const toggleDate = () => {
    setIsArtistOpened(false);
    setIsGenreOpened(false);
    setIsDateOpened((prevState) => !prevState);
  }; const toggleGenre = () => {
    setIsArtistOpened(false);
    setIsDateOpened(false);
    setIsGenreOpened((prevState) => !prevState);
  };

  const { tracks } = useContext(TracksContext);

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>
      <div
        onClick={toggleArtist}
        className={classNames(
          styles.filterButton,
          styles.buttonAuthor,
          styles.btnText
        )}
      >
        artist
      </div>
      {
        isArtistOpened && (
          <div className={styles.filterBy}>
            {tracks ? (
              <ul>
                {tracks.map((track: Track) => (
                  <p className={styles.filterByP} key={track.id}>
                    {track.author}
                  </p>
                ))}
              </ul>
            ) : (
              <p className={styles.playlistTitleCol}>No data...</p>
            )}
          </div>
        )}
      <div
        onClick={toggleDate}
        className={classNames(
          styles.filterButton,
          styles.buttonYear,
          styles.btnText
        )}
      >
        release date
      </div>
      {
        isDateOpened && (
          <div className={styles.filterBy}>
            {tracks ? (
              <ul>
                {tracks.map((track: Track) => (
                  <p className={styles.filterByP} key={track.id}>
                    {track.release_date}
                  </p>
                ))}
              </ul>
            ) : (
              <p className={styles.playlistTitleCol}>No data...</p>
            )}
          </div>
        )}
      <div
        onClick={toggleGenre}
        className={classNames(
          styles.filterButton,

          styles.buttonGenre,

          styles.btnText
        )}
      >
        genre
      </div>
      {
        isGenreOpened && (
          <div className={styles.filterBy}>
            {tracks ? (
              <ul>
                {tracks.map((track: Track) => (
                  <p className={styles.filterByP} key={track.id}>
                    {track.genre}
                  </p>
                ))}
              </ul>
            ) : (
              <p className={styles.playlistTitleCol}>No data...</p>
            )}
          </div>
        )}
    </div>
  );
}
