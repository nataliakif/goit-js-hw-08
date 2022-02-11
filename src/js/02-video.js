
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const STORAGE_KEY ='videoplayer-current-time';

    const player = new Player(iframe);
    populateCurrentTime();
    player.on('timeupdate', timePicker);

    function timePicker(e) {
        localStorage.setItem(STORAGE_KEY, e.seconds);
    };
    function populateCurrentTime(){
        const savedTime =localStorage.getItem(STORAGE_KEY);
        if(savedTime){
            player.setCurrentTime(parseFloat(savedTime));     
         } 
     }