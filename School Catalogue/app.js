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
    quickFacts() {}
    static pickSubstituteTeacher() {}
  
    // SETTERS
    set numberOfStudents(numberOfStudents) { this._numberOfStudents = numberOfStudents }
}

class Primary extends School {}

class Middle extends School {}

class High extends School {}