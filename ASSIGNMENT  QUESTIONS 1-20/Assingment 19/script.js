document.getElementById("title").innerText = "Armstrong Number";

function run() {
  let num = Number(input1.value);
  let temp = num, sum = 0;

  while (temp > 0) {
    let d = temp % 10;
    sum += d ** 3;
    temp = Math.floor(temp / 10);
  }

  output.innerText = sum === num ? "Armstrong Number" : "Not Armstrong";
}