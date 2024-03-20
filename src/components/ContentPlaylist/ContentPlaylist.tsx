import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import React from "react";
import { PlayListItem } from "@components/PlayListItem";
import { trackType } from "@/types/types";

type ContentPlayListProps = {
  tracks: trackType[];
  setTrack: (param: trackType) => void;
};

const ContentPlaylist = ({
  tracks,
  setTrack,
}: ContentPlayListProps) => {
  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {tracks.map((e) => (
        <PlayListItem
          key={e.id}
          setTrack={() => setTrack(e)}
          name={e.name}
          author={e.author}
          album={e.album}
          time={e.duration_in_seconds}
        />
      ))
      }
    </div>
  );
};

export default ContentPlaylist;
