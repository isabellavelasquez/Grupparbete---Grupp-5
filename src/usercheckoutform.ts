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
  validateInput: (value: string) => boolean
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
    } else if (!validateInput(input.value)) {
      input.classList.add("invalid");
      customValidityMessage.textContent = errorMessage;
      customValidityMessage.style.display = "block";
    } else {
      input.classList.remove("invalid");
      customValidityMessage.style.display = "none";
    }
  });
}

function isValidCreditCardNumber(value: string): boolean {
  const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterCard = /^5[1-5][0-9]{14}$/;
  return visa.test(value) || masterCard.test(value);
}

function highlightCardType(
  value: string,
  img1: HTMLImageElement,
  img2: HTMLImageElement
) {
  const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterCard = /^5[1-5][0-9]{14}$/;
  if (visa.test(value)) {
    img1.classList.add("highlight");
    img2.classList.remove("highlight");
  } else if (masterCard.test(value)) {
    img2.classList.add("highlight");
    img1.classList.remove("highlight");
  } else {
    img1.classList.remove("highlight");
    img2.classList.remove("highlight");
  }
}

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
