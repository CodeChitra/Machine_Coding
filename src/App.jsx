import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const App = () => {
  const [percent, setPercent] = useState(10);

  useEffect(() => {
    let int = null;
    int = setInterval(() => {
      setPercent(prev => {
        if (prev < 80)
          return prev + 1;
        else {
          clearInterval(int);
          return 80;
        }
      });
    }, 100)
  }, [])
  return (
    <div className='app'>
      <ProgressBar value={percent} min={10} max={80} />
    </div>
  )
}

export default App
