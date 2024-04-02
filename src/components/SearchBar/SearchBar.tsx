import classNames from 'classnames';
import styles from "./SearchBar.module.css";
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { useAppSelector } from '@/hooks';
import { trackType } from '@/types/types';

const SearchBar = () => {
    const trackList = useAppSelector((state) => state.tracks.playList);
    const [fuse, setFuse] = useState<Fuse<trackType> | null>(null);
    const [searchResults, setSearchResults] = useState<trackType[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // initialize Fuse when trackList changes
    useEffect(() => {
        if (trackList.length > 0) {
            const options = {
                keys: ['name'],
                includeScore: true,
                threshold: 0.3,
            };
            const fuseInstance = new Fuse(trackList, options);
            setFuse(fuseInstance);
        }
    }, [trackList]);
    // start search
    const handleSearch = (query: string) => {
        if (!fuse) return [];
        const result = fuse.search(query);
        setSearchResults(result.map((item) => item.item));
        setShowSuggestions(true);
    };
    // exit the searchbar on clicking out
    const handleBlur = () => {
        setShowSuggestions(false);
    };

    return (
        <div>
            <div className={classNames(styles.centerBlockSearch, styles.search)}>
                <svg className={styles.searchSvg}>
                    <use href="/img/icon/sprite.svg#icon-search"></use>
                </svg>
                <input
                    className={styles.searchText}
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleSearch(e.target.value)}
                    onBlur={handleBlur}
                />
                {showSuggestions && (
                    <div className={styles.searchBy}>
                        {searchResults.length > 0 ? (
                            <ul>
                                {searchResults.map((track) => (
                                    <li
                                        key={track.id}
                                        className={styles.searchByP}
                                    >
                                        {track.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.searchByP}>No tracks found</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
