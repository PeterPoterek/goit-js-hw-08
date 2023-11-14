import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', e => {
  console.log(e);

  const current = e.seconds;

  localStorage.setItem('videoplayer-current-time', current);
});

document.addEventListener('DOMContentLoaded', function () {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime) player.setCurrentTime(currentTime);
});
