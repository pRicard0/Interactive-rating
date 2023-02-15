const mainDisplay = document.querySelector("#main");
const form = document.querySelector(".form-container");
const userSelection = document.querySelector("#selected-text");
const thankYouDisplay = document.querySelector("#thankyou");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = form.rating.value;
  userSelection.textContent = `You selected ${rating} out of 5`;
  mainDisplay.classList.remove("visible");
  thankYouDisplay.classList.add("thx-visible");
});


