export class Personne {
  id: any;
  name: any;
  firsName: any;
  age: any;
  path: any;
  cin: any;
  job: any;

  constructor(
    id: number,
    name: string,
    firsName: string,
    age: number,
    path: string,
    cin: number,
    job: string,) {

    this.id = id;
    this.firsName = firsName;
    this.name = name;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;

  }

}
