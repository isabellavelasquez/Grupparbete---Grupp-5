import { createUserCheckoutForm } from "./HTMLHelpers/userCheckoutFormHelper";

document
  .getElementById("form-container")
  ?.appendChild(createUserCheckoutForm());

const userForm = document.getElementById("user-form") as HTMLFormElement;
userForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});

const emailInput = userForm?.elements.namedItem("email") as HTMLInputElement;
if (emailInput) {
  const customEmailValidity = document.createElement("p");
  customEmailValidity.id = "custom-email-validity-error";
  customEmailValidity.style.display = "none";
  emailInput.addEventListener("input", () => {
    emailInput.insertAdjacentElement("afterend", customEmailValidity);
    if (!emailInput.value.includes("@")) {
      emailInput.classList.add("invalid");
      customEmailValidity.innerHTML = "Missing '@'";
      customEmailValidity.style.display = "block";
    } else {
      emailInput.classList.remove("invalid");
      customEmailValidity.style.display = "none";
    }
  });
}
