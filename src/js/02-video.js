import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

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

const currentTime = localStorage.getItem(keyStorage);
console.log(typeof currentTime);

player.on('loaded', () => {
  if (currentTime)
    player
      .setCurrentTime(Number.parseFloat(currentTime))
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;

          default:
            break;
        }
      });
});
