"use strict";
// Ersätt alla : any med passande typ
// Avkommentera funktionerna längst ner i koden för att testa de olika funktionerna
// Se mer detaljerade instruktioner i koden
const ex1 = () => {
    const name = "Sandra";
    const age = 25;
    const isBirthday = false;
    const greet = (name, age, isBirthday) => {
        return `Hey ya! ${name}, age ${age}, do you have a birthday today? ${isBirthday}`;
    };
    const result = greet(name, age, isBirthday);
    console.log("result", result);
    const sum = (num1, num2) => num1 + num2;
    sum(1, 2);
    const names = ["Sandra", "Stina", "Torsten"];
    names.forEach((name) => {
        console.log(`Hi you one of all ${name}`);
    });
};
const ex2 = () => {
    const pizza = {
        name: "Vesuvio",
        slices: 8,
        toppings: ["cheese", "tomato", "ham"],
        price: 80,
    };
    const veganPizza = {
        name: "Vesuvio",
        slices: 8,
        toppings: ["cheese", "tomato", "squash"],
        price: 70,
        vegan: true,
    };
    const getPizzaInfo = (pizza) => {
        console.log(pizza.name);
        console.log(pizza.slices);
        pizza.toppings.forEach((topping) => {
            console.log(topping);
        });
        console.log(pizza.price);
        if (pizza.vegan) {
            console.log("This pizza is vegan");
        }
    };
    getPizzaInfo(pizza);
    getPizzaInfo(veganPizza);
};
const ex3 = () => {
    const user = "SuperAdmin";
    const getPriviligies = (user) => {
        switch (user) {
            case "User":
                console.log("You have user right privileges");
                break;
            case "Admin":
                console.log("You have admin right privileges");
                break;
            case "SuperAdmin":
                console.log("You have super admin right privileges");
                break;
        }
    };
    getPriviligies(user);
};
const ex4 = () => {
    const getPersonList = (firstName, lastName, yearOfBirth, hasDriversLicense) => {
        return `<ul>
  
              <li><b>Förnamn:</b> ${firstName}</li>
  
              <li><b>Efternamn:</b> ${lastName}</li>
  
              <li><b>Födelseår:</b> ${yearOfBirth}</li>
  
              <li><b>Har körkort:</b> ${hasDriversLicense ? "Ja" : "Nej"}</li>
  
          </ul>`;
    };
    const personHTML = getPersonList("Sandra", "Larsson", 1998, true);
    console.log(personHTML);
};
const ex5 = () => {
    const getPersonList = (person) => {
        return `<ul>
  
              <li><b>Förnamn:</b> ${person.firstName}</li>
  
              <li><b>Efternamn:</b> ${person.lastName}</li>
  
              <li><b>Födelseår:</b> ${person.yearOfBirth}</li>
  
              <li><b>Har körkort:</b> ${person.hasDriversLicense ? "Ja" : "Nej"}</li>
  
          </ul>`;
    };
    const person = {
        firstName: "Tuan Anh",
        lastName: "Pham",
        yearOfBirth: 28,
        hasDriversLicense: true,
    };
    const personHTML = getPersonList(person);
    console.log(personHTML);
};
const ex6 = () => {
    const getSummerNightsTemperature = (tempMeasurements) => tempMeasurements.filter((data) => data.temp > 10);
    const tempMeasurements = [
        {
            day: 1,
            temp: 12,
        },
        {
            day: 2,
            temp: 9,
        },
        {
            day: 3,
            temp: 15,
        },
    ];
    const summerTemperatures = getSummerNightsTemperature(tempMeasurements);
    console.log(summerTemperatures);
};
ex1();
ex2();
ex3();
ex4();
ex5();
ex6();
