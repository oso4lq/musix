import { trackType } from "@/types/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

type TracksStateType = {
    track: null | trackType,
    playList: trackType[]
    isPlaying: boolean,
    isShuffle: boolean,
    shufflePlayList: trackType[],
    searchPlaylist: trackType[],
    isSearch: boolean,
    activeFilters: Record<keyof trackType, string | null> & void
};

const initialState: TracksStateType = {
    track: null,
    playList: [],
    isPlaying: false,
    isShuffle: false,
    shufflePlayList: [],
    searchPlaylist: [],
    isSearch: false,
    activeFilters: {
        author: null,
        release_date: null,
        genre: null,
    }
};

const switchTrack = (direction: number) => {
    return (state: TracksStateType) => {
        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;
        let newIndex = currentTracks.findIndex(item => item.id === state.track?.id) + direction;

        newIndex = (newIndex + currentTracks.length) % currentTracks.length;

        state.track = currentTracks[newIndex];
        state.isPlaying = true;
    }
};

const tracksSlice = createSlice({
    name: 'tracks',

    initialState,

    reducers: {
        setCurrentTrack: (state, action) => {
            state.track = action.payload;
            state.isPlaying = true;
        },
        setPlayList: (state, action) => {
            state.playList = action.payload;
        },
        // Controls
        setPlay: (state) => {
            state.isPlaying = true
        },
        setPause: (state) => {
            state.isPlaying = false
        },
        setNextTrack: switchTrack(1),
        setPrevTrack: switchTrack(-1),
        // features
        setShuffle: (state, action) => {
            state.isShuffle = action.payload
            if (action.payload) {
                const playList = [...state.playList]
                playList.sort(() => Math.random() - 0.5);
                state.shufflePlayList = playList
            }
        },
        setSearchPlayList: (state, action) => {
            state.searchPlaylist = action.payload;
        },
        setIsSearchTrue: (state) => {
            console.log('true');
            state.isSearch = true;
        },
        setIsSearchFalse: (state) => {
            console.log('false');
            state.isSearch = false;
        },
        setActiveFilter: (state, action: PayloadAction<{ filterKey: keyof trackType; filterValue: string | null }>) => {
            const { filterKey, filterValue } = action.payload;
            console.log('filterKey ' + filterKey);
            console.log('filterValue ' + filterValue);
            state.activeFilters[filterKey] = filterValue;
        },
        clearActiveFilters: (state) => {
            state.activeFilters = {
                author: null,
                release_date: null,
                genre: null,
            };
        },
    }
})

export const { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle, setSearchPlayList, setIsSearchTrue, setIsSearchFalse, setActiveFilter, clearActiveFilters } = tracksSlice.actions;
export const selectActiveFilters = (state: RootState) => state.tracks.activeFilters;
export const tracksReducer = tracksSlice.reducer;
