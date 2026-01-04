document.getElementById("title").innerText = "Discount Calculator";

function run() {
  let price = Number(input1.value);
  let discount = price >= 100 ? 20 : price >= 50 ? 10 : 0;
  output.innerText = "Discount: " + discount;
}