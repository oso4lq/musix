import React from "react";
import styles from "./PlayListItem.module.css";
import classNames from "classnames";

interface PlayListItemProps {
  id: number | undefined;
  album: string | undefined;
  author: string | undefined;
  duration: number | undefined;
  genre: string | undefined;
  logo: string | undefined;
  name: string | undefined;
  date: string | undefined;
}

const PlayListItem: React.FC<PlayListItemProps> = ({
  id,
  album,
  author,
  duration,
  genre,
  logo,
  name,
  date,
}) => {

  return (
    <div className={styles.playlistItem}>
      <div className={classNames(styles.playlistTrack, styles.track)}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use href="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles.trackTitleText}>
            <a className={styles.trackTitleLink} href="http://">
              {name} <span className={styles.trackTitleSpan}></span>
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            {author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="http://">
            {album}
          </a>
        </div>
        <div className={styles.trackTime}>
          <span className={styles.trackTimeText}>{duration}</span>
          <svg className={styles.trackTimeSvg}>
            <use href="/img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PlayListItem;