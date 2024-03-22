import classNames from "classnames";
import styles from "./Bar.module.css";
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from "@/components/ProgressBar";
import { BarVolume } from "@/components/BarVolume";
import { trackType } from "@/types/types";
import { formatTime } from "@/lib/formatTime";

type BarProps = {
  track: trackType | null;
};

export default function Bar({ track }: BarProps) {
  // get the track
  const audioRef = useRef<null | HTMLAudioElement>(null);
  // helpers
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooped, setIsLooped] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // play the track on click
  const playTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }
  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.track_file;
      playTrack();
    }
  }, [track]);

  // follow the track progress
  const progressTrack = (value: any) => {
    setCurrentTime(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };
  const updateTime = () => {
    setCurrentTime(audioRef.current!.currentTime);
  };
  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", updateTime);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  // handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(prev => !prev);
    }
  };
  // add event listener for space key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault(); // prevent scrolling
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  // handle looping
  const handleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooped;
      setIsLooped(prev => !prev);
    }
  };

  // set volume
  const [volume, setVolume] = useState(0.5);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  const handleVolume = (value: any) => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>

        {/* LOADED TRACK DATA */}
        <audio src={track?.track_file} ref={audioRef}></audio>

        {/* PROGRESS BAR */}
        <ProgressBar
          value={currentTime}
          max={audioRef.current ? audioRef.current.duration : track?.duration_in_seconds}
          onChange={progressTrack}
        />
        {/* PROGRESS TIME, OVERLAY */}
        <div className={styles.barPlayerProgress}>
          {track && currentTime !== undefined && audioRef.current && !isNaN(audioRef.current?.duration) && audioRef.current.duration !== undefined && (
            <>
              {formatTime(currentTime)} / {formatTime(audioRef.current.duration)}
            </>
          )}
        </div>

        <div className={styles.barPlayerBlock}>
          <div className={classNames(styles.barPlayer, styles.player)}>

            {/* CONTROLS */}
            <div className={styles.playerControls}>
              {/* PREV */}
              <div className={styles.playerBtnPrev} onClick={() => alert('This function is not available yet')}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use href="/img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              {/* PLAY/PAUSE */}
              <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles._btn)}>
                <svg className={styles.playerBtnPlaySvg}>
                  {/* ADD PAUSE SVG */}
                  {isPlaying ? (
                    <use
                      href="/img/icon/sprite.svg#icon-pause"
                    ></use>
                  ) : (
                    <use
                      href="/img/icon/sprite.svg#icon-play"
                    ></use>
                  )}
                </svg>
              </div>

              {/* NEXT */}
              <div className={styles.playerBtnNext} onClick={() => alert('This function is not available yet')}>
                <svg className={styles.playerBtnNextSvg}>
                  <use href="/img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>

              {/* LOOP */}
              <div
                onClick={handleLoop}
                className={classNames(styles.playerBtnRepeat, styles._btnIcon)}
              >
                <svg className={styles.playerBtnRepeatSvg}>
                  {isLooped ? (
                    <use href="/img/icon/sprite.svg#icon-repeatOn"></use>
                  ) : (
                    <use href="/img/icon/sprite.svg#icon-repeat"></use>
                  )}
                </svg>
              </div>

              {/* SHUFFLE */}
              <div
                className={classNames(styles.playerbtnshuffle, styles._btnicon)}
              >
                <svg className={styles.playerBtnShuffleSvg} onClick={() => alert('This function is not available yet')}>
                  <use href="/img/icon/sprite.svg#icons-shuffle"></use>
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
                <div className={classNames(styles.trackPlayName, styles.trackPlayNameText)}>
                  {/* <a className={styles.trackPlayAuthorLink} href="http://"> */}
                  {track?.name}
                  {/* </a> */}
                </div>
                <div className={classNames(styles.trackPlayAuthor, styles.trackPlayAuthorText)}>
                  {/* <a className={styles.trackPlayAlbumLink} href="http://"> */}
                  {track?.author}
                  {/* </a> */}
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

          <BarVolume handleVolume={handleVolume} />

        </div>
      </div>
    </div>
  );
}
