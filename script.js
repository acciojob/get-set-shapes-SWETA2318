class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call the constructor of the parent class (Rectangle)
    super(side, side);
  }

  // Add a method to the Square class to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage:
const rectangle = new Rectangle(5, 8);
console.log("Rectangle Area:", rectangle.getArea());

const square = new Square(4);
console.log("Square Area:", square.getArea());
console.log("Square Perimeter:", square.getPerimeter());