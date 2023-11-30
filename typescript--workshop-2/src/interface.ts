interface Person {
  name: string;
  age: number;
  gender: Gender;
}
interface Employee extends Person {
  jobTitle: JobTitle;
}
enum Gender {
  Male = "Male",
  Female = "Female",
  BonBinary = "Non-Binary",
}
enum JobTitle {
  Developer = "Developer",
  Designer = "Designer",
  Tester = "Tester",
}

const printPersonInfo = (person: Employee) => {
  console.log("name:", person.name);
  console.log("age:", person.age, "år");
  console.log("Gender:", person.gender);
  console.log("Jobtitle:", person.jobTitle);
};

const personInfo: Employee = {
  name: "Tuan",
  age: 28,
  gender: Gender.Male,
  jobTitle: JobTitle.Developer,
};
printPersonInfo(personInfo);
