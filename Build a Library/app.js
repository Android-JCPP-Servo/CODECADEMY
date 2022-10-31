class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this.ratings = 5;
    }

    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this.isCheckedOut;
    }
    get ratings() {
      return this.ratings;
    }
}

class Book extends Media {}

class Movie extends Media {}

class CD extends Media {}