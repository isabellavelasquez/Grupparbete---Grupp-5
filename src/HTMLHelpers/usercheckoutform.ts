import { createUserCheckoutForm } from "./userCheckoutFormHelper.ts";
import {
  addValidation,
  isValidCreditCardNumber,
  highlightCardType,
} from "../services.ts/validationService.ts";

document
  .getElementById("form-container")
  ?.appendChild(createUserCheckoutForm());

const userForm = document.getElementById("user-form") as HTMLFormElement;
userForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});

const emailInput = userForm?.elements.namedItem("email") as HTMLInputElement;
if (emailInput) {
  addValidation(emailInput, "Missing '@'", (value) => value.includes("@"));
}

const firstNameInput = userForm?.elements.namedItem("name") as HTMLInputElement;
if (firstNameInput) {
  addValidation(
    firstNameInput,
    "First name is required",
    (value) => value.trim().length > 0
  );
}

const lastNameInput = userForm?.elements.namedItem(
  "lastname"
) as HTMLInputElement;
if (lastNameInput) {
  addValidation(
    lastNameInput,
    "Last name is required",
    (value) => value.trim().length > 0
  );
}

const formCreditCard = document.getElementById(
  "credit-card-form"
) as HTMLFormElement;

const ccFirstNameInput = formCreditCard?.elements.namedItem(
  "cc-firstname"
) as HTMLInputElement;
if (ccFirstNameInput) {
  addValidation(
    ccFirstNameInput,
    "First name is required",
    (value) => value.trim().length > 0
  );
}

const ccLastNameInput = formCreditCard?.elements.namedItem(
  "cc-lastname"
) as HTMLInputElement;
if (ccLastNameInput) {
  addValidation(
    ccLastNameInput,
    "Last name is required",
    (value) => value.trim().length > 0
  );
}

const ccNumberInput = formCreditCard?.elements.namedItem(
  "cc-number"
) as HTMLInputElement;
const expirationDateImage = document.getElementById("cards-images");

if (ccNumberInput && expirationDateImage) {
  const img1 = expirationDateImage.querySelector("img:nth-child(1)");
  const img2 = expirationDateImage.querySelector("img:nth-child(2)");

  if (ccNumberInput) {
    addValidation(ccNumberInput, "Invalid credit card number", (value) => {
      const isValid = isValidCreditCardNumber(value);
      highlightCardType(
        value,
        img1 as HTMLImageElement,
        img2 as HTMLImageElement
      );
      return isValid;
    });
  }
}

const ccCvvInput = formCreditCard?.elements.namedItem(
  "cc-cvv"
) as HTMLInputElement;
if (ccCvvInput) {
  addValidation(ccCvvInput, "Must 3 numbers", (value) => {
    return /^\d{3}$/.test(value);
  });
}
const submitButton = document.querySelector("button[type='submit']");
if (submitButton) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/src/pages/checkoutConfirmation.html";
    // if (userForm?.checkValidity() && formCreditCard?.checkValidity()) {
    //   alert("Order placed successfully");
  });
}
