//select elements

const input = document.getElementById("headLineInput");
const button = document.getElementById("updateButton"); // lowercase "u"
const headLine = document.getElementById("cta");

//update cta text when button is clicked 
button.addEventListener("click", () => {
   const newHeadLine = input.value.trim(); // use .value
   if (newHeadLine !== "") {
       headLine.textContent = newHeadLine;
       input.value = ""; // Clear the input field after updating
   }
});