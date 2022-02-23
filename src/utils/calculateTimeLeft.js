export const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    const difference = +new Date(`2022-02-25`) - +new Date();  // +unary operator
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    if (difference < 0) {
      console.error("You have provided a invalid date as reveal date!")
      return
    }

    return timeLeft;
  };
