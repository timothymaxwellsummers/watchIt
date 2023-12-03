import { createContext, useContext, useState } from 'react';

const StopWatchContext = createContext();

export function useStopWatch() {
  return useContext(StopWatchContext);
}

export function StopWatchProvider({ children }) {
  const [stopWatchMode, setStopWatchMode] = useState(false);

  return (
    <StopWatchContext.Provider value={{ stopWatchMode, setStopWatchMode }}>
      {children}
    </StopWatchContext.Provider>
  );
}
