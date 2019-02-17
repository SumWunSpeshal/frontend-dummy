class Student {
  public fullName: String 

  constructor(
    public firstName: string, 
    public middleInitial: string, 
    public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  } 

  private greeter(something: Person) {
    return (`Hello ${something.firstName} ${something.middleInitial} ${something.lastName}`);
  }
}

interface Person {
  firstName: string;
  middleInitial: string;
  lastName: string;
}