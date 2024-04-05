"use client"

import classNames from "classnames";
import styles from "./FilterBlock.module.css";
import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { trackType } from '@/types/types';
import { clearActiveFilters, setActiveFilter } from '@/store/features/tracksSlice';
import { getUniqueValues } from "@/lib/getUniqueValues";
import { FilterBlockItem } from '@components/FilterBlockItem';

const FilterBlock = () => {
  const dispatcher = useAppDispatch();
  const playList = useAppSelector((state) => state.tracks.playList);
  const selectedAuthors = useAppSelector((state) => state.tracks.activeFilters.authors);
  const selectedGenres = useAppSelector((state) => state.tracks.activeFilters.genres);
  const [localActiveFilter, setLocalActiveFilter] = useState<keyof trackType | null>(null);
  const sortByYearValues = ["Default", "New first", "Old first"];

  // year filter
  const toggleReleaseYearFilter = (option: string) => {
    dispatcher(setActiveFilter({
      release_dates: option
    }));
  };
  // artist filter
  const toggleSelectedAuthors = (author: string) => {
    dispatcher(setActiveFilter({
      authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item) => item !== author) : [...selectedAuthors, author],
    }))
  };
  // genre filter
  const toggleSelectedGenres = (genre: string) => {
    dispatcher(setActiveFilter({
      genres: selectedGenres.includes(genre) ? selectedGenres.filter((item) => item !== genre) : [...selectedGenres, genre],
    }))
  };
  // discard filters
  const discardFilters = () => {
    dispatcher(clearActiveFilters())
  }

  // useMemo, getUniqueValues - get unique keys to filter lists
  const memoizedGetUniqueValues = useMemo(() => {
    if (localActiveFilter) {
      return getUniqueValues(playList, localActiveFilter);
    }
    return [];
  }, [localActiveFilter, playList]);

  return (
    <div className={classNames(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Search for:</div>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'author' ? null : 'author')}
        isOpened={localActiveFilter === 'author'}
        list={memoizedGetUniqueValues}
        toggleSelectedOption={toggleSelectedAuthors}
      >
        Artist
      </FilterBlockItem>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'release_date' ? null : 'release_date')}
        isOpened={localActiveFilter === 'release_date'}
        list={sortByYearValues}
        toggleSelectedOption={toggleReleaseYearFilter}
      >
        Year
      </FilterBlockItem>

      <FilterBlockItem
        onClick={() => setLocalActiveFilter(localActiveFilter === 'genre' ? null : 'genre')}
        isOpened={localActiveFilter === 'genre'}
        list={memoizedGetUniqueValues}
        toggleSelectedOption={toggleSelectedGenres}
      >
        Genre
      </FilterBlockItem>

      <button
        className={styles.discardButton}
        onClick={() => discardFilters()}>
        x
      </button>

    </div>
  );
};

export default FilterBlock;
