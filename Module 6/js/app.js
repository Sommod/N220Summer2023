/*
 * Name: Josh Moore
 * Assignment: Objects Exercises
 * Date: 16 July 2023
 * Description: Using objects, create a virtual pet
 * Log:
 * - 16 July 2023: Started assignment for virtual pet.
 * - 16 July 2023: Added two ENUM classes to handle Happiness and Energy types.
 * - 18 July 2023: Completed all classes and create methods for displaying information. Completed assignment.
 */

// Variables
/**
 * @type Pet (Class) Array.
 */
let pets = [];

/**
 * @class enum_Energy
 * @classdesc Enum class that contains the different levels of Energy for the pet.
 */
class enum_Energy {
    static TIRED = new enum_Energy("TIRED", 24);
    static NEUTRAL = new enum_Energy("NEUTRAL", 49);
    static AWAKE = new enum_Energy("AWAKE", 74);
    static ENERGETIC = new enum_Energy("ENERGETIC", 100);

    #self = "";
    #value = 0;

    /**
     * @constructor
     * @description Used for setting the values of the Energy.
     * @param {String} self - The name of the object. 
     * @param {int} value - Maximum value of the level of energy 
     */
    constructor(self, value) {
        this.#self = self;
        this.#value = value;

        // Freezes the object to prevent future adjustments.
        Object.freeze(this);
    }

    /**
     * @method values
     * @description Gets an array of all the different enum objects within this class.
     * @returns Array of enum_Energy
     */
    static values() {
        let ret = [];

        ret[0] = this.TIRED;
        ret[1] = this.NEUTRAL;
        ret[2] = this.AWAKE;
        ret[3] = this.ENERGETIC;

        return ret;
    }

    /**
     * @method valuesAsString
     * @description Gets an array of the Enum objects and returns the objects Names as a String.
     * @returns Array of enum_Energy of their String name value.
     */
    static valuesAsString() {
        let ret = Reflect.ownKeys(this);

        // Gets all the properties of this class. As such, need to remove
        // other properties and only contain the Enum Objects. Removes
        // all other objects.
        for(;;) {
            if(ret.length == 0 || ret[0] == this.TIRED.toName())
                break;
            else
                ret.shift();
        }

        return ret;
    }

    /**
     * @method getEnergy
     * @description Gets the Enum value of the String representation. This compare the
     * string to the exact name of the object itself.
     * @param {String} name - Exact object name value
     * @returns enum - Energy
     */
    static getEnergy(name) {
        if(typeof name != String)
            return this.NEUTRAL;

        switch(name.toUpperCase()) {
            case "TIRED":
                return this.TIRED;
            case "NEUTRAL":
                return this.NEUTRAL;
            case "AWAKE":
                return this.AWAKE;
            case "ENERGETIC":
                return this.ENERGETIC;
            default:
                return this.NEUTRAL;
        }
    }

    /**
     * Gets the value in which the enum is valued at from 0 - 100. This is
     * the maximum value before the next Enum should be used.
     * @returns int - Maximum value of the Enum Energy Object.
     */
    getMaxEnergyLevel() {
        return this.#value;
    }

    /**
     * @method toString
     * @description Gets the Name of the enum, but Properly capitalized as humans do. This is NOT the method
     * to use if you are trying to compare; this method is used for displaying. To get the compare value, use
     * the method TONAME.
     * @see {@link toName}
     * @returns String - Human String value of Object name.
     */
    toString() {
        let ret = this.#self;
        ret = (ret.charAt(0).toUpperCase() + ret.slice(1));

        return ret;
    }

    /**
     * @method toName
     * @description Gets the String representation of the enum object. This is what's used for the getter and
     * comparing logic. This returns the exact Object name as described in the class. To get a more friendly
     * String name, use the TOSTRING method.
     * @see {@link toString}
     * @returns String - Exact String representation of the enum object.
     */
    toName() {
        return this.#self;
    }
}

/**
 * @class enum_Happiness
 * @classdesc An enum class that houses the different levels of happines for the virtual pet.
 */
class enum_Happiness {
    static BORED = new enum_Happiness("BORED", 24);
    static NEUTRAL = new enum_Happiness("NEUTRAL", 49);
    static HAPPY = new enum_Happiness("HAPPY", 74);
    static ECSTATIC = new enum_Happiness("ECSTATIC", 100);

    #self = "";
    #value = 0;

    /**
     * 
     * @param {String} self - String representation of Object. 
     * @param {int} value - Integer of Maximum value for level.
     */
    constructor(self, value) {
        this.#self = self;
        this.#value = value;

        Object.freeze(this);
    }

    /**
     * @method values
     * @description gets all the Enums within this class and returns them as an array.
     * @returns Array of Happiness enums
     */
    static values() {
        let ret = [];

        ret[0] = this.BORED;
        ret[1] = this.NEUTRAL;
        ret[2] = this.HAPPY;
        ret[3] = this.ECSTATIC;

        return ret;
    }

    /**
     * @method valuesAsString
     * @description Returns an array of all the enum objects of this class, but in their String representation form.
     * @returns Array of Happiness enums as String
     */
    static valuesAsString() {
        let ret = Reflect.ownKeys(this);

        for(;;) {
            if(ret.length == 0 || ret[0] === this.BORED.toName())
                break;
            else
                ret.shift();
        }

        return ret;
    }

    /**
     * @method getHappiness
     * @description Gets the Happiness Enum from the given string. If the string doesn't match
     * any of the enum strings, then NEUTRAL is returned by default.
     * @param {String} name - String representation of enum object
     * @returns enum object
     */
    static getHappiness(name) {
        if(typeof name != String)
            return this.NEUTRAL;

        switch(name.toUpperCase()) {
            case "BORED":
                return this.BORED;
            case "NEUTRAL":
                return this.NEUTRAL;
            case "HAPPY":
                return this.HAPPY;
            case "ECSTATIC":
                return this.ECSTATIC;
            default:
                return this.NEUTRAL;
        }
    }

    /**
     * @method getMaxHappinessValue
     * @description Gets the maximum Int value of the enum level. This is used to determine what enum to select.
     * @returns Int - Maximum value of enum level
     */
    getMaxHappinessValue() {
        return this.#value;
    }

    /**
     * @method toName
     * @description Gets the exact name of the enum Object. This is used for comparing and selecting of objects.
     * For a more user-friendly String, use the TOSTRING method.
     * @see {@link toString}
     * @returns String - Exact String representation of enum object. This is not user-friendly.
     */
    toName() {
        return this.#self;
    }

    /**
     * @method toString
     * @description Gets the user-friendly version of this enum. This should not be used for comparing or getting
     * other values within this class. To use a more programming-friendly, use the TONAME method.
     * @see {@link toName}
     * @returns String - Friendly representation of enum object.
     */
    toString() {
        let ret = this.#self;
        ret = (ret.charAt(0).toUpperCase() + ret.slice(1));

        return ret;
    }
}

/**
 * @class Pet
 * @classdesc A basic virtual pet with the ability to eat and play with.
 */
class Pet {

    // Variables
    #id
    #name;
    #age;
    #happyValue;
    #energyValue;
    #happiness;
    #energy;

    /**
     * @constructor
     * @description Sets the default values of the Pet Object.
     */
    constructor(id) {
        this.#id = id;
        this.#name = this.#setName();
        this.#age = this.#setAge();
        this.#happyValue = 50;
        this.#energyValue = 50;
        this.#happiness = enum_Happiness.NEUTRAL;
        this.#energy = enum_Energy.NEUTRAL;
    }

    /**
     * @method getName
     * @description Gets the name of the pet.
     * @returns String - nanme of pet.
     */
    getName() { return this.#name; }

    /**
     * @method getAge
     * @description Gets the age of this virtual pet.
     * @returns Int - age of pet.
     */
    getAge() { return this.#age; }

    /**
     * @method getId
     * @description Gets the numerical ID of this pet object. This number is used for
     * determining which pet to play/feed.
     * @returns Int - Id of Pet Object
     */
    getId() { return this.#id; }

    /**
     * @method getHappiness
     * @description Gets the happiness of the virtual pet.
     * @returns Enum - Object of happiness.
     */
    getHappiness() { return this.#happiness; }

    /**
     * @method getEnergy
     * @description Gets the Energy of the virtual pet.
     * @returns Enum - Object of Energy
     */
    getEnergy() { return this.#energy; }

    /**
     * @method setHappiness
     * @description Sets the current virtual pet's happiness enum value.
     * @param {enum_Happiness} happiness 
     */
    setHappiness(happiness) { this.#happiness = happiness; }

    /**
     * @method setEnergy
     * @description Sets the current virtual pet's Energy enum value.
     * @param {enum_Energy} energy 
     */
    setEnergy(energy) { this.#energy = energy; }

    /**
     * @method play
     * @description Plays with your virtual pet. Adds 5 points of value to happiness.
     */
    play() {
        this.#changeHappinessValue(5);
    }

    /**
     * @method feed
     * @description Feeds your virtual pet and increases their Energy points by 5.
     */
    feed() {
        this.#changeEnergyValue(5);
    }

    /**
     * @method editByTime
     * @description Lowers the happiness and energy of the pet by 1 value.
     */
    editByTime() {
        this.#changeEnergyValue(-1);
        this.#changeHappinessValue(-1);
    }

    /**
     * @method changeHappinessValue
     * @description Changes the value of the happiness. Adds the parameter value
     * to the stored private value. To decrease value, need to pass a negative value.
     * @param {int} value 
     */
    #changeHappinessValue(value) {
        if(value > 0)
            this.#happyValue = (value + this.#happyValue > 100) ? 100 : this.#happyValue + value;
        else
            this.#happyValue = (value + this.#happyValue < 0) ? 0 : this.#happyValue + value;
        this.#updateHappiness();
    }

    /**
     * @method changeEnergyValue
     * @description changes the value of Energy. Adds the parameter value
     * to the stored private value. To decrease value, need to pass a negative value.
     * @param {int} value 
     */
    #changeEnergyValue(value) {
        if(value > 0)
            this.#energyValue = (value + this.#energyValue > 100) ? 100 : this.#energyValue + value;
        else
            this.#energyValue = (value + this.#energyValue < 0) ? 0 : this.#energyValue + value;
        this.#updateEnergy();
    }

    /**
     * @method updateHappines
     * @description Updates the Enum Object of the happiness of this virtual pet.
     * Takes the current stored value and runs through all the enum values and finds
     * which Enum the value is in.
     */
    #updateHappiness() {
        for(let i of enum_Happiness.values()) {
            if(i.getMaxHappinessValue() < this.#happyValue)
                continue;
            else {
                this.#happiness = i;
                break;
            }
        }
    }

    /**
     * @method updateEnergy
     * @description Updates the Enum Object of the Energy of this virtual pet.
     * Takes the current Energy Value stored and goes through all the Enum Values and
     * finds which enum the value is currently in.
     */
    #updateEnergy() {
        for(let i of enum_Energy.values()) {
            if(i.getMaxEnergyLevel() < this.#energyValue)
                continue;
            else {
                this.#energy = i;
                break;
            }
        }
    }

    /**
     * @method setName
     * @description Gets a random name from an array of 10 different names and returns the String.
     * @returns String - Random picked name
     */
    #setName() {
        let names = ["Jake", "Jamie", "Samuel", "Karlee", "Hector", "Lilly", "Zach", "Cheryl", "Roger", "Maria"];
        let picker = Math.floor(Math.random() * 10);

        return names[picker];
    }

    /**
     * @method setAge
     * @description Gets a random number from 1 - 14. Returns the generated number.
     * @returns Int - age of oet.
     */
    #setAge() { return Math.floor(Math.random() * 13) + 1; }
}

/**
 * @function playFeed
 * @description Either plays or feeds your pet.
 * @param {int} id - Id of the pet.
 * @param {int} which - determines which function to perform.
 */
function playFeed(id, which) {
    for(let i of pets) {
        if(i.getId() === id) {
            if(which == 0)
                i.play();
            else
                i.feed();
            
            break;
        }
    }

    updateDisplay();
}

/**
 * @function updateDisplay
 * @description Updates all the displays / information about the pets on the HTML pet. This is called 'X' times
 * per second based on the function {@link run}. The Energy / Happiness is changed when the value of the object
 * is changed to a different tier.
 * @see {@link run}
 */
function updateDisplay() {
    for(let i in pets) {
        let docElement = document.getElementById(i);

        docElement.innerHTML = `Name: ${pets[i].getName()}<br/>
        Age: ${pets[i].getAge()}<br/>
        Happiness: ${pets[i].getHappiness().toString()}<br/>
        Energy: ${pets[i].getEnergy().toString()}<br/>
        <button id = 'play${i}' onclick = 'playFeed(${pets[i].getId()}, 0)'>Play</button>
        <button id = 'feed${i}' onclick = 'playFeed(${pets[i].getId()}, 1)'>Feed</button>`;
    }
}

/**
 * @function addPet
 * @description Adds a new pet to the list of pets. Creates the digital box on the HTML page and
 * calls the {@link updateDisplay} function for showing the information of the pet on the page.
 */
function addPet() {
    let HTMLPet = document.createElement("div");
    HTMLPet.id = pets.length;
    HTMLPet.style.width = "120px";
    HTMLPet.style.height = "150px";
    HTMLPet.style.margin = "2px";
    HTMLPet.style.float = "left";
    HTMLPet.style.backgroundColor = "#547888";

    let newPet = new Pet(pets.length);
    pets[pets.length] = newPet;

    document.body.appendChild(HTMLPet);

    updateDisplay();
}

/**
 * @function run
 * @description Function that is set to an interval of 500 (.5 seconds) to be ran. Each time the function is called
 * the function goes through each of the pets and changes the happines / energy value of the pet. After all the pets
 * have been changed, the function {@link updateDisplay} is called to update any changes to any of the pets.
 */
function run() {
    for(let i of pets)
        i.editByTime();

    updateDisplay();
}

// Sets the function 'run' to be ran every .5 seconds.
setInterval(run, 500);