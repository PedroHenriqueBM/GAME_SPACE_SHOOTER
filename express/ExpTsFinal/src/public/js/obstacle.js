import { TAMX, PROB_OBSTACLE, ASSETS, MINSPEED, MAXSPEED, TAMY } from "./config.js"
import { space } from "./space.js"

class Obstacle {

  constructor(obstacles) {
    this.element = document.createElement("img")
    this.element.className = "obstacle"
    this.direction = this.#getRamdomInt(0,1);
    this.#getRamdomImage()
    this.#setPosition(obstacles)
    this.#setSize()

    
    space.element.appendChild(this.element)
  }

  move(speed) {

    if(parseInt(this.element.style.top)-parseInt(this.element.style.height) <= TAMY || parseInt(this.element.style.left)-parseInt(this.element.style.width) <= TAMX || parseInt(this.element.style.left)-parseInt(this.element.style.width) <= 0 ){
        this.element.style.top = `${parseInt(this.element.style.top) + this.#getRamdomInt(MINSPEED,MAXSPEED) + speed}px`

        
        if(this.direction){
          this.element.style.left = `${parseInt(this.element.style.left) + this.#getRamdomInt(MINSPEED,MAXSPEED) + speed}px`
        }else{
          this.element.style.left = `${parseInt(this.element.style.left) - this.#getRamdomInt(MINSPEED,MAXSPEED) - speed}px`


        }
        
    }else{
       space.element.removeChild(this.element);
       this.element = null;
      
    }
  
  }

  #getRamdomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  #getRamdomImage(){
    let imageIndex = this.#getRamdomInt(0,3)
    let image = ASSETS[imageIndex]
    this.element.src = image.url
    this.indexType = imageIndex
    this.points = image.points
  }


 
  #colision(firstElement,secondElement){

    
  
    let firstLeft = parseInt(firstElement.element.style.left);
    let firstTop = parseInt(firstElement.element.style.top);
    let firstWidth = parseInt(firstElement.element.style.width);
    let firstHeight = parseInt(firstElement.element.style.height);

    let firstTamX = firstLeft+firstWidth;
    let firstTamY = firstTop+firstHeight;






    let secondLeft = parseInt(secondElement.element.style.left);
    let secondTop = parseInt(secondElement.element.style.top);
    let secondWidth = parseInt(secondElement.element.style.width);
    let secondHeight = parseInt(secondElement.element.style.height);

    let secondTamX = secondLeft+secondWidth;
    let secondTamY = secondTop+ secondHeight;

    


     let colision = secondLeft>=firstLeft && secondLeft<=firstTamX && firstTop>=secondTop && firstTop<=secondTamY;

     return colision;

  }

  #setPosition(obstacles){


    let top = 10;
    let left = 10;

    for(let i=0;i<this.#getRamdomInt(1,10);i++){
      top = this.#getRamdomInt(1,30);
    }

    for(let i=0;i<this.#getRamdomInt(1,10);i++){
      left = this.#getRamdomInt(1,TAMX);
    }

    this.element.style.top = `${top}px`
    this.element.style.left = `${left}px`

  }

  #setSize(){
     this.element.style.width = `${ASSETS[this.indexType].width}px`
     this.element.style.height = `${ASSETS[this.indexType].height}px`
  }

  checkColision(firstElement, secondElement){
    
      return (this.#colision(firstElement,secondElement) || this.#colision(secondElement,firstElement))
  }

}

export let obstacles = []


function getRamdomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const createRandomObstacle = (speed) => {

  


  if ( Math.random() < PROB_OBSTACLE) {

    for(let i=0;i<getRamdomInt(speed,20);i++){
        obstacles.push(new Obstacle(obstacles))
    }
    
  }
}

export const moveObstacle = (speed) => {

  
  obstacles.forEach((e,i) => {
    if(e.element!==null){
       e.move(speed)
    }   
  });

  obstacles = obstacles.filter(item => item.element)
  
}    

export const checkIfObstaclesDoColisionWithShip = (ship) =>{


  let colision = 0


  for(let i=0;i<obstacles.length;i++){

    if(obstacles[i].element){
      if(obstacles[i].checkColision(ship,obstacles[i])){
       space.element.removeChild(obstacles[i].element)
       obstacles[i].element=null;
       colision=colision+1;
      }
    }
 
      
  

    
  }
  

  return colision;
  
}

export const checkIfObstaclesDoColisionWithGun = (gun,obstacle) =>{

  return obstacle.checkColision(obstacle,gun);
  
}

export const clear = () => {
      obstacles.forEach((e,i) => { 
        if(e.element!==null){
          space.element.removeChild(e.element);
          e.element=null
        } 
      });
      obstacles=[];
}