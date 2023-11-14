import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const setCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

player.on('timeupdate', e => {
  throttle(setCurrentTime(e.seconds), 1);
});

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});
