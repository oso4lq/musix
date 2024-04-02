// format duration in seconds to mins:secs

export const formatTime = (time: number | null) => {
    if (time !== null) {
        const minutes = Math.floor(time / 60).toString().padStart(2, "0");
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }
};