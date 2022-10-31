class Media {
    // CONSTRUCTOR
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this.ratings = [];
    }

    // GETTERS
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this.isCheckedOut;
    }
    get ratings() {
        return this.ratings;
    }

    // METHODS
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        let ratingAverage = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this._ratings.length;
        return ratingAverage;
    }
    addRating(rating) {
        this._ratings.push(rating);
    }

    // SETTERS
    set isCheckedOut(isCheckedOut) {
        this.isCheckedOut = isCheckedOut;
    }
}

class Book extends Media {
    // CONSTRUCTOR
    constructor(author, pages, isCheckedOut) {
        super(isCheckedOut);
        this._author = author;
        this._pages = pages;
    }

    // GETTERS
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    // CONSTRUCTOR
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    // GETTERS
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    // CONSTRUCTOR
    constructor(author, title, runTime) {
        super(title);
        this._author = author;
        this._runTime = runTime;
    }

    // GETTERS
    get author() {
        return this._author;
    }
    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());