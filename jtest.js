// const jungle = [];
let cTiger = 0
let cSnake = 0
let cMonkey = 0


class animals {
    constructor() {
        this.energy = 0;
    }

    makeNoise() {
        // this.sound = true;
        this.energy = this.energy - 3
        return this.energy
    }
    eat() {
        this.energy = this.energy + 5
        return this.energy
    }
    sleeping() {
        this.energy = this.energy + 10
        return this.energy
    }

    soundOff() {
        snakes.makeNoise();
        tigers.makeNoise();
        monkeys.makeNoise();
    }


}


// let snakes1 = new ();

class snakes extends animals {
    constructor() {
        super();
        cSnake++;
    }

    count() {
        return cSnake;
    }

}

class tigers extends animals {
    constructor() {
        super();
        cTiger++;
    }
    eat(food) {
        if (food = "grain") {
            return "Grain, NOT EATTING"
        } else {
            this.energy = this.energy + 5
            return this.energy
        }

    }
    sleeping() {
        this.energy = this.energy + 5
        return this.energy
    }
    count() {
        return cTiger;
    }

}

class monkeys extends animals {
    constructor() {
        super();
        cMonkey++;
    }
    makeNoise() {
        // this.sound = true
        this.energy = this.energy - 4
        return this.energy
    }
    eat() {
        this.energy = this.energy + 2
        return this.energy
    }
    play() {
        let totalEnergy = this.energy - 8
        if (totalEnergy <= 0) {
            return "Monkey is too tired"

        } else {
            return "Oooo Oooo Oooo";
            this.energy = totalEnergy
        }
    }
    count() {
        return cMonkey;
    }


}

//tigers, monkeys and snakes

let tiger1 = new tigers();
console.log(tiger1.eat("grain"));
console.log(tiger1.sleeping());
console.log(tiger1.count());

let tiger2 = new tigers();
console.log(tiger2.eat("bugs"));
console.log(tiger2.count());

let tiger3 = new tigers();
console.log(tiger3.count());

let monkeys1 = new monkeys();
console.log(monkeys1.count());

let snakes1 = new snakes();
console.log(snakes1.count());

    //   let check = this[0]
    // //    if (this.length === 0 || data > this[this.length - 1]) {
    // //   this.push(data);
    // // } else{
    // //   for(let i = 0, i > this.length, i++){
    // //     if (this[1]==="tiger"){
    // //     console.log("GRRRRRRR")
    // //     }else if(this[1]==="monkey"){
    // //       console.log(this.makeNoise())
    // //     }else{
    // //       console.log("testing")
    // //       }
    // //   }
    // console.log(check)
    //   }
    // }