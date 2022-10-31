class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this.ratings = 5;
    }
}

class Book extends Media {}

class Movie extends Media {}

class CD extends Media {}