type result = {
  year: number;
  month: number;
  day: number;
};

// Inputs
const day = document.getElementById("day") as any | HTMLInputElement;
const month = document.getElementById("month") as any | HTMLInputElement;
const year = document.getElementById("year") as any | HTMLInputElement;

// Inners
const dayInner = document.querySelector(".day") as HTMLSpanElement;
const monthInner = document.querySelector(".month") as HTMLSpanElement;
const yearInner = document.querySelector(".year") as HTMLSpanElement;

// Submit button
const btn = document.querySelector(".btn");

// Add click "Submit button"
btn?.addEventListener("click", handleSubmit);

// Function for "Submit button"
function handleSubmit(): void {
  if (day.value && month.value && year.value) {
    // Now
    const today = new Date();
    // Birthdate
    const birthdate = new Date(year.value, month.value - 1, day.value);

    // Results
    const result: result = {
      year: today.getFullYear() - birthdate.getFullYear(),
      month: Math.abs(today.getMonth() - birthdate.getMonth()),
      day: Math.abs(birthdate.getDate() - today.getDate()),
    };

    // Check the errors
    day.value === "" || day.value >= 32
      ? day.parentElement.classList.add("invalid")
      : day.parentElement.classList.remove("invalid");
    month.value === "" || month.value >= 13
      ? month.parentElement.classList.add("invalid")
      : month.parentElement.classList.remove("invalid");
    year.value === "" || year.value > new Date().getFullYear()
      ? year.parentElement.classList.add("invalid")
      : year.parentElement.classList.remove("invalid");

    // Inner results
    yearInner.innerText = result.year.toString();
    monthInner.innerText = result.month.toString();
    dayInner.innerText = result.day.toString();
  } else {
    // Check the errors
    day.value === "" || day.value >= 32
      ? day.parentElement.classList.add("invalid")
      : day.parentElement.classList.remove("invalid");
    month.value === "" || month.value >= 13
      ? month.parentElement.classList.add("invalid")
      : month.parentElement.classList.remove("invalid");
    year.value === "" || year.value > new Date().getFullYear()
      ? year.parentElement.classList.add("invalid")
      : year.parentElement.classList.remove("invalid");

    yearInner.innerText = "--";
    monthInner.innerText = "--";
    dayInner.innerText = "--";
  }
}
