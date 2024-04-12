// sort tracks by release date

import { trackType } from "@/types/types";

export const sortTracksByReleaseDate = (tracks: trackType[], order: string) => {
    return tracks.sort((a, b) => {

        const dateA = new Date(a.release_date).getTime();
        const dateB = new Date(b.release_date).getTime();

        switch (order) {
            case 'New first':
                return dateB - dateA;
            case 'Old first':
                return dateA - dateB;
            default:
                return 0;
        }
    });
};
