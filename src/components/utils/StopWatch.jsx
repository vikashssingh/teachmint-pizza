import { useState, useEffect, useCallback } from "react";

const StopWatch = ({ startTime, status }) => {
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

    // Update elapsed time and start interval when startTime is provided, the stopwatch is running, and status is not "picked"
    if (startTime !== undefined && isRunning && status !== "picked") {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));

      // Set up interval to update elapsed time every second
      currentIntervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);

      setIntervalId(currentIntervalId);
    }

    // Cleanup interval on component unmount or when startTime, isRunning, or status changes
    return () => {
      if (currentIntervalId) {
        clearInterval(currentIntervalId);
      }
    };
  }, [startTime, isRunning, status]);

  // Calculate minutes and seconds
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <>
      {/* Display time if status is not "picked" */}
      {status !== "picked" ? (
        <span>
          {minutes} min {seconds} sec
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default StopWatch;
