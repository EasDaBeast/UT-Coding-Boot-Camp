function DigitalPal() {
    this.isHungry = false;
    this.isSleepy = false;
    this.isBored  = true;
    this.age      = 0;

    this.feed = function() {
        if (this.isHungry) {
            console.log("That was yummy!");

            this.isHungry = false;
            this.isSleepy = true;

        } else {
            console.log("No, thanks! I'm full.");

        }
    }

    this.sleep = function() {
        if (this.isSleepy) {
            console.log("Zzzzzzz.");

            this.isSleepy = false;
            this.isBored  = true;
            this.increaseAge();

        } else {
            console.log("No way! I'm not tired.");

        }
    }

    this.play = function() {
        if (this.isBored) {
            console.log("Yay! Let's play!");

            this.isBored  = false;
            this.isHungry = true;

        } else {
            console.log("Not right now. Later?");

        }
    }

    this.increaseAge = function() {
        this.age++;

        console.log(`Happy birthday to me! I am ${this.age} years old.!`);
    }
}


/****************************************************************************
    
    Create a dog instance

*****************************************************************************/
const dog = new DigitalPal();

// Properties and methods unique to the dog instance
dog.isOutside = false;

dog.bark = function() {
    console.log("Woof! Woof!");
}

dog.goOutside = function() {
    if (!this.isOutside) {
        console.log("Yay! I love the outdoors!");

        this.isOutside = true;
        this.bark();

    } else {
        console.log("We're already outside though...");

    }
}

dog.goInside = function() {
    if (this.isOutside) {
        console.log("Do we have to? Fine...");

        this.isOutside = false;

    } else {
        console.log("I'm already inside...");

    }
}


/****************************************************************************
    
    Create a cat instance

*****************************************************************************/
const cat = new DigitalPal();

// Properties and methods unique to the cat instance
cat.houseCondition = 100;

cat.meow = function() {
    console.log("Meow! Meow!");
}

cat.destroyFurniture = function() {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;

        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");

        this.isBored  = false;
        this.isSleepy = true;
    }
}

cat.buyNewFurniture = function() {
    this.houseCondition += 50;

    console.log("Are you sure about that?");
}


const animals = {cat, dog};
const animal  = process.argv[2];
const action  = process.argv[3];

animals[animal][action]();