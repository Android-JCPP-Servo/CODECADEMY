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
        console.log(this._name, 'educates', this._numberOfStudents, 'students at the', this._level, 'school level.');
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let index = Math.floor(Math.random() * substituteTeachers.length);
        console.log(substituteTeachers[index]);
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
    // CONSTRUCTOR
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    // GETTERS
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents, extracurricular) {
        super(name, 'high', numberOfStudents);
        this._extracurricular = extracurricular;
    }
  
    get extracurricular() {
        console.log(this._extracurricular);
    }
}

class HighSchool extends School {
    // CONSTRUCTOR
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
  
    // GETTERS
    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}

// PRIMARY SCHOOL INSTANCE
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
let subs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
School.pickSubstituteTeacher(subs);

// HIGH SCHOOL INSTANCE
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;