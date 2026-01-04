document.getElementById("title").innerText = "Number Type";

function run() {
  let n = Number(input1.value);
  let result = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
  output.innerText = result;
}