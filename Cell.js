class Cell {
    constructor() {
        this.possible = Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        this.entropy = 10;
    }

    collapse(state) {
        this.possible = Set([state]);
        this.entropy = 0;
    }

    display() {
        
    }
}