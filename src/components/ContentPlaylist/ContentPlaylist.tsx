"use client"

import styles from "./ContentPlaylist.module.css";
import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { trackType } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCurrentTrack, setPlayList } from '@/store/features/tracksSlice';
import { getTracks } from '@/api';
import { PlayListItem } from '@components/PlayListItem';
import { sortTracksByReleaseDate } from "@/lib/sortTracksByReleaseDate";

const ContentPlaylist = () => {

  const dispatcher = useAppDispatch();
  const playList = useAppSelector((state) => state.tracks.playList);
  const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);
  const { track } = useAppSelector((state) => state.tracks);
  const isSearch = useAppSelector((state) => state.tracks.isSearch);

  const activeFilters = useAppSelector((state) => state.tracks.activeFilters);

  // check playlist number 1/2/3
  const playlistNumber = useAppSelector((state) => state.tracks.playlistNumber);
  // get the tracklist from API
  useEffect(() => {
    getTracks(playlistNumber).then((data) => {
      // check if the data is wrapped
      data.items ? dispatcher(setPlayList(data.items)) : dispatcher(setPlayList(data));
    });
  }, [dispatcher, playlistNumber]);
  // Redux tools: set the track playing
  const handleTrack = (trackR: trackType) => {
    dispatcher(setCurrentTrack(trackR));
  };
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

  // HOW IT WORKS
  // First, check if the searchbar contains any value. If true, apply other filters to the search result.
  // Second, check what artists and genres filters are applied.
  // Third, memorize the result of applied search and filters. Here is the third check of sortTracksByReleaseDate.
  // If true, apply sortTracksByReleaseDate to filteredTracks object. If false, simply return filteredTracks.

  // determine which tracklist to render, default or search
  const tracksToRender = isSearch ? searchPlayList : playList;

  // filter tracks by artists and genres
  const filterTracks = (tracks: trackType[]) => {
    return tracks.filter((track) => {
      const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);
      const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);
      return isAuthorsMatch && isGenresMatch;
    });
  };

  // useMemo to save the result of applied filters
  const filteredAndSortedPlaylist = useMemo(() => {
    const filteredTracks = filterTracks(tracksToRender);

    if (activeFilters.release_dates) {
      return sortTracksByReleaseDate(filteredTracks, activeFilters.release_dates);
    } else {
      return filteredTracks;
    }
  }, [tracksToRender, activeFilters]);

  return (
    <div className={classNames(styles.contentPlaylist, styles.playlist)}>
      {isSearch && tracksToRender.length === 0 ? (
        <p className={styles.playlistTitleCol}>No tracks found</p>
      ) : (
        filteredAndSortedPlaylist.map((trackR: trackType) => (
          <PlayListItem
            key={trackR.id}
            id={trackR.id}
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
