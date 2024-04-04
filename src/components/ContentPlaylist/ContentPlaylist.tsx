"use client"

import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from 'react';
import { trackType } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCurrentTrack, setPlayList } from '@/store/features/tracksSlice';
import { getTracks } from '@/api';
import { PlayListItem } from '@components/PlayListItem';

const ContentPlaylist = () => {

  const dispatcher = useAppDispatch();
  const playList = useAppSelector((state) => state.tracks.playList);
  const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);
  const { track } = useAppSelector((state) => state.tracks);
  const isSearch = useAppSelector((state) => state.tracks.isSearch);

  const activeFilters = useAppSelector((state) => state.tracks.activeFilters);

  // get the tracklist from API
  useEffect(() => {
    getTracks().then((data) => {
      dispatcher(setPlayList(data));
    });
  }, [dispatcher]);
  // Redux tools: set the track playing
  const handleTrack = (trackR: trackType) => {
    dispatcher(setCurrentTrack(trackR));
  };

  // determine which tracklist to render, default or search
  const tracksToRender = isSearch ? searchPlayList : playList;

  // add a duration from audio props to each track
  const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  useEffect(() => {
    const durations: { [key: string]: number } = {};
    playList?.forEach((track: trackType) => {
      const audio = new Audio(track.track_file);
      audio.addEventListener('loadedmetadata', () => {
        durations[track.id] = audio.duration;
        setTrackDurations({ ...durations });
      });
      audioRefs.current[track.id] = audio;
    });
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.removeAttribute('src');
        audio.load();
      });
    };
  }, [playList]);

  // filter tracks based on active filters
  const filterTracks = (tracks: trackType[]) => {
    return tracks.filter((track) => {
      return (
        (activeFilters.author === null || track.author === activeFilters.author) &&
        (activeFilters.release_date === null || track.release_date === activeFilters.release_date) &&
        (activeFilters.genre === null || track.genre === activeFilters.genre)
      );
    });
  };
  const filteredPlayList = filterTracks(tracksToRender);

  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {isSearch && filteredPlayList.length === 0 ? (
        <p className={styles.playlistTitleCol}>No tracks found</p>
      ) : (
        filteredPlayList.map((trackR: trackType) => (
          <PlayListItem
            key={trackR.id}
            name={trackR.name}
            author={trackR.author}
            album={trackR.album}
            duration={trackDurations[trackR.id]}
            setTrack={() => handleTrack(trackR)}
            isSetTrack={trackR.id === track?.id}
          />
        ))
      )}
    </div>
  );
};

export default ContentPlaylist;


// "use client"

// import styles from "./ContentPlaylist.module.css";
// import classNames from "classnames";
// import React, { useEffect, useRef, useState } from "react";
// import { trackType } from "@/types/types";
// import { useAppDispatch, useAppSelector } from "@/hooks";
// import { setCurrentTrack, setPlayList } from "@/store/features/tracksSlice";
// import { getTracks } from "@/api";
// import { PlayListItem } from "@components/PlayListItem";

// const ContentPlaylist = () => {

//   const dispatcher = useAppDispatch();
//   const playList = useAppSelector((state) => state.tracks.playList);
//   const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);
//   const { track } = useAppSelector((state) => state.tracks);
//   const isSearch = useAppSelector((state) => state.tracks.isSearch);
  
//   // active filters!!!
//   // const activeFilters = useAppSelector((state) => state.filters.activeFilters);
  
//   // get the tracklist from API
//   useEffect(() => {
//     getTracks().then((data) => {
//       dispatcher(setPlayList(data));
//     });
//   }, [dispatcher]);

//   // Redux tools: set the track playing
//   const handleTrack = (trackR: trackType) => {
//     dispatcher(setCurrentTrack(trackR));
//   };

//   // determine which tracklist to render, default or search
//   const tracksToRender = isSearch ? searchPlayList : playList;

//   // add a duration from audio props to each track
//   const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});
//   const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
//   useEffect(() => {
//     const durations: { [key: string]: number } = {};
//     playList?.forEach((track: trackType) => {
//       const audio = new Audio(track.track_file);
//       audio.addEventListener('loadedmetadata', () => {
//         durations[track.id] = audio.duration;
//         setTrackDurations({ ...durations });
//       });
//       audioRefs.current[track.id] = audio;
//     });
//     return () => {
//       Object.values(audioRefs.current).forEach((audio) => {
//         audio.pause();
//         audio.removeAttribute('src');
//         audio.load();
//       });
//     };
//   }, [playList]);

//   return (
//     <div className={classNames(styles.contentPlaylist, styles.playlist)}>
//       {isSearch && searchPlayList.length === 0 ? (
//         <p className={styles.playlistTitleCol}>No tracks found</p>
//       ) : (
//         tracksToRender.map((trackR: trackType) => (
//           <PlayListItem
//             key={trackR.id}
//             name={trackR.name}
//             author={trackR.author}
//             album={trackR.album}
//             duration={trackDurations[trackR.id]}
//             setTrack={() => handleTrack(trackR)}
//             isSetTrack={trackR.id === track?.id}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// export default ContentPlaylist;
