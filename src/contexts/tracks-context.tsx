// tracks-context.tsx
import React, { createContext, useState, useEffect } from "react";
import { getTracks } from "../api";
import { Track } from "@/interfaces/interfaces";

// Define the Track type
// export interface Track {
//   id: number;
//   name: string;
//   author: string;
//   release_date: string;
//   genre: string;
//   duration_in_seconds: number;
//   album: string;
//   logo: string | null;
// }

// Define the context type
interface TracksContextType {
  tracks: Track[] | null;
}

// Create the context
export const TracksContext = createContext<TracksContextType>({
  tracks: null,
});

// Create the context provider
export const TracksProvider: React.FC = ({ children }) => {
  const [tracks, setTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    getTracks()
      .then((data) => {
        setTracks(data);
      })
      .catch((error) => {
        console.error("Error fetching tracks:", error);
      });
  }, []);

  return (
    <TracksContext.Provider value={{ tracks }}>
      {children}
    </TracksContext.Provider>
  );
};



// import { createContext, useState } from "react";
// import { Track } from "@/interfaces/interfaces";
// // import { useNavigate } from "react-router-dom";
// // import { AppRoutes } from "../lib/appRoutes";

// export const TracksContext = createContext<{ tracks: Track[] | null }>({
//     tracks: null,
// });

// // export const TracksContext = createContext({
// //     tracks: null,
// //     setTracks: () => { },
// //     returnTrack: () => { },
// // });

// export const TracksProvider: React.FC = ({ children }) => {

//     const [tracks, setTracks] = useState(null);

//     // let navigate = useNavigate();

//     const returnTrack = (data) => {
//         setTracks(data.tracks);
//         // navigate(AppRoutes.HOME)
//     }

//     return (
//         <TracksContext.Provider value={{ tracks, setTracks, returnTrack }}>
//             {children}
//         </TracksContext.Provider>
//     );
// };