document.getElementById("title").innerText = "Pyramid Pattern";

function run() {
  let rows = Number(input1.value);
  let result = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      result += "* ";
    }
    result += "\n";
  }
  output.innerText = result;
}