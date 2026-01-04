document.getElementById("title").innerText = "Sort Three Numbers";

function run() {
  let a = Number(input1.value);
  let b = Number(input2.value);
  let c = Number(prompt("Enter third number"));

  let arr = [a, b, c];
  arr.sort((x, y) => x - y);

  output.innerText = arr.join(", ");
}