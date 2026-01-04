document.getElementById("title").innerText = "Ticket Price";

function run() {
  let age = Number(input1.value);
  let price =
    age < 12 ? 5 :
    age < 18 ? 10 :
    age < 60 ? 20 : 15;

  output.innerText = "Ticket Price: " + price;
}