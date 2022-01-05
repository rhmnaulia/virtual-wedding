import { useState, useEffect } from "react";

const Pause = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-11 w-11 rounded-full bg-secondary"
      fill="#79a090"
      viewBox="0 0 24 24"
      stroke="#D9CAB3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const Play = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-11 w-11 bg-secondary rounded-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#D9CAB3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default function MusicPlayer() {
  const [audio] = useState(
    typeof Audio !== "undefined" && new Audio("/music/oneday.mp3")
  );
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
    audio.loop = true;
  }, [isPlaying, audio]);

  const handleChange = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-2	right-3 text-white">
      <button onClick={handleChange}>{isPlaying ? <Pause /> : <Play />}</button>
    </div>
  );
}
