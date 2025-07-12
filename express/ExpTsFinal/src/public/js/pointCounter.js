
import { space } from "./space.js";

class PointCounter {

    constructor() {
        this.points = 0;
        this.element = document.createElement("h1");
        this.element.style.display = "flex";
        this.element.style.position = "absolute";
        this.element.style.fontStyle = "bold";
        this.element.style.color = "white";

        this.element.style.position = "relative";
        this.element.style.left = "93%";
        this.element.style.bottom = "-1%";
        this.element.style.fontSize = "25px";

        this.element.innerHTML = String(this.points).padStart(6, '0');
    }


    clear() {
        this.points = 0;
        this.element.innerHTML = String(this.points).padStart(6, '0');
    }

    initCounter() {
        space.element.appendChild(this.element);
    }

    addPoints(points) {
        if (this.points + points <= 999999) {
            this.points = this.points + points;
            this.element.innerHTML = String(this.points).padStart(6, '0');
        }
    }
    removePoints(points) {
        if (this.points - points >= 0) {
            this.points = this.points - points;
            this.element.innerHTML = String(this.points).padStart(6, '0');
        }
    }

    checkColisionBetweenGunAndObstacle(obstacles, guns) {


        for (let j = 0; j < guns.guns.length; j++) {

            let gun = guns.guns[j];

            for (let i = 0; i < obstacles.obstacles.length; i++) {
                let obs = obstacles.obstacles[i]



                if (obs?.element && gun?.element) {


                    let colide = obstacles.checkIfObstaclesDoColisionWithGun(gun, obs);


                    if (colide) {



                        space.element.removeChild(gun.element);
                        space.element.removeChild(obs.element);
                        gun.element = null;
                        obs.element = null;
                        this.addPoints(obs.points)




                    }
                }
            }
        }



    }

}

export const pointCounter = new PointCounter();