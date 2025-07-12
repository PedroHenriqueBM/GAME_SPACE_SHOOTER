import { TAMX, ASSETS, TAMY } from "./config.js"
import { space } from "./space.js"



class Ship {
  constructor() {
    this.element = document.createElement("img")
    this.element.id = "ship"
    this.direction = 1
    this.damage = 0;
    this.element.src = !this.damage?ASSETS[this.direction+4].url:ASSETS[9].url;
    this.element.style.width = `${ASSETS[this.direction+4].width}px`
    this.element.style.height = `${ASSETS[this.direction+4].height}px`
    this.element.style.top = `${TAMY-ASSETS[this.direction+4].height - 20}px`
    this.element.style.left = `${TAMX / 2 - 50}px`
  
    space.element.appendChild(this.element)
  }
  resetPosition(){
    this.element.style.top = `${TAMY-ASSETS[this.direction+4].height - 20}px`
    this.element.style.left = `${TAMX / 2 - 50}px`
    this.damage = 0;
    this.direction = 1
    this.element.src = ASSETS[this.direction+4].url
  }

  changeDirection(giro) { // -1 +1
    
    if (this.direction + giro >= 0 && this.direction + giro <= 2)
      this.direction = this.direction + giro

    if(!this.damage){
      this.element.src = ASSETS[this.direction+4].url
    }
    
  }
  move(newSpeed) {
    let speed = newSpeed;


    if(this.damage){

      this.element.src = ASSETS[9].url;
      setTimeout(()=>{
        this.damage = 0;
        this.element.src = ASSETS[this.direction+4].url;
      },5000);
      
      
    }
    
    if (this.direction === 0) {
      this.element.style.left = `${(parseInt(this.element.style.left) - speed)>0?(parseInt(this.element.style.left) - speed):speed}px`
    }if (this.direction === 2){
      this.element.style.left = `${(parseInt(this.element.style.left) + speed)<TAMX-100?(parseInt(this.element.style.left) + speed):TAMX-100}px`
    } 
  }

}

export const ship = new Ship()