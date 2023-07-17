import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const savedTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

// const throttle = require('lodash.throttle');

const player = new Player(iframe);

player.on('timeupdate', throttle(savePlayedTime, 1000));
 
function savePlayedTime(event) {
  const {seconds} = event; 
  localStorage.setItem("videoplayer-current-time", seconds);
 };


let localStorageTime = Number(localStorage.getItem("videoplayer-current-time"));
console.log(localStorageTime);

player.setCurrentTime(localStorageTime);
