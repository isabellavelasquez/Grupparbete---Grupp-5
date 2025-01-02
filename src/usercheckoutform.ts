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
    if (input.value === "") {
      input.classList.remove("invalid");
      customValidityMessage.style.display = "none";
    } else if (!validationFn(input.value)) {
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

const formCreditCard = document.getElementById(
  "credit-card-form"
) as HTMLFormElement;

const ccNumberInput = formCreditCard?.elements.namedItem(
  "cc-number"
) as HTMLInputElement;
if (ccNumberInput) {
  addValidation(ccNumberInput, "Must 16 numbers", (value) => {
    return /^\d{16}$/.test(value);
  });
}

const ccCvvInput = formCreditCard?.elements.namedItem(
  "cc-cvv"
) as HTMLInputElement;
if (ccCvvInput) {
  addValidation(ccCvvInput, "Must 3 numbers", (value) => {
    return /^\d{3}$/.test(value);
  });
}
