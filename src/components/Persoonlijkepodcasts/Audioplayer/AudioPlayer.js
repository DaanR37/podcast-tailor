// import React, { Component } from "react";
import React, { useState, useRef, /*useEffect*/ } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef(); //reference our audio component

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

    return (
        <div>
            <audio ref={audioPlayer} src="audio/podcast-tailor-compilatie.wav" type="audio/wav" preload="metadata"></audio>
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
        </div>
    )
}