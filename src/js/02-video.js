// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// function onPlayerReady() {
//     const savedTime = localStorage.getItem(STORAGE_KEY);
//     if (savedTime) {
//         player.setCurrentTime(savedTime);  
//     }
// }

// function onTimeUpdate() {
//     player.getCurrentTime().then(function (seconds) {
//         localStorage.setItem(STORAGE_KEY, seconds);
//     });
// }

// player.on('loaded', onPlayerReady);
// player.on('timeupdate', throttle(onTimeUpdate, 1000));

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onTimeUpdate(event) {
  const currentTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
}

function onPlayerReady() {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime !== null) {
    player.setCurrentTime(savedTime);
  }
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.on('loaded', onPlayerReady);