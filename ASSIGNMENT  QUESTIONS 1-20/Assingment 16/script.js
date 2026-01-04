document.getElementById("title").innerText = "Sum 1 to 100";

function run() {
  let sum = 0, i = 1;
  while (i <= 100) {
    sum += i;
    i++;
  }
  output.innerText = "Sum = " + sum;
}