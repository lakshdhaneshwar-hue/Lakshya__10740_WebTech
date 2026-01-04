document.getElementById("title").innerText = "Number Guessing Game";

function run() {
  let secret = 7; // fixed secret number
  let guess = Number(input1.value);

  let result =
    guess > secret ? "Too High" :
    guess < secret ? "Too Low" :
    "Correct Guess";

  output.innerText = result;
}