const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

function stringToInt(str) {
    return parseInt([...str].map(x => x === 'B' || x === 'R' ? 1 : 0).join(''), 2);
}

class Seat {
    constructor(string) {
        this.row = stringToInt(string.slice(0, 7));
        this.column = stringToInt(string.slice(7));
        this.id = this.row * 8 + this.column;
    }
}

const seats = []

for (const line of lines) {
    const seat = new Seat(line);
    seats.push(seat);
}

console.log(Math.max(...seats.map(seat => seat.id)));

