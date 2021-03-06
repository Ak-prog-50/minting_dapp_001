export const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    const difference = +new Date("2022", "01", "23", "18", "0", "0", "0") - +new Date();  // +unary operator
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      // console.log(timeLeft.seconds, timeLeft.minutes, timeLeft.hours, timeLeft.days , difference)
      // console.log(typeof(timeLeft.seconds), (timeLeft["seconds"] <= 0))
    }

    //!Check this if planning to implement this again
    if (difference < 0) {
      console.error("You have provided a invalid date as reveal date!")
      return
    }

    return timeLeft;
  };
