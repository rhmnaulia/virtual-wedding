import { useState, useEffect } from "react";
import shortid from "shortid";
import { Link } from "react-scroll";

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
            {0}
          </span>
          <span suppressHydrationWarning className="font-thin text-accent">
            {interval}
          </span>
        </span>
      );
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
          {timeLeft[interval] ? timeLeft[interval] : 0}
        </span>
        <span suppressHydrationWarning className="font-thin text-accent">
          {interval}
        </span>
      </span>
    );
  });

  return (
    <div suppressHydrationWarning className="my-20 flex justify-center">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <div
          suppressHydrationWarning
          className="flex flex-col justify-center items-center text-palewhite px-5 text-center"
        >
          <h3 className="font-typography text-3xl text-palewhite lg:text-5xl">
            Today is the day !
          </h3>
          <Link to="livestream-target" spy={true} smooth={true} duration={1000}>
            <p className="p-5 border-2 text-center text-palewhite border-secondary bg-secondary ring-secondary ring-0 rounded-md font-bold text-lg  sm:text-2xl mt-3 font-serif">
              Watch Livestream
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
