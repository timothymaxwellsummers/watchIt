import { createContext, useContext, useState, useEffect } from 'react';

const StopWatchContext = createContext();

export function useStopWatch() {
  return useContext(StopWatchContext);
}

export function StopWatchProvider({ children }) {
  const [stopWatchMode, setStopWatchMode] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <StopWatchContext.Provider value={{ isActive, setIsActive, stopWatchMode, setStopWatchMode, elapsedTime, setElapsedTime}}>
      {children}
    </StopWatchContext.Provider>
  );
}
