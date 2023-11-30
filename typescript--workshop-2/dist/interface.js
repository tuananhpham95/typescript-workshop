"use strict";
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["BonBinary"] = "Non-Binary";
})(Gender || (Gender = {}));
var JobTitle;
(function (JobTitle) {
    JobTitle["Developer"] = "Developer";
    JobTitle["Designer"] = "Designer";
    JobTitle["Tester"] = "Tester";
})(JobTitle || (JobTitle = {}));
const printPersonInfo = (person) => {
    console.log("name:", person.name);
    console.log("age:", person.age, "år");
    console.log("Gender:", person.gender);
    console.log("Jobtitle:", person.jobTitle);
};
const personInfo = {
    name: "Tuan",
    age: 28,
    gender: Gender.Male,
    jobTitle: JobTitle.Developer,
};
printPersonInfo(personInfo);
