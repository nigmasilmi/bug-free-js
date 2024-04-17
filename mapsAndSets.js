// creating an empty set
const ids = new Set();

// creating a set form an iterable
const newIds = new Set([11, 344, 55]);
console.log(newIds);
newIds.add("1988");

// there is no method to extract but to confirm it contains
const hasId = newIds.has("344"); // false
const hasNewId = newIds.has(11); // true

for (const entry of newIds.entries()) {
  console.log(entry);
  console.log(entry[0]);
}

for (const value of newIds.values()) {
  console.log(value);
}

if (newIds.has("33")) {
  newIds.delete("33");
} else {
  console.log("nothing to delete");
}

const car1 = { brand: "Volvo", color: "red" };
const car2 = { brand: "Ford", color: "blue" };

const owner1 = "Peter Parker";
const owner2 = "Jane Fonda";

// an object as a key, using its reference
const carsData = new Map([
  [car1, owner1],
  [car2, owner2],
]);

console.log(carsData);

// or

const alterateCarsData = new Map();
alterateCarsData.set(car1, owner1);
alterateCarsData.set(car2, owner2);

// obtaining a value

const owner = alterateCarsData.get(car1); // Peter Parker

for (const entry of carsData.entries()) {
  console.log(entry);
}

for (const key of carsData.keys()) {
  console.log(key);
}

for (const value of carsData.values()) {
  console.log(value);
}

for (const [key, value] of carsData.entries()) {
  console.log(key, value);
}
