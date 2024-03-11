document.addEventListener("DOMContentLoaded", function () {
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElement = document.querySelector(".seconds");
  
    let totalSeconds = 24 * 3600; // Set initial time to 24 hours
    let timerInterval;
  
    function updateDisplay() {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
  
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  
    function startTimer() {
      timerInterval = setInterval(function () {
        totalSeconds--;
        updateDisplay();
        if (totalSeconds <= 0) {
          clearInterval(timerInterval);
          alert("Timer has ended!");
        }
      }, 1000);
    }
  
    function pauseTimer() {
      clearInterval(timerInterval);
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
      totalSeconds = 24 * 3600; 
      updateDisplay();
    }
  
    // Event listeners for buttons
    const startButton = document.querySelector(".startbtn");
    const pauseButton = document.querySelector(".pausebtn");
    const stopButton = document.querySelector(".stopbtn");
  
    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", pauseTimer);
    stopButton.addEventListener("click", stopTimer);
  
    // Initial display update
    updateDisplay();
  });
  