const dateInput = document.querySelector("#date-input");
const numberInput = document.querySelector("#number-input");
const checkButton = document.querySelector("#btn-check");
const outputDiv = document.querySelector("#output");

// click Event handler
checkButton.addEventListener("click", checkLuckyNumber);

// Click handler function
function checkLuckyNumber() {
  //  capturing input values in variables
  const dateValue = dateInput.value;
  const luckyValue = numberInput.value;

  // calling dateSum function
  const sum = dateSum(dateValue);

  // Validate lucky number
  if (luckyValue >= 0) {
    //   checking if sum === lucky number
    if (sum % luckyValue === 0) {
      outputDiv.innerText = "YOUR BIRTHDAY IS LUCKY";
    } else {
      outputDiv.innerText = "YOUR BIRTHDAY IS NOT LUCKY";
    }
  } else {
    outputDiv.innerText = "Lucky number should be greater than 0";
  }
}

// function to calculate date sum
function dateSum(dateValue) {
  // convert date string to array
  const remove = dateValue.replaceAll("-", "").split("");

  // reduce array to single value
  const sum = remove.reduce((total, current) => {
    const curr = parseInt(current); //convert string to number
    return (total += curr);
  }, 0);
  return sum; // return sum of date
}
