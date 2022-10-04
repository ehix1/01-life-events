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

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

let hours = 50;
let wage = 10;
let paycheck = 40 * wage;
if (hours > 40) {
  let overtimeHours = hours - 40;
  let overtimePay = overtimeHours * wage * 1.5;
  paycheck += overtimePay;
}
console.log(paycheck);

weeks = Math.ceil(1000000 / paycheck);
console.log(`It would take ${weeks} to earn 1 million bucks!.
    `);
