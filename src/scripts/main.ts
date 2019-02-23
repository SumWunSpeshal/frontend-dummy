import * as $ from 'jquery';

export class Coordinate {
  private x:number;
  private y:number;

  constructor(x?:number, y?:number) {
    this.x = x;
    this.y = y;
  }
  
  public values() {
    const person = {
      firstName: 'Max',
      middleName: 'F.',
      lastName: 'Mustermann',
  
      get fullName() {
        return `${person.firstName} ${person.middleName} ${person.lastName}`
      },
      set fullName(name) {
        let parts = name.split(' ');
        
        this.firstName = parts[0];
        this.middleName = parts[1];
        this.lastName = parts[2];
      }
    }

    console.log(person.fullName);
    person.fullName = 'Sacha Jan Karl';
    console.log(person.fullName);

  }

  public draw() {
    document.body.innerHTML = (`X is ${this.x}, Y is ${this.y}`)
  }
}

let point = new Coordinate('Something' as any, 6); 

point.draw();
point.values();