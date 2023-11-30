//Skapa typer som är flexibla och anpassningsbara
// Återanvändbarhet!

// uppgift 1:

const reverseArr = <T>(arr: T[]): T[] => {
  return arr.reverse();
};
const arr = [1, 2, 3, 4, 5];
console.log(reverseArr(arr));
//uppgift 2:

const makePair = <K, V>(key: K, value: V): { key: K; value: V } => {
  return { key, value };
};

const pair1 = makePair("name", "Sandra");
const pair2 = makePair("age", 28);
console.log(pair1);
console.log(pair2);

//uppgift 3:

interface Box<T> {
  item: T;
}

const unbox = <T>(boxItem: Box<T>): T => {
  return boxItem.item;
};

const stringBox: Box<string> = { item: "Hello, TypeScript!" };
console.log(unbox(stringBox));

//uppgift 4:

const numberOrString = <T extends string | number>(x: T) => {
  console.log(x);
};
const number = 10;
const str = "Tuan";
numberOrString(str);
