import { control } from "./control.js";
import { space } from "./space.js";

class LifeCounter{

    constructor(){
        this.lifes = 3;
        this.element = document.createElement("div");
       
        this.element.style.display = "flex";
        this.element.style.flexDirection = "row";
        this.element.style.width = "20px";
        this.element.style.position = "absolute";
        this.element.style.left = "85%";
        this.element.style.top = "10px";
        this.element.style.columnGap = "5px";
    
    }

    clear(){
    
        for(let i=this.lifes;i>0;i--){
            this.removeLife()
        }
        this.lifes = 3;
        this.initCounter();

    }
    initCounter(){
        for(let i=0;i<this.lifes;i++){
            let item = document.createElement("img");
            item.src = "assets/png/life.png";
            item.className = `life-${i+1}`;
            this.element.appendChild(item);
        }
        space.element.appendChild(this.element);
    }

    addLife(){
        
        if(this.lifes+1<=3){
            this.lifes = this.lifes + 1;
            let item = document.createElement("img");
            item.src = "assets/png/life.png";
            item.className = `life-${this.lifes}`
            this.element.appendChild(item);
        }

    }
    removeLife(){
        if(this.lifes-1>=0){
            
            let item = this.element.getElementsByClassName(`life-${this.lifes}`)
            this.lifes = this.lifes - 1;
            this.element.removeChild(item.item(item.length-1));
        }else{
            control.lose = 1;
        }
    }

    checkColisionBetweenObstaclesAndShip(obstacles,ship){

        let num = obstacles.checkIfObstaclesDoColisionWithShip(ship);

      

        for(let i=0;i<num;i++){
            this.removeLife();
            ship.damage = 1;
        }

    }
}

export const lifeCounter = new LifeCounter();