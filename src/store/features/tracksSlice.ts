import { trackType } from "@/types/types"
import { createSlice } from "@reduxjs/toolkit"

type TracksStateType = {
    track: null | trackType,
    playList: trackType[]
    isPlaying: boolean,
    isShuffle: boolean,
    shufflePlayList: trackType[]
}

const initialState: TracksStateType = {
    track: null,
    playList: [],
    isPlaying: false,
    isShuffle: false,
    shufflePlayList: []
}

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
        setNextTrack: (state) => {
            const playList = state.isShuffle ? state.shufflePlayList : state.playList;
            const index = playList.findIndex((track) => track.id === state.track?.id)
            const nextIndex = index + 1
            if (playList[nextIndex]) {
                state.track = playList[nextIndex]
            }
        },
        setPrevTrack: (state) => {
            const playList = state.isShuffle ? state.shufflePlayList : state.playList;
            const index = playList.findIndex((track) => track.id === state.track?.id)
            const prevIndex = index - 1
            if (playList[prevIndex]) {
                state.track = playList[prevIndex]
            }
        },
        // features
        setShuffle: (state, action) => {
            state.isShuffle = action.payload
            if (action.payload) {
                const playList = [...state.playList]
                playList.sort(() => Math.random() - 0.5);
                state.shufflePlayList = playList
            }
        },
    }
})

export const { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle } = tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;