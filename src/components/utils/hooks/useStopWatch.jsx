import { useState, useEffect, useCallback } from "react";

const useStopWatch = (startTime) => {
  // State to track elapsed time
  const [elapsedTime, setElapsedTime] = useState(0);

  // State to track interval ID
  const [intervalId, setIntervalId] = useState(null);

  // State to track stopwatch running status
  const [isRunning, setIsRunning] = useState(true);

  // Function to stop the stopwatch
  const stopStopwatch = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  }, [intervalId]);

  useEffect(() => {
    let currentIntervalId;

    // Update elapsed time and start interval when startTime is provided and the stopwatch is running
    if (startTime !== undefined && isRunning) {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));

      // Set up interval to update elapsed time every second
      currentIntervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);

      setIntervalId(currentIntervalId);
    }

    // Cleanup interval on component unmount or when startTime or isRunning changes
    return () => {
      if (currentIntervalId) {
        clearInterval(currentIntervalId);
      }
    };
  }, [startTime, isRunning]);

  // Return total time and stop function
  return {
    totalTime: elapsedTime,
    stopStopwatch,
  };
};

export default useStopWatch;
