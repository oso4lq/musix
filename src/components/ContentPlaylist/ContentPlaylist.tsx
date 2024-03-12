import React from "react";
import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import { PlayListItem } from "@components/PlayListItem";
import { useTracks } from "@/hooks/useTracks";
import { Track } from "@/interfaces/interfaces";

export default function ContentPlaylist() {

  const { tracks } = useTracks();

  if (!Array.isArray(tracks)) {
    return (
      <p>Loading tracks...</p>
    )
  }

  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>

      {tracks.map((track: Track) => (
        <PlayListItem
          key={track.id}
          id={track.id}
          album={track.album}
          author={track.author}
          duration={track.duration_in_seconds}
          genre={track.genre}
          logo={track.logo}
          name={track.name}
          date={track.release_date}
        />
      ))}

    </div>
  );
}
