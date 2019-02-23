class Student {
  private x:number;
  private y:number;

  constructor(x?, y?) {
    this.x = x;
    this.y = y;
  }

  private draw() {
    document.body.innerHTML = (`X is ${this.x}, Y is${this.y}`)
  }
} 