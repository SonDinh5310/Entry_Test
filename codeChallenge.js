const inputFieldElement = document.getElementById("input-field"),
  btnSubmit = document.getElementById("submit-btn");

function validateInput(start, end, value) {
  if (value < start || value > end) {
    return -1;
  } else {
    return 1;
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let result = randomNumber(1, 10);
let count = 0;
console.log(result);
btnSubmit.addEventListener("click", () => {
  console.log(result);
  let input = parseInt(inputFieldElement.value);
  if (validateInput(1, 10, input) === -1) {
    alert("Ban da nhap sai!!! Hay nhap lai");
    inputFieldElement.value = "";
    return;
  } else {
    if (input === result) {
      alert(`Ban du da doan dung !!! ket qua la: ${result}`);
      location.reload();
    } else {
      count++;
      if (count === 3) {
        alert(`Ban da du doan sai !!! ket qua la: ${result}`);
        location.reload();
      }
      if (count < 3) {
        alert("Ban da doan sai!! Hay doan lai.");
      }
      inputFieldElement.value = "";
    }
  }
});
