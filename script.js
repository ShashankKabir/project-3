const heroPlayButton = document.getElementById('heroPlay');
let playing = false;

heroPlayButton.addEventListener('click', () => {
  playing = !playing;
  heroPlayButton.textContent = playing ? 'Pause' : 'Play';
  heroPlayButton.classList.toggle('btn-paused', playing);
});
