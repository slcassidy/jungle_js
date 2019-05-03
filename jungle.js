// const jungle = [];
let cTiger = 0
let cSnake = 0
let cMonkey = 0


class animals {
    constructor(){
      this.energy = 0;
    }

    makeNoise(){
        // this.sound = true;
        this.energy = this.energy - 3
        return this.energy
    }
    eat(){
        this.energy = this.energy + 5
        return this.energy
    }
    sleeping(){
        this.energy = this.energy + 10
        
        console.log("Sleeping ZZZ:",this.energy);
        // return this.energy
    }
    
    // soundOff(){
    //     snakes.makeNoise();
    //     tigers.makeNoise();
    //     monkeys.makeNoise();
    // }
      energy1(){
        // return this.energy
        console.log(this.energy)
      }


}


// let snakes1 = new ();

class snakes extends animals {
    constructor (){
    super();
    cSnake++;   
}

  count(){
    // let counting =  cSnake;
    // return counting;
    console.log("Count of Snakes:",cSnake);
  }

}

class tigers extends animals {
    constructor (){
    super();
    cTiger++;
}
    eat(food){
        if(food === "grain"){
            console.log("Grain, NOT EATTING")
        }else{
            this.energy = this.energy + 5
            console.log("Eatting Tiger.. yum yum:", this.energy)
            // return this.energy
        }
        
    }
    sleeping(){
        this.energy = this.energy + 5;
        console.log(`Sleeping Tiger: ${this.energy}`);
        // return this.energy;
    }
    count(){
      console.log(`Count of Tigers: ${cTiger}`);
        // return cTiger;
      }

    
}

class monkeys extends animals{
    constructor (){
      super();
      cMonkey++;
    }
    makeNoise(){
        // this.sound = true
        this.energy = this.energy - 4
        return this.energy
    }
    eat(){
        this.energy = this.energy + 2
        return this.energy
    }
    play(){
        // let totalEnergy = this.energy - 8
        this.energy = this.energy - 8
            if(this.energy <= 0){
                // if(totalEnergy <= 0){
                return "Monkey is too tired"
                
            }else {
            return "Oooo Oooo Oooo";     
            // this.energy = totalEnergy;
                console.log(this.energy);

        }
    }
    count(){
        // return cMonkey;
         console.log(`Count of Monkey: ${cMonkey}`);
        
      }
    

  }

  class jungle extends animals{
    constructor(type, num){
      
      super();
      this.type = type;
      this.num = num;
        for(let i = 0; i < num; i++){
          let sp = this.type + [i]
           console.log(sp)
          //  console.log(this.type)
           sp = new tigers();
           new tigers();
          sp.makeNoise();          
        }
        
    }
  }
 



  // sound off.. loop thorugh array


//tigers, monkeys and snakes

let tiger1 = new tigers ();

tiger1.sleeping();
tiger1.count();

let tiger2 = new tigers();
tiger2.eat("bugs");
tiger2.count();
tiger2.energy1();



let tiger3 = new tigers();
tiger3.eat("grain");
tiger3.count();
tiger3.energy1();

let monkeys1 = new monkeys();
// console.log(monkeys1.play());
monkeys1.sleeping();

monkeys1.count();
console.log(monkeys1.play());
console.log(monkeys1.play());
// console.log(monkeys1.play());

let snakes1 = new snakes();
snakes1.count();

let tigera = new jungle ("tigers", 3);
let snake = new jungle ("snakes", 1);
let monkey = new jungle ("monkey", 1);
console.log(tigera, snake, monkey)