document.getElementById("title").innerText = "Factorial";

function run() {
  let n = Number(input1.value);
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  output.innerText = "Factorial = " + fact;
}