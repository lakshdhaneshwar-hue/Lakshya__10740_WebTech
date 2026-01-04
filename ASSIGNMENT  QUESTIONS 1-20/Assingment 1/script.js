// 1.Even or Odd: Write a program that takes a number as input and prints whether it is even or odd.


document.getElementById("title").innerText = "Even or Odd";

function run() {
  let num = Number(document.getElementById("input1").value);
  let result = num % 2 === 0 ? "Even" : "Odd";
  document.getElementById("output").innerText = result;
}