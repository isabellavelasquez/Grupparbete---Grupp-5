import { createUserCheckoutForm } from "./HTMLHelpers/userCheckoutFormHelper";

document
  .getElementById("form-container")
  ?.appendChild(createUserCheckoutForm());

const userForm = document.getElementById("user-form") as HTMLFormElement;
userForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});
function addValidation(
  input: HTMLInputElement,
  errorMessage: string,
  validationFn: (value: string) => boolean
) {
  const customValidityMessage = document.createElement("p");
  customValidityMessage.id = `${input.name}-validity-error`;
  customValidityMessage.style.display = "none";
  customValidityMessage.style.color = "red";
  input.insertAdjacentElement("afterend", customValidityMessage);

  input.addEventListener("input", () => {
    if (!validationFn(input.value)) {
      input.classList.add("invalid");
      customValidityMessage.textContent = errorMessage;
      customValidityMessage.style.display = "block";
    } else {
      input.classList.remove("invalid");
      customValidityMessage.style.display = "none";
    }
  });
}

const emailInput = userForm?.elements.namedItem("email") as HTMLInputElement;
if (emailInput) {
  addValidation(emailInput, "Missing '@'", (value) => value.includes("@"));
}
