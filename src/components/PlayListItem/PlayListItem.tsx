import React from "react";
import styles from "./PlayListItem.module.css";
import classNames from "classnames";

type PlayListItemProps = {
  name: string;
  author: string;
  album: string;
  // time: number;
  duration: number;
  setTrack: () => void;
};

export default function PlayListItem({
  name,
  author,
  album,
  // time,
  duration,
  setTrack,
}: PlayListItemProps) {

  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60).toString().padStart(2, "0");

  return (
    <div onClick={setTrack} className={classNames(styles.playlistItem, styles.playlistTrack, styles.track)}>
      <div className={styles.trackTitle}>
        <div className={styles.trackTitleImage}>
          <svg className={styles.trackTitleSvg}>
            <use href="/img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className={styles.trackTitle}>
          <span className={classNames(styles.trackText, styles.trackTextLeft)}>{name}</span>
        </div>
      </div>
      <div className={styles.trackAuthor}>
        <span className={classNames(styles.trackText, styles.trackTextSecondary)}>{author}</span>
      </div>
      <div className={styles.trackAlbum}>
        <span className={classNames(styles.trackText, styles.trackTextSecondary)}>{album}</span>
      </div>
      <div className={styles.trackTime}>
        <span className={classNames(styles.trackText, styles.trackTextSecondary, styles.trackTextRight)}>
          {`${minutes}:${seconds}`}
        </span>
      </div>
      <div>
        <svg className={styles.trackTimeSvg}>
          <use href="/img/icon/sprite.svg#icon-like"></use>
        </svg>
      </div>
    </div>
  );
}
