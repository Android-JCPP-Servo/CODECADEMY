class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut;
        this.ratings;
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

    set isCheckedOut(isCheckedOut) {
        this.isCheckedOut = isCheckedOut;
    }
}

class Book extends Media {}

class Movie extends Media {}

class CD extends Media {}