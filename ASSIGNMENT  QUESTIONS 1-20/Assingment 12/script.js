document.getElementById("title").innerText = "Sign of Product";

function run() {
  let a = Number(input1.Number);
  let b = Number(input2.Number);
  let c = Number(input3.Number);

  let sign = a * b * c >= 0 ? "+" : "-";
  output.innerText = "The sign is " + sign;
}