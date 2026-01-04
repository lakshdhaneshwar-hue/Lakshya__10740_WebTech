document.getElementById("title").innerText = "Array Iteration";

function run() {
  let arr = ["Apple", "Banana", "Mango"];
  let result = "";

  for (let item of arr) {
    result += item + " ";
  }
  output.innerText = result;
}