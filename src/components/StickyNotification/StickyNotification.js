import { useState, useEffect } from "react";
import { calculateTimeLeft } from "../../utils/calculateTimeLeft";
import "./stickyNotification.css";

const StickyNotification = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // return () => clearTimeout(timer);
  });

  const timerComponents = [];
  let phrase;

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    // if (timeLeft[interval] === 1) {
    //   phrase = interval.substring(0, interval.length -1);
    // }

    if ((timeLeft[interval] <= 0)) {
      timerComponents.push(
        <span className="countdown-text">
          {"00"}{" "}
        </span>
      )
    } else {
      timerComponents.push(

        <span className="countdown-text">
          {timeLeft[interval] < 10
           ? ("0" + timeLeft[interval])
            // ? (timeLeft[interval] > 0 ? "0" + timeLeft[interval] : "00")
            : "" + timeLeft[interval]}{" "}
            
          {interval === "seconds" ? " " : ":"}
        </span>
      );
    }


  });

  return (
    <div id="notification-bar">
      <div className="container">
        <div id="main-text">
          <p>
            <strong>
              {timerComponents.length ? (
                timerComponents
              ) : (
                <a
                  href="https://testnets.opensea.io/collection/uglyeyes"
                  id="main-link"
                  target={"_blank"}
                >
                  View Collection at Opensea.io
                </a>
              )}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyNotification;
