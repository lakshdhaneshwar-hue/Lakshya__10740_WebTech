document.getElementById("title").innerText = "Leap Year Check";

function run() {
  let y = Number(input1.value);
  let result = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  output.innerText = result ? "Leap Year" : "Not Leap Year";
}