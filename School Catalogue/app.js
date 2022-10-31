class School {
    // CONSTRUCTOR
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
  
    // GETTERS
    get name() { return this._name; }
    get level() { return this._level; }
    get numberOfStudents() { return this._numberOfStudents; }
  
    // METHODS
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let index = Math.floor(Math.random() * substituteTeachers.length - 1);
        return substituteTeachers[index];
    }
  
    // SETTERS
    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents == 'number') {
          this._numberOfStudents = numberOfStudents;
        } else {
          console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
}

class PrimarySchool extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, level, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
}

class Middle extends School {}

class High extends School {}