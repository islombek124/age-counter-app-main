// Inputs
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
// Inners
var dayInner = document.querySelector(".day");
var monthInner = document.querySelector(".month");
var yearInner = document.querySelector(".year");
// Submit button
var btn = document.querySelector(".btn");
// Add click "Submit button"
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleSubmit);
// Function for "Submit button"
function handleSubmit() {
    if (day.value && month.value && year.value) {
        // Now
        var today = new Date();
        // Birthdate
        var birthdate = new Date(year.value, month.value - 1, day.value);
        // Results
        var result = {
            year: today.getFullYear() - birthdate.getFullYear(),
            month: Math.abs(today.getMonth() - birthdate.getMonth()),
            day: Math.abs(birthdate.getDate() - today.getDate())
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
    }
    else {
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
