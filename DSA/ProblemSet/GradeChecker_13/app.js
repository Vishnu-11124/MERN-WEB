let formValue = document.querySelector("#form");
let result = document.querySelector("#result");

let grade = (mark) => {
  if (isNaN(mark) || mark < 0 || mark > 100) {
    result.textContent = "Please enter a valid score between 0 and 100.";
    result.style.background = "linear-gradient(135deg, #ff6b6b, #ee5a6f)";
    result.style.color = "white";
    return;
  }

  switch (true) {
    case mark >= 90:
      result.textContent = "Grade: A";
      result.style.background = "linear-gradient(135deg, #51cf66, #37b24d)";
      result.style.color = "white";
      break;
    case mark >= 80:
      result.textContent = "Grade: B";
      result.style.background = "linear-gradient(135deg, #4dabf7, #339af0)";
      result.style.color = "white";
      break;
    case mark >= 70:
      result.textContent = "Grade: C";
      result.style.background = "linear-gradient(135deg, #ffd43b, #fab005)";
      result.style.color = "#333";
      break;
    case mark >= 60:
      result.textContent = "Grade: D";
      result.style.background = "linear-gradient(135deg, #ffa94d, #fd7e14)";
      result.style.color = "white";
      break;
    default:
      result.textContent = "Grade: F";
      result.style.background = "linear-gradient(135deg, #ff6b6b, #fa5252)";
      result.style.color = "white";
  }
};

formValue.addEventListener("submit", (e) => {
  e.preventDefault();
  let mark = parseInt(document.querySelector("#mark").value.trim());
  grade(mark);
  document.querySelector("#mark").value = "";
});
