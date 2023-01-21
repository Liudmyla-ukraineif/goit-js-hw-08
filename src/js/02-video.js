import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayVideo, 1000));

function onPlayVideo({seconds}) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

if(localStorage.getItem('videoplayer-current-time')){
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}