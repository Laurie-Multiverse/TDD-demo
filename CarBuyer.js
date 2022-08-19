const Pen = require('./Pen.js');

const bluePen = new Pen('blue');
bluePen.write("Nissan Sentra 1982");
bluePen.setHasInk(false);


// handle this error possibility
try {
    bluePen.sign("Elmo");
} catch(error) {
    console.log("caught error " + error.message);
}
