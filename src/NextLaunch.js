import React from 'react';
import './App.css';
import Countdown from 'react-countdown';


function NextLaunch({ nextLaunchDate, launchPatch }) {

  return (
    <div className="App">
      <img src={launchPatch} alt={"logo"}/>
      <p>{nextLaunchDate}</p>
      <b><Countdown
        date={nextLaunchDate}
        className="Countdown"
      /></b>
    </div>
  );
}

export default NextLaunch;
