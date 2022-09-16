export class Personne {
  id: any;
  name: any;
  firstName: any;
  age: any;
  path: any;
  cin: any;
  job: any;

  constructor(
    id = 0,
    name = '',
    firstName = '',
    age = 0,
    path = '',
    cin = 0,
    job = '',) {

    this.id = id;
    this.firstName = firstName;
    this.name = name;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;

  }

}
