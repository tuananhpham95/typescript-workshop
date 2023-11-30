//1 : Vad innebär narrowing inom typescript?
// svar : Narrowing inom TypeScript innebär att begränsa typen av en variabel baserat på en villkorssats. Detta kan vara användbart när du har en variabel som kan ha flera möjliga typer, men du vill utföra operationer på den som endast är giltiga för en specifik typ.

//2 : Ange olika tekniker för att åstadkomma narrowing i typescript, d.v.s olika sätt att använda typeguards.

//typeof
const stringOrNumber = (value: string | number) => {
  if (typeof value === "string") {
    console.log(
      value + " " + "is a string with " + value.length + " " + "character"
    );
  } else {
    console.log(value + " " + "is a number");
  }
};

const string = "Tuan";
const number = 10;
stringOrNumber(number);

//instanceof

const logValue = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
};
const date = new Date();
const strValue = "Tuan";
logValue(string);

// "in" operator

interface Square {
  kind: "square";
  size: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

const area = (shape: Shape): number => {
  if ("size" in shape) {
    return shape.size * shape.size;
  } else {
    return Math.PI * shape.radius * 2;
  }
};
const square: Square = {
  kind: "square",
  size: 5,
};
const circle: Circle = {
  kind: "circle",
  radius: 5,
};
console.log(area(circle));
