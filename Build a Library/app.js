class Media {
    // CONSTRUCTOR
    constructor(title) {
        this._title = title;
        this._isCheckedOut;
        this.ratings;
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
    constructor(author, pages, isCheckedOut) {
        super(isCheckedOut);
        this._author = author;
        this._pages = pages;
    }
}

class Movie extends Media {}

class CD extends Media {}