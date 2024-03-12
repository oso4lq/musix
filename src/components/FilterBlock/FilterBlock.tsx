import { useState } from "react";
import styles from "./FilterBlock.module.css";
import classNames from "classnames";

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
            <span>Michael Jackson</span>
            <span>Frank Sinatra</span>
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
            <span>1990</span>
            <span>1970</span>
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
            <span>pop</span>
            <span>jazz</span>
          </div>
        )}
    </div>
  );
}
