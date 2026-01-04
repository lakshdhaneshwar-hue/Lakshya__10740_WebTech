document.getElementById("title").innerText = "Print 1 to 10";

function run() {
  let text = "";
  for (let i = 1; i <= 10; i++) {
    text += i + " ";
  }
  output.innerText = text;
}