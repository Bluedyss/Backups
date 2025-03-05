var clickCount = 0;

function handleClick(element) {
  clickCount++;

  if (clickCount === 2) {
    playAudio();
    loadSecretScript();
  }
}

function playAudio() {
  var audio = new Audio('/audio/audio.wav');
  audio.play();
}

function loadSecretScript() {
  var scriptElement = document.createElement('script');
  scriptElement.src = '/js/secred.js';
  document.head.appendChild(scriptElement);
}