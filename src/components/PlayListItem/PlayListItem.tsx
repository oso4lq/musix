import React, { useState } from "react";
import styles from "./PlayListItem.module.css";
import classNames from "classnames";
import { formatTime } from "@/lib/formatTime";
import { useAppSelector } from "@/hooks";
import { addTrackToPlaylist, removeTrackFromPlaylist } from "@/api";

type PlayListItemProps = {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: number;
  setTrack: () => void;
  isSetTrack: boolean;
};

export default function PlayListItem({
  id,
  name,
  author,
  album,
  duration,
  setTrack,
  isSetTrack,
}: PlayListItemProps) {

  const trackDuration = formatTime(duration);

  const { isPlaying } = useAppSelector((state) => state.tracks);

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeTrack = async () => {
    // add disable playing the track when (dis)like
    setIsLiked((prevState) => !prevState);
    try {
      if (isLiked !== true) {
        console.log("like track");
        await addTrackToPlaylist(id);
      } else {
        console.log("dislike track");
        await removeTrackFromPlaylist(id);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div onClick={setTrack} className={classNames(styles.playlistItem, styles.playlistTrack, styles.track)}>

      <div className={classNames(styles.trackTitleImage, { [styles.trackTitleImageSelected]: isSetTrack }, { [styles.trackTitleImageAnimated]: isPlaying && isSetTrack })}>
        <svg className={styles.trackTitleSvg}>
          <use href="/img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>

      <div className={styles.trackTitle}>
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
          {trackDuration}
        </span>
      </div>

      <div onClick={() => handleLikeTrack()}>
        <svg className={styles.trackTimeSvg}>
          {isLiked ? (
            <use href="/img/icon/sprite.svg#icon-liked"></use>
          ) : (
            <use href="/img/icon/sprite.svg#icon-like"></use>
          )}
        </svg>
      </div>

    </div>
  );
}
