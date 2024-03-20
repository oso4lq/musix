import classNames from "classnames";
import styles from "./Bar.module.css";
import React, { useState, useEffect, useRef } from 'react';
import { BarVolume } from "@/components/BarVolume";

export default function Bar({ playlist }) {
    // get the track
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const duration = audioRef.current?.duration || 0;

    // handling play/pause
    const togglePlay = () => {
        const audio = audioRef.current;
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.pause();
            } else {
                audioRef.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // define the track index
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    // check if the track index is the last
    const handleEnded = () => {
        if (currentTrackIndex < playlist.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        } else {
            setCurrentTrackIndex(0);
        }
    };

    // set audio source and checking "if ended"
    useEffect(() => {
        const audio = audioRef.current;
        audio.src = playlist[currentTrackIndex].url;
        audio.addEventListener('ended', handleEnded);
        // play
        audio.play();
        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentTrackIndex, playlist]);

    // set volume
    const [volume, setVolume] = useState(0.5);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);


    return (
        <div className={styles.bar}>
            <div className={styles.barContent}>

                {/* LOADED TRACK */}
                <audio src={currentTrack}
                    ref={audioRef}
                    onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                />

                {/* PROGRESS BAR */}
                {/* <div className={styles.barPlayerProgress}></div> */}
                <div
                    max={duration}
                    value={currentTime}
                    step={0.01}
                    onChange={(e) => audioRef.current.currentTime = e.target.value}
                ></div>

                <div className={styles.barPlayerBlock}>
                    <div className={classNames(styles.barPlayer, styles.player)}>

                        {/* PLAYER CONTROLS */}
                        <div className={styles.playerControls}>
                            {/* PREV */}
                            <div className={styles.playerBtnPrev}>
                                <svg className={styles.playerBtnPrevSvg}>
                                    <use href="/img/icon/sprite.svg#icon-prev"></use>
                                </svg>
                            </div>
                            {/* PLAY/PAUSE */}
                            <div className={classNames(styles.playerBtnPlay, styles._btn)}>
                                <button onClick={togglePlay}>
                                    <svg className={styles.playerBtnPlaySvg}>
                                        <use href="/img/icon/sprite.svg#icon-play"></use>
                                    </svg>
                                </button>
                            </div>
                            {/* NEXT */}
                            <div className={styles.playerBtnNext}>
                                <svg className={styles.playerBtnNextSvg}>
                                    <use href="/img/icon/sprite.svg#icon-next"></use>
                                </svg>
                            </div>
                            {/* LOOP */}
                            <div
                                className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
                            >
                                <svg className={styles.playerBtnRepeatSvg}>
                                    <use href="/img/icon/sprite.svg#icon-repeat"></use>
                                </svg>
                            </div>
                            {/* SHUFFLE */}
                            <div
                                className={classNames(styles.playerbtnshuffle, styles._btnicon)}
                            >
                                <svg className={styles.playerBtnShuffleSvg}>
                                    <use href="/img/icon/sprite.svg#icons-huffle"></use>
                                </svg>
                            </div>
                        </div>

                        {/* TRACK PLAYING */}
                        <div
                            className={classNames(styles.playerTrackPlay, styles.trackPlay)}
                        >
                            <div className={styles.trackPlayContain}>
                                <div className={styles.trackPlayImage}>
                                    <svg className={styles.trackPlaySvg}>
                                        <use href="/img/icon/sprite.svg#icon-note"></use>
                                    </svg>
                                </div>
                                <div className={styles.trackPlayAuthor}>
                                    <a className={styles.trackPlayAuthorLink} href="http://">
                                        Ty ta...{" "}
                                        {/* {playlist[currentTrackIndex].title} */}
                                    </a>
                                </div>
                                <div className={styles.trackPlayAlbum}>
                                    <a className={styles.trackPlayAlbumLink} href="http://">
                                        Basta
                                        {/* {playlist[currentTrackIndex].author} */}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.trackPlayLikeDis}>
                            <div
                                className={classNames(styles.trackPlayLike, styles._btnIcon)}
                            >
                                <svg className={styles.trackPlayLikeSvg}>
                                    <use href="/img/icon/sprite.svg#icon-like"></use>
                                </svg>
                            </div>
                            <div
                                className={classNames(styles.trackPlayDislike, styles._btnIcon)}
                            >
                                <svg className={styles.trackPlayDislikeSvg}>
                                    <use href="/img/icon/sprite.svg#icon-dislike"></use>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <BarVolume />
                    {/* <div>
            <audio ref={audioRef} src="your-audio-file.mp3" controls></audio>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div> */}

                </div>
            </div>
        </div>
    );
}
