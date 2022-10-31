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
    static pickSubstituteTeacher() {}
  
    // SETTERS
    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents == 'number') {
          this._numberOfStudents = numberOfStudents;
        } else {
          console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
}

class Primary extends School {}

class Middle extends School {}

class High extends School {}