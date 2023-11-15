import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const getCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

const setCurrentTime = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
};

const handlePageReload = () => {
  setCurrentTime();
};

player.on('timeupdate', e => {
  throttle(getCurrentTime(e.seconds), 1000);
});

document.addEventListener('DOMContentLoaded', handlePageReload);
