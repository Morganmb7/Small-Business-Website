//select elmements

const input = document.getElementById("headLineInput");
const button = document.getElementById("UpdateButton");
const headLine = document.getElementById("cta");

//update cta text when button is clicked 
button.addEventListener("click", () => {
   const newHeadLine = input.ariaValueMax.trim ();
   if (newHeadLine !== "") {
       headLine.textContent = newHeadLine;
       input.value = ""; // Clear the input field after updating
   }

});