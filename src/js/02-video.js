const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

const savedTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
const throttle = require('lodash.throttle');
import Player from '@vimeo/player';


const player = new Player(iframe);

player.on('timeupdate', throttle(timer, 1000));
 
function timer(event) {
  const {seconds} = event; 
  localStorage.setItem("videoplayer-current-time", seconds);
 };



player.setCurrentTime(savedTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the videos duration
            break;

        default:
            // some other error occurred
            break;
    }
});