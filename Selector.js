const BUTTON_SIZE = 15;
class Selector {
    constructor(x, y, num) {
        this.x = x;
        this.y = y;
        this.num = num;
        this.active = true;
    }

    getNum() {
        return this.num;
    }

    isActive() {
        return this.active;
    }

    makeInactive() {
        this.active = false;
    }

    display() {
        if(this.active) {
            fill('red');
            rect(this.x, this.y, BUTTON_SIZE, BUTTON_SIZE);
            fill('white');
            textSize(12);
            text(this.num, this.x + 3, this.y + 12);
        }
    }

    isClicked() { //Returns true if the object has been clicked on
        /*
        if(mouseX >= this.x && mouseX <= this.x + BUTTON_SIZE && mouseY >= this.y && mouseY <= this.y + BUTTON_SIZE)
            this.active = false;*/
        return mouseX >= this.x && mouseX <= this.x + BUTTON_SIZE && mouseY >= this.y && mouseY <= this.y + BUTTON_SIZE;
    }
}