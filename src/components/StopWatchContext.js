import { createContext, useContext, useState } from 'react';

const StopWatchContext = createContext();

export function useStopWatch() {
  return useContext(StopWatchContext);
}

export function StopWatchProvider({ children }) {
  const [stopWatchMode, setStopWatchMode] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  return (
    <StopWatchContext.Provider value={{ stopWatchMode, setStopWatchMode, elapsedTime, setElapsedTime}}>
      {children}
    </StopWatchContext.Provider>
  );
}
