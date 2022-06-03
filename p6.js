class Shape {
    constructor(array = []) {
        this.sides = array;
    }
    perimeter = () => this.sides.length > 0 ? this.sides.reduce((total, val) => total + val, 0) : 0;
}

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area = () => this.width * this.length;
}

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area() {
        let heronS = (this.perimeter())/2;
        return Math.sqrt(heronS * ((heronS - this.sideA)*(heronS - this.sideB)*(heronS - this.sideC)));
    }
}

const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (index of data) {
    let shape = null;
    switch (index.length) {
        case (2):
            shape = new Rectangle(...index);
            let rectType = index[0] == index[1] ? "Square" : "Rectangle";
            console.log(`${rectType} with sides ${index} has a perimeter of ${shape.perimeter()} and an area of ${shape.area()}`);
            break;
        case (3):
            shape = new Triangle(...index);
            console.log(`Triangle with sides ${index} has a perimeter of ${shape.perimeter()} and an area of ${shape.area()}`);
            break;
        default:
            let sideCount = index.length == 1 ? 'side': 'sides';
            console.log(`Shape with ${index.length} ${sideCount} unsupported`);
            break;
    }
}