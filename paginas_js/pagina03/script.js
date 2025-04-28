

class IntergerSet{

    #min=undefined;
    #max=undefined;
    #numbers=[];

    constructor(min,max, numbers){
        this.setMin(0);
        this.setMax(max);
        if(numbers){
            this.#numbers = numbers;
        }
    }



    getNumbers(){
        return this.#numbers;
    }

    getMin(){
        return this.#min;
    }
    setMin(min){

        if(isNaN(this.getMax()) || (!isNaN(this.getMax()) && min<=this.getMax()) ){
            this.#min = min;
        }
        
    }

    getMax(){
        return this.#max;
    }
    setMax(max){

        if(isNaN(this.getMin()) || (!isNaN(this.getMin()) && max>=this.getMin()) ){
            this.#max = max;
        }
        
    }

    initSet(){

        if(!isNaN(this.getMax())){
            
            for(let i=this.getMin();i<=this.getMax();i++){
                this.#numbers.push(false);
            }

        }

    }

    insert(num){
        if(
            !(isNaN(this.getMax()) || isNaN(this.getMin())) &&
            (num>=this.getMin() && num<=this.getMax())
        
        ){
            this.#numbers[num] = true;
        }
    }

    remove(num){
        if(
            !(isNaN(this.getMax()) || isNaN(this.getMin())) &&
            (num>=this.getMin() && num<=this.getMax())
        
        ){
            this.#numbers[num] = false;
        }
    }

    union(set){

        let min = set.getMin()<this.getMin()?set.getMin():this.getMin();
        let max = set.getMax()>this.getMax()?set.getMax():this.getMax();
        let union = new IntergerSet(min,max);

        for(let i=min;i<max;i++){

            if(this.#numbers.at(i) || set.getNumbers().at(i)){
                union.insert(i);
            }

        }

        return union;

    }

    intersection(set){

        let min = set.getMin()<this.getMin()?set.getMin():this.getMin();
        let max = set.getMax()>this.getMax()?set.getMax():this.getMax();
        let intersection = new IntergerSet(min,max);

        for(let i=min;i<max;i++){

            if(this.#numbers.at(i) && set.getNumbers().at(i)){
                intersection.insert(i);
            }

        }

        return intersection;

    }

    difference(set){

        let min = set.getMin()<this.getMin()?set.getMin():this.getMin();
        let max = set.getMax()>this.getMax()?set.getMax():this.getMax();
        let difference = new IntergerSet(min,max);

        for(let i=min;i<max;i++){

            if(this.#numbers.at(i) && !set.getNumbers().at(i)){
                difference.insert(i);
            }

        }

        return difference;

    }


    setToString(){

        let elements = [];
        for(let i=this.getMin();i<=this.getMax();i++){
            if(this.getNumbers().at(i)){
                elements.push(i);
            }
        }

        return elements.toString();
    }




}


let conjunto01 = new IntergerSet(0,5);
let conjunto02 = new IntergerSet(0,10);

conjunto01.insert(1);
conjunto01.insert(2);
console.log(conjunto01.setToString());

conjunto02.insert(8);
conjunto02.insert(9);
conjunto02.insert(2);
console.log(conjunto02.setToString());

console.log(conjunto01.union(conjunto02).setToString());
console.log(conjunto01.intersection(conjunto02).setToString());
console.log(conjunto01.difference(conjunto02).setToString());