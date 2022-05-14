import React from 'react';
import './App.css';
import Countdown from 'react-countdown';


function NextLaunch({ nextLaunchDate, launchPatch }) {

  return (
    <div className="App">
      <img src={launchPatch} alt={"logo"}/>
      <p><b>{nextLaunchDate}</b></p>
      <Countdown date={nextLaunchDate} />
    </div>
  );
}

export default NextLaunch;
