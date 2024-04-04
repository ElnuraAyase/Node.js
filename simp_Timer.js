// Function to format time in HH:MM:SS format
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Function to start the timer
function startTimer(durationInSeconds) {
  let seconds = 0;
  const interval = setInterval(() => {
    console.log(formatTime(seconds));
    seconds++;

    if (seconds >= durationInSeconds) {
      clearInterval(interval);
      console.log('Timer ended.');
    }
  }, 1000);
}

rtTimer(durationInSeconds);
// Set the duration of the timer in seconds
const durationInSeconds = 10;

// Start the timer
console.log('Timer started.');
sta

