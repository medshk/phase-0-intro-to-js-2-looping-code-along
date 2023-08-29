// Code your solutions in this file
const writeCards = (arr, msg) =>
  arr.map((person) => `Thank you, ${person}, for the wonderful ${msg} gift!`);

const countDown = (number) => {
  let count = number;
  while (count >= 0) {
    console.log(count);
    count--;
  }
};
