import React, { useState } from "react";
import styles from "./PlayListItem.module.css";
import classNames from "classnames";
import { formatTime } from "@/lib/formatTime";
import { useAppSelector } from "@/hooks";
import { addTrackToPlaylist, removeTrackFromPlaylist } from "@/api";
import { userType } from "@/types/types";

type PlayListItemProps = {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: number;
  setTrack: () => void;
  isSetTrack: boolean;
  stared_user: Array<userType> | null;
};

export default function PlayListItem({
  id,
  name,
  author,
  album,
  duration,
  setTrack,
  isSetTrack,
  stared_user,
}: PlayListItemProps) {

  const trackDuration = formatTime(duration);

  const { isPlaying } = useAppSelector((state) => state.tracks);

  // check if the track is liked
  const [isLiked, setIsLiked] = useState(
    stared_user?.some(user => JSON.stringify(user) === localStorage.getItem('userData'))
  );

  const handleLikeTrack = async () => {
    // add disable playing the track when (dis)like
    setIsLiked((prevState) => !prevState);
    try {
      if (isLiked !== true) {
        await addTrackToPlaylist(id);
      } else {
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
