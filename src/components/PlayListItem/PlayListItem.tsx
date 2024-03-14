import React from "react";
import styles from "./PlayListItem.module.css";
import classNames from "classnames";

export default function PlayListItem({ e }: { e: trackType }) {

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
              {e.name} <span className={styles.trackTitleSpan}></span>
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="http://">
            {e.author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="http://">
            {e.album}
          </a>
        </div>
        <div className={styles.trackTime}>
          <span className={styles.trackTimeText}>{e.duration_in_seconds}</span>
          <svg className={styles.trackTimeSvg}>
            <use href="/img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
