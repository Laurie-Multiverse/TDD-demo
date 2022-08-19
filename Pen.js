class Pen {
    #hasInk;
    #colorInk;

    constructor(colorInk) {
        this.#hasInk = true;
        this.#colorInk = colorInk;
    }

    getHasInk() {
        return this.#hasInk;
    }

    setHasInk(status) {
        this.#hasInk = status;
    }

    color() {
        return this.#colorInk;
    }

    write(sentence) {
        console.log(sentence);
    }

    sign(name) {
        if (this.#hasInk) {
            this.write(name);
        } else {
            throw new Error("pen has no ink");
        }

        console.log("you signed your name");

    }
}

module.exports = Pen;


// let pen1 = new Pen('pink');
// pen.write("Hello world");
// pen.hasInk = false;