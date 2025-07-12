import { FPS } from "./config.js";


class Control{

    constructor(){
        this.pause = false;
        this.speed = 1;
        this.lose = false;
        this.restart = true;
    }

    pressPause(){
        this.pause = !this.pause;
    }

    increaseSpeed(newSpeed){
        this.speed = this.speed+newSpeed;
    }
} 

export const control = new Control();