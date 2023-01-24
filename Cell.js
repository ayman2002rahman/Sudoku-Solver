const CELL_SIZE = 70;
const SELECTOR_SPACING = 15;

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.possible = [];
        let num = 1;
        for(let i = 0; i < 3; i++) {
            let tempArr = [];
            for(let j = 0; j < 3; j++) {
                tempArr.push(new Selector(SELECTOR_SPACING + this.x + i * SELECTOR_SPACING, SELECTOR_SPACING + this.y + j * SELECTOR_SPACING, num));
                num++;
            }
            this.possible.push(tempArr);
        }
        this.entropy = 10;

        this.collapsed = false;
        this.num = -1;
    }

    isClicked() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.possible[i][j].isClicked() && this.possible[i][j].isActive()) { //This returns a boolean so more must be done with this info
                    this.collapse(this.possible[i][j].getNum());
                    //Now we need to remove that number as a possiblity in its respected row, column, a nd 3x3 cell
                    return this.possible[i][j].getNum();
                }
            }
        }
        return -1;
    }

    collapse(state) {
        if(!this.collapsed) {
            this.collapsed = true;
            this.num = state;

            
        }
    }

    update() {
        //2D array for possible states may not be efficient because I would need to loop through it everytime to figure out which selector is the only one active
        let count = 0;
        let num = -1;
        for(let i = 0; i < this.possible.length; i++)
            for(let j = 0; j < this.possible[0].length; j++)
                if(this.possible[i][j].isActive()) {
                    num = this.possible[i][j].getNum();
                    count++;
                }
        if(count == 1) {
            this.collapse(num);
        }
    }

    removePossibleState(num) {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.possible[i][j].getNum() == num) {
                    this.possible[i][j].makeInactive();
                    return;
                }
            }
        }
    }

    display() {
        if(!this.collapsed) {
            fill(100, 100, 100);
            rect(this.x, this.y, CELL_SIZE, CELL_SIZE);
            for(let i = 0; i < 3; i++)
                for(let j = 0; j < 3; j++)
                    this.possible[i][j].display();
        }
        else {
            fill('blue');
            rect(this.x, this.y, CELL_SIZE, CELL_SIZE);
            fill('white');
            textSize(30);
            text(this.num, this.x + 27, this.y + 45);
        }
    }
}