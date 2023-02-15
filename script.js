const mainDisplay = document.querySelector("#main");
const form = document.querySelector(".form-container");
const userSelection = document.querySelector("#selected-text");
const thankYouDisplay = document.querySelector("#thankyou");
const modal = document.querySelector(".modal")
const modalButton = document.querySelector(".modal-button")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = form.rating.value;
  if (!rating) {
    modal.classList.remove("hidden")
    return;
  }
  userSelection.textContent = `You selected ${rating} out of 5`;
  mainDisplay.classList.remove("visible");
  thankYouDisplay.classList.add("thx-visible");
});

modalButton.addEventListener("click", function() {
    modal.classList.add("hidden")
})
