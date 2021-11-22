import React, { useState, useRef, /*useEffect*/ } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function AudioPlayerIda() {
    const [isPlaying, setIsPlaying] = useState(false);

    // useRef - references
    const audioPlayerIda = useRef(); //refernce our audio component

    const togglePlayPauseIda = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayerIda.current.play();
            // animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayerIda.current.pause();
            // cancelAnimationFrame(animationRef.current);
        }
    }

    return (

        <div>
            <audio ref={audioPlayerIda} src="audio/ida-op-goal.mpeg" type="audio/mpeg" preload="metadata"></audio>
            <motion.button
                whileHover={{
                    scale: 1.2,
                    // originX: 0,
                    textShadow: "0px 0px 2px rgb(255,255,255)"
                }}
                transition={{ type: 'spring', stiffness: 100 }}
                onClick={togglePlayPauseIda} className="play-button">
                {isPlaying ? <FaPause /> : <FaPlay className="play" />}
            </motion.button>

            {/* current time */}
            {/* <div className="current-time">0:00</div> */}

            {/* progress bar */}
            {/* <div>
                <input type="range" />
            </div> */}

            {/* duration */}
            {/* <div className="duration">2:00</div> */}
        </div>
    )

}