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
          className="text-palewhite px-5 text-center"
        >
          <h3 className="font-serif text-4xl lg:text-3xl">Today is the day!</h3>
          <p className="text-justify mt-3 font-serif text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            pariatur dolores similique ipsum veritatis, illo eveniet deserunt,
            autem nostrum aliquido.
          </p>
        </div>
      )}
    </div>
  );
}
