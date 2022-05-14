import React, { useEffect, useState } from 'react';
import NextLaunch from './NextLaunch';
import axios from 'axios';
import './App.css';


function App() {

  const [nextLaunch, setNextLaunch] = useState(null)
  const [nextLaunchDate, setNextLaunchDate] = useState(null)
  const [launchPatch, setLaunchPatch] = useState(null)

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v5/launches/next').then((response) => {
      setNextLaunch(response.data)
      const nextDate = new Date(response.data.date_utc);
      setNextLaunchDate(`${nextDate}`)
      setLaunchPatch(response.data.links.patch.small)
    })
  }, [])

  console.log('nextLaunch', nextLaunch)

  return (
    <div className="App">
      <h1 className="title">Next Launch🔥</h1>
      {nextLaunch ?
        <NextLaunch
          nextLaunchDate={nextLaunchDate}
          launchPatch={launchPatch}
        />
        :
        <p>Loading...</p>
      }
    </div>
  );
}

export default App;
