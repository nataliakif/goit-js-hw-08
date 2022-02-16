
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const STORAGE_KEY ='videoplayer-current-time';

    const player = new Player(iframe);
    populateCurrentTime();
    player.on('timeupdate', throttle(timePicker,1000));

    function timePicker(e) {
        localStorage.setItem(STORAGE_KEY, e.seconds);
    };
    function populateCurrentTime(){
        const savedTime =localStorage.getItem(STORAGE_KEY);
        if(savedTime){
            player.setCurrentTime(parseFloat(savedTime));     
         } 
     }