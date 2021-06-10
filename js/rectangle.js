class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  // Getter
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  // Method
  draw() {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.color;
    context.fill();
  }

  collidesWith(rectangle) {
    if (
      this.top > rectangle.bottom ||
      this.right < rectangle.left ||
      this.bottom < rectangle.top ||
      this.left > rectangle.right
    ) {
      //no collision
      return false;
    }
    return true;
  }
}
