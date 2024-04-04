"use client"

import classNames from "classnames";
import styles from "./FilterBlock.module.css";
import React, { useMemo, useState } from 'react';
import FilterBlockItem from '../FilterBlockItem/FilterBlockItem';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { trackType, userType } from '@/types/types';
import { clearActiveFilters, setActiveFilter } from '@/store/features/tracksSlice'; // Renaming setActiveFilter from tracksSlice

const FilterBlock = () => {
  const playList = useAppSelector((state) => state.tracks.playList);
  const dispatch = useAppDispatch();

  // define active filters state
  const [localActiveFilter, setLocalActiveFilter] = useState<keyof trackType | null>(null);

  // apply filter when a value is selected
  const applyFilter = (filterType: keyof trackType | null, value: string | number | userType[] | null) => {
    discardFilters();
    setLocalActiveFilter(null); // close the pop-up window

    dispatch(setActiveFilter({ filterKey: filterType, filterValue: value }));
    
    //  a try to select tracks for their years
    //   if (filterType === 'release_date') {
    //     const year = value ? value.split("-")[0] : null;
    //     const filteredTracks = getTracksByYear(year);
    //     // Update the playlist with the filtered tracks
    //     // For example, dispatch an action to set the filtered tracks in the Redux store
    // } else {
    //     dispatch(setActiveFilter({ filterKey: filterType, filterValue: value }));
    // }
  };


  // discard filters
  const discardFilters = () => {
    dispatch(clearActiveFilters(null));
    setLocalActiveFilter(null);
  };

  // get unique values for each filter
  const getUniqueValues = (property: keyof trackType) => {
        return playList
          ? Array.from(new Set(playList.map((track: trackType) => track[property])))
            .filter((value) => typeof value === "string" && value !== "-")
            .map((value) => value as string)
            .sort((a, b) => a.localeCompare(b))
          : [];
  };
  
  // useMemo
  const memoizedGetUniqueValues = useMemo(() => {
    if (localActiveFilter) {
      return getUniqueValues(localActiveFilter);
    }
    return [];
  }, [localActiveFilter, playList]);

  // // getUniqueValues function adjusted to sort release_date params to unique years
  // const getUniqueYears = () => {
  //   return playList
  //     ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))
  //       .filter((date) => typeof date === "string" && date !== "-")
  //       .map((date) => date.split("-")[0])
  //       .filter((year, index, self) => self.indexOf(year) === index)
  //       .sort((a, b) => a.localeCompare(b))
  //     : [];
  // };
  // // display tracks with release_date starting by year YYYY
  // const getTracksByYear = (year: string) => {
  //   return playList ? playList.filter((track: trackType) => {
  //       const releaseYear = track.release_date.split("-")[0];
  //       return releaseYear === year || releaseYear > year;
  //   }) : [];
  // };
  // // get the lists of unique keys for the FilterBlockItems
  // const uniqueAuthors = getUniqueValues('author');
  // const uniqueYears = getUniqueValues('release_date');
  // // const uniqueYears = getUniqueYears();
  // const uniqueGenres = getUniqueValues('genre');

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'author' ? null : 'author')}
        isOpened={localActiveFilter === 'author'}
        filterKey={localActiveFilter}
        list={memoizedGetUniqueValues}
        // applyFilter={() => applyFilter()}
        applyFilter={(filterType, value) => applyFilter(filterType, value)}
        >
        Artist
      </FilterBlockItem>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'release_date' ? null : 'release_date')}
        isOpened={localActiveFilter === 'release_date'}
        filterKey={localActiveFilter}
        list={memoizedGetUniqueValues}
        applyFilter={(filterType, value) => applyFilter(filterType, value)}
      >
        Year
      </FilterBlockItem>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'genre' ? null : 'genre')}
        isOpened={localActiveFilter === 'genre'}
        filterKey={localActiveFilter}
        list={memoizedGetUniqueValues}
        applyFilter={(filterType, value) => applyFilter(filterType, value)}
        >
        Genre
      </FilterBlockItem>
      
      <button onClick={discardFilters}>
        Discard filters
      </button>

    </div>
  );
};

export default FilterBlock;

// "use client"

// import classNames from "classnames";
// import styles from "./FilterBlock.module.css";
// import { useMemo, useState } from "react";
// import FilterBlockItem from "../FilterBlockItem/FilterBlockItem";
// import { useAppSelector } from "@/hooks";
// import { trackType } from "@/types/types";

// const FilterBlock = () => {
//   // import playlist from API
//   const playList = useAppSelector((state) => state.tracks.playList);
  
//   // set filter
//   const [activeFilter, setActiveFilter] = useState<keyof trackType | null>(null);
//   // apply filter
//   const handleFilterClick = (newFilter: keyof trackType) => {
//     setActiveFilter((prev) => (newFilter === prev ? null : newFilter));
//   };
  
//   // returns unique values depenging on the key
//   const getUniqueValues = (property: keyof trackType) => {
//     return playList
//       ? Array.from(new Set(playList.map((track: trackType) => track[property])))
//         .filter((value) => typeof value === "string" && value !== "-")
//         .map((value) => value as string)
//         .sort((a, b) => a.localeCompare(b))
//       : [];
//   };
//   // getUniqueValues function adjusted to sort release_date params to unique years
//   const getUniqueYears = () => {
//     return playList
//       ? Array.from(new Set(playList.map((track: trackType) => track.release_date)))
//         .filter((date) => typeof date === "string" && date !== "-")
//         .map((date) => date.split("-")[0])
//         .filter((year, index, self) => self.indexOf(year) === index)
//         .sort((a, b) => a.localeCompare(b))
//       : [];
//   };
//   // useMemo
//   const memoizedGetUniqueValues = useMemo(() => {
//     if (activeFilter) {
//       return getUniqueValues(activeFilter);
//     }
//     return [];
//   }, [activeFilter, playList]);
//   const memoizedGetUniqueYears = useMemo(() => {
//     if (activeFilter) {
//       return getUniqueYears();
//     }
//     return [];
//   }, [activeFilter, playList]);

//   return (
//     <div className={classNames(styles.centerBlockFilter, styles.filter)}>
//       <div className={styles.filterTitle}>Search for:</div>

//       <FilterBlockItem
//         onClick={() => handleFilterClick("author")}
//         isOpened={activeFilter === "author"}
//         list={memoizedGetUniqueValues}
//       >
//         artist
//       </FilterBlockItem>
//       <FilterBlockItem
//         onClick={() => handleFilterClick("release_date")}
//         isOpened={activeFilter === "release_date"}
//         list={memoizedGetUniqueYears}
//       >
//         year
//       </FilterBlockItem>
//       <FilterBlockItem
//         onClick={() => handleFilterClick("genre")}
//         isOpened={activeFilter === "genre"}
//         list={memoizedGetUniqueValues}
//       >
//         genre
//       </FilterBlockItem>

//     </div>
//   );
// };

// export default FilterBlock;
