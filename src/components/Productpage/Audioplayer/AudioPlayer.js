// import React, { Component } from "react";
import React, { useState, useRef, /*useEffect*/ } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function AudioPlayer() {
    // useState
    const [isPlaying, setIsPlaying] = useState(false);
    // const [duration, setDuration] = useState(0);
    // const [currentTime, setCurrentTime] = useState(0);

    // useRef - references
    const audioPlayer = useRef(); //refernce our audio component
    // const progressBar = useRef(); //reference our progress bar
    // const animationRef = useRef(); //reference our animation

    // useEffect(() => {
    //     const seconds = Math.floor(audioPlayer.current.duration);
    //     setDuration(seconds);
    //     progressBar.current.max = seconds;
    // },[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    // const calculateTime = (secs) => {
    //     const minutes = Math.floor(secs / 60);
    //     const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    //     const seconds = Math.floor(secs % 60);
    //     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    //     return `${returnedMinutes}:${returnedSeconds}`;
    // }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            // animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            // cancelAnimationFrame(animationRef.current);
        }
    }

    // const whilePlaying = () => {
    //     progressBar.current.value = audioPlayer.current.currentTime;
    //     changePlayerCurrentTime();
    //     animationRef.current = requestAnimationFrame(whilePlaying);
    // }

    // const changeRange = () => {
    //     audioPlayer.current.currentTime = progressBar.current.value;
    //     changePlayerCurrentTime();
    // }

    // const changePlayerCurrentTime = () => {
    //     progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    //     setCurrentTime(progressBar.current.value);
    // }

    return (

        <div>
            <audio ref={audioPlayer} src="audio/debby65.wav" type="audio/wav" preload="metadata"></audio>
            <motion.button
                whileHover={{
                    scale: 1.2,
                    // originX: 0,
                    textShadow: "0px 0px 2px rgb(255,255,255)"
                }}
                transition={{ type: 'spring', stiffness: 100 }}
                onClick={togglePlayPause} className="play-button">
                {isPlaying ? <FaPause /> : <FaPlay className="play" />}
            </motion.button>

            {/* current time */}
            {/* <div className="current-time">{calculateTime(currentTime)}</div> */}

            {/* progress bar */}
            {/* <div>
                <input type="range" className="progress-bar" defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div> */}

            {/* duration */}
            {/* <div className="duration">{(duration && !isNaN(duration)) && calculateTime(duration)}</div> */}
        </div>
    )
}