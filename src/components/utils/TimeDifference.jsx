const TimeDifference = ({ startTimestamp, endTimestamp }) => {
  // Function to format milliseconds into human-readable format
  const formatMilliseconds = (duration) => {
    // Helper function to format a unit (hours, minutes, seconds)
    const formatUnit = (value, unit) => (value > 0 ? `${value} ${unit}` : '');

    // Calculate seconds, minutes, and hours
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    // Create an array with formatted time units
    const formattedTime = [
      formatUnit(hours, 'hr'),
      formatUnit(minutes, 'min'),
      formatUnit(seconds, 'sec'),
    ]
      // Filter out empty values and join them into a string
      .filter(Boolean)
      .join(' ');

    // If formatted time is empty, default to '0 sec'
    return formattedTime || '0 sec';
  };

  // Calculate and format the duration
  const formattedDuration = formatMilliseconds(endTimestamp - startTimestamp);

  // Render the formatted duration
  return <span>{formattedDuration}</span>;
};

export default TimeDifference;
