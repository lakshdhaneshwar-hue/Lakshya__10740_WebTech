document.getElementById("title").innerText = "Grade Calculator";

function run() {
  let m = Number(input1.value);
  let grade =
    m >= 90 ? "A" :
    m >= 75 ? "B" :
    m >= 60 ? "C" :
    m >= 40 ? "D" : "F";

  output.innerText = "Grade: " + grade;
}