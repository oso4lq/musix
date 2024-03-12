import styles from "./FilterBlock.module.css";
import classNames from "classnames";
import { useContext, useState } from "react";
import { TracksContext } from "@/contexts/tracks-context";
import { Track } from "@/interfaces/interfaces";

const FilterBlock: React.FC = () => {

  const { tracks } = useContext(TracksContext);

  const [buttonHovered, setButtonHovered] = useState(false);

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
      // const uniqueArtists = Array.from(new Set(tracks.map((track: Track) => track.author)));
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
  const uniqueDates = tracks
    ? Array.from(new Set(tracks.map((track: Track) => track.release_date)))
      .filter((release_date) => release_date !== "-")
      .sort((a, b) => (a && b ? a.localeCompare(b) : 0))
    : [];
  const toggleDate = () => {
    setIsArtistOpened(false);
    setIsGenreOpened(false);
    setIsDateOpened((prevState) => !prevState);
  };
  {/* GENRE */ }
  const [isGenreOpened, setIsGenreOpened] = useState(false);
  const uniqueGenres = tracks
    ? Array.from(new Set(tracks.map((track: Track) => track.genre)))
      .filter((genre) => genre !== "-")
      .sort((a, b) => (a && b ? a.localeCompare(b) : 0))
    : [];
  const toggleGenre = () => {
    setIsArtistOpened(false);
    setIsDateOpened(false);
    setIsGenreOpened((prevState) => !prevState);
  };

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>

      {/* ARTIST */}
      {/* {uniqueArtistsCount > 0 && isArtistOpened && (
        <div className={styles.artistCountPopUp}>{uniqueArtistsCount}</div>
      )}
      <div
        onClick={toggleArtist}
        className={classNames(styles.filterButton, styles.buttonAuthor, styles.btnText, {
          [styles.active]: isArtistOpened,
        })}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        style={{ borderColor: buttonHovered ? "#AD61FF" : "#fff", color: buttonHovered ? "#AD61FF" : "#fff" }}
      >
        artist
      </div>
      {isArtistOpened && (
        <div className={styles.filterBy}>
          {tracks && tracks.length > 0 ? (
            <ul className={styles.artistList}>
              {Array.from(new Set(tracks.map((track: Track) => track.author)))
                .filter((author) => author && author !== "-")
                .sort((a, b) => (a && b ? a.localeCompare(b) : 0))
                .map((artist, index) => (
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
      {uniqueArtistsCount > 0 && isArtistOpened && (
        <div className={styles.artistCountPopUp}>
          {uniqueArtistsCount}
        </div>
      )}
      <div
        onClick={toggleArtist}
        className={classNames(styles.filterButton, styles.buttonAuthor, styles.btnText, {
          [styles.active]: isArtistOpened,
        })}
        // className={`
        // ${isArtistOpened ? styles.active : ""} 
        // ${classNames(
        //   styles.filterButton,
        //   styles.buttonAuthor,
        //   styles.btnText,
        // )}
        // `}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        style={{ borderColor: buttonHovered ? "#AD61FF" : "#fff", color: buttonHovered ? "#AD61FF" : "#fff" }}
      >
        artist
      </div>
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

      {/* DATE */}
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