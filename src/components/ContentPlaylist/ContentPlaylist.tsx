import React, { useContext } from "react";
import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import { TracksContext } from "@/contexts/tracks-context";
import { Track } from "@/interfaces/interfaces";
import { PlayListItem } from "@components/PlayListItem";

const ContentPlaylist: React.FC = () => {

  const { tracks } = useContext(TracksContext);
  // console.log(tracks);
  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {tracks ? (
        <ul>
          {tracks.map((track: Track) => (

            <PlayListItem
              key={track.id}
              id={track.id}
              album={track.album}
              duration={track.duration_in_seconds}
              genre={track.genre}
              logo={track.logo}
              name={track.name}
              author={track.author}
              date={track.release_date}
            />

          ))}
        </ul>
      ) : (
        <p className={styles.playlistTitleCol}>Loading tracks...</p>
      )}
    </div>
  );
};

export default ContentPlaylist;
