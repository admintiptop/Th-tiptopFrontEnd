import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredNotice = () => {
  return (
    <div>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter-index">
      <div
        className="countdown-index"
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimerForIndex = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimerForIndex;
