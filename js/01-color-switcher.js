function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let intervalId;

  function startChangingBackgroundColor() {
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');

    startButton.disabled = true; // Wyłącz przycisk "Start"
    stopButton.disabled = false; // Włącz przycisk "Stop"

    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

  function stopChangingBackgroundColor() {
    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');

    startButton.disabled = false; // Włącz przycisk "Start"
    stopButton.disabled = true; // Wyłącz przycisk "Stop"

    clearInterval(intervalId);
  }