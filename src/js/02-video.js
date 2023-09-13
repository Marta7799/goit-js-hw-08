import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

const keyStorage = 'videoplayer - current - time';

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(keyStorage, e.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(keyStorage))
  .then(function (seconds) {
    player.play().then(function () {
      console.log('the videon was played');
    });
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
