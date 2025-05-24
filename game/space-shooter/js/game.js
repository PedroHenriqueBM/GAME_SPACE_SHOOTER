import { FPS, TAMX, TAMY } from "./config.js"
import { space } from "./space.js"
import { ship } from "./ship.js"
import * as obstacle from './obstacle.js';
import * as guns from './gun.js';
import { lifeCounter } from "./lifeCounter.js"
import { pointCounter } from "./pointCounter.js"
import { control } from "./control.js"

function init() {
  lifeCounter.initCounter();
  pointCounter.initCounter();

  setInterval(run, 1000 / FPS);

}

window.addEventListener("keydown", (e) => {

  
  if (e.key === 'P' || e.key === 'p') { control.pressPause(); }

  if (e.key === "ArrowLeft") {
    if (!control.pause && !control.lose) {
      ship.changeDirection(-1);
    }

  }
  if (e.key === "ArrowRight") {
    if (!control.pause && !control.lose) {
      ship.changeDirection(+1);
    }

  }

  if (e.code === "Space") {
     
    if(!control.pause && !control.lose){

      guns.createGun(
             parseInt(ship.element.style.left),
             parseInt(ship.element.style.top),
             parseInt(ship.element.style.height),
             parseInt(ship.element.style.width)
           );
   
    }
        
        
   

  }


});



function run() {


  if(control.lose && control.restart){
   
    control.restart = false;
    let mensage = document.createElement("div");
    mensage.innerHTML = "Game Over"
    mensage.style.fontSize = "150px"
    mensage.style.width = "1000px";
    mensage.style.justifyContent="center";
    mensage.style.textAlign="center";
    mensage.style.color="white";
    mensage.style.top = `${TAMY/2 -300}px`
    mensage.style.left  = `${TAMX/2-500}px`
    mensage.style.position = "absolute"



    let button = document.createElement("button");
    button.innerText = "Reiniciar"
   
    button.style.fontSize = "50px";
    button.style.padding="20px"
    button.style.position = "absolute"
    button.style.top = `${TAMY/2 - 100}px`
    button.style.left = `${TAMX/2 - 100}px  `

    button.onclick = (e) =>{
      
      space.element.removeChild(mensage);
      space.element.removeChild(button);

      control.restart = true;
      control.lose = false;
      obstacle.clear();
      guns.clear();
      lifeCounter.clear();
      pointCounter.clear();
      control.speed = 1;  
      
      ship.resetPosition(); 

      
    }

    space.element.appendChild(mensage)
    space.element.appendChild(button);
  }

  if (!control.pause && !control.lose) {

    
    space.move(control.speed)  

    obstacle.createRandomObstacle(control.speed)
    obstacle.moveObstacle(control.speed)

    guns.moveGuns(control.speed)
    ship.move(control.speed)
    lifeCounter.checkColisionBetweenObstaclesAndShip(obstacle, ship);
    pointCounter.checkColisionBetweenGunAndObstacle(obstacle,guns)
    control.increaseSpeed(FPS / 100000);


  }

}

init() 