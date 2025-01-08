export function addValidation(
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

export function isValidCreditCardNumber(value: string): boolean {
  const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterCard = /^5[1-5][0-9]{14}$/;
  return visa.test(value) || masterCard.test(value);
}

export function highlightCardType(
  value: string,
  img1: HTMLImageElement,
  img2: HTMLImageElement
) {
  const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterCard = /^5[1-5][0-9]{14}$/;
  if (visa.test(value)) {
    img2.classList.add("highlight");
    img1.classList.add("grayed-out");
    img1.classList.remove("highlight");
  } else if (masterCard.test(value)) {
    img1.classList.add("highlight");
    img2.classList.add("grayed-out");
    img2.classList.remove("highlight");
  } else {
    img1.classList.remove("highlight", "grayed-out");
    img2.classList.remove("highlight", "grayed-out");
  }
}
