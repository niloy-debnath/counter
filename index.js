let counterBasic = document.getElementById("counter-nbr");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");
let btnIcrease = document.getElementById("btn-increase");
// console.log(btnDecrease, btnIcrease, btnReset);

btnDecrease.addEventListener("click", function () {
  let counterNumberStr = counterBasic.innerText;
  let countNumber = parseInt(counterNumberStr);
  //   console.log(countNumber);
  countNumber--;
  if (countNumber <= 0) {
    countNumber = 0;
  }
  counterBasic.innerText = countNumber;
});

btnIcrease.addEventListener("click", function () {
  let counterNumberStr = counterBasic.innerText;
  let countNumber = parseInt(counterNumberStr);
  //   console.log(countNumber);
  countNumber++;
  counterBasic.innerText = countNumber;
});

btnReset.addEventListener("click", function () {
  counterBasic.innerText = 0;
});
