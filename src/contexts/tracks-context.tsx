import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../lib/appRoutes";

export const TracksContext = createContext({
    tracks: null,
    setTracks: () => { },
    returnTrack: () => { },
});

export const TracksProvider = ({ children }) => {

    const [tracks, setTracks] = useState(null);

    // let navigate = useNavigate();

    const returnTrack = (data) => {
        setTracks(data.tracks);
        // navigate(AppRoutes.HOME)
    }

    return (
        <TracksContext.Provider value={{ tracks, setTracks, returnTrack }}>
            {children}
        </TracksContext.Provider>
    );
};