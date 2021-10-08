import { useState, useEffect } from "react";
import shortid from "shortid";

function calculateTimeLeft() {
  const difference = +new Date(`2022-02-26`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    return (
      <span
        suppressHydrationWarning
        key={shortid.generate()}
        className="flex flex-col border-2 md:px-5 px-3 py-3 md:mx-3 mx-0.5 rounded bg-black bg-opacity-50 font-serif tracking-wider md:text-3xl text-base border-none"
      >
        <span
          suppressHydrationWarning
          className="text-xl md:text-3xl font-semibold"
        >
          {timeLeft[interval]}
        </span>
        <span suppressHydrationWarning className="font-thin">
          {interval}
        </span>
      </span>
    );
  });

  return (
    <div suppressHydrationWarning className=" my-20 flex">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span suppressHydrationWarning>This is the day!</span>
      )}
    </div>
  );
}
