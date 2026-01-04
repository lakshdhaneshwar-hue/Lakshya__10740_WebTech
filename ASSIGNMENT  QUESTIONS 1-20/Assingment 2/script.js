document.getElementById("title").innerText = "Largest of Two Numbers";

function run() {
  let a = Number(input1.value);
  let b = Number(input2.value);
  let result = a > b ? a : b;
  output.innerText = "Largest: " + result;
}