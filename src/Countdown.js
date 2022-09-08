import React, { useEffect, useState } from "react";


function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-09-30`) - +new Date();
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
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (<div class=" container-fluid">
        <div class="row timer">
          <div class="col-3"></div>
          <div class="col-6">
              <div class="">
                <div class="countdown-container">
                  <div>
                    <p id="days" class="big-text">{timeLeft.days}</p>
                    <span class="small-text">Days</span>
                  </div>
                  <div>
                    <p id="hours" class="big-text">{timeLeft.hours}</p>
                    <span class="small-text">Hours</span>
                  </div>
                  <div>
                    <p id="min" class="big-text">{timeLeft.minutes}</p>
                    <span class="small-text">Min</span>
                  </div>
                  <div>
                    <p id="sec" class="big-text">{timeLeft.seconds}</p>
                    <span class="small-text">Sec</span>
                  </div>
                </div>
              </div>
           
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    
      
   
  );
}

export default Countdown;