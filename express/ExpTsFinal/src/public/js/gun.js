import { ASSETS, TAMY } from "./config.js";
import { space } from "./space.js";

class Gun{

    constructor(x,y){
        this.element = document.createElement("img");
        this.element.className = "gun";
        this.gun = ASSETS[7];
        this.#initImage();
        this.#setSize();
        this.#setPosition(x,y);
        space.element.appendChild(this.element);
    }

    #initImage(){
        this.element.src = this.gun.url
    } 
    #setSize(){ 
        this.element.style.width = `${this.gun.width}px`
        this.element.style.height = `${this.gun.height}px` 
    } 
    #setPosition(x,y){
     
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }

    move(newSpeed){
        if(parseInt(this.element.style.top)>0){
            
            this.element.style.top = `${parseInt(this.element.style.top)- newSpeed}px`;
        }else{
            space.element.removeChild(this.element);
            this.element = null;
           
        }
        
    }

    
    
}


export let guns = [];


export function createGun(x,y,height,width){

    let gun = new Gun(x+(width/2)-5,y-height);
    guns.push(gun);
  
 
}

export function moveGuns(newSpeed){

    console.log("Guns",guns.length)
   
    guns.forEach((e,i)=>{
        if(e.element!==null){
            e.move(newSpeed)
         }
    })

   guns = guns.filter(item => item.element)

   
}

export const clear = () => {
    guns.forEach((e,i) => { 

        if(e.element!==null){
            space.element.removeChild(e.element); 
            e.element=null
        }
        
    });
    guns=[];
}
  
