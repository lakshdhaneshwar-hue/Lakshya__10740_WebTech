document.getElementById("title").innerText = "Greeting";

function run() {
  let h = Number(input1.value);
  let msg = h < 12 ? "Good Morning" : h < 18 ? "Good Afternoon" : "Good Evening";
  output.innerText = msg;
}