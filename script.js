const firstName = "Erica";
let age = 33;
const birthday = "July 19";
let pineapplePizza = false;
let lifeEvents = [
  "I live in Ypsilanti, Michigan",
  "I graduated from Eastern Michigan with a biochem degree",
  "I like reading",
  "I have a cat and a dog",
];
if (pineapplePizza === true) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}
for (i = 0; i <= 3; i++) {
  console.log(lifeEvents);
}
let randomNumber = Math.floor(Math.random() * 10);
for (randomNumber === 5) {
    if (randomNumber !==5) {
        console.log(`${randomNumber} !==5`);
    } else {
        console.log(5===5);
    }
    break;
}