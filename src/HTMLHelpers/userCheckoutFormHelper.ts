export function createUserCheckoutForm(): HTMLElement {
  const section = document.createElement("section");
  section.id = "user-checkout-form";

  //user field
  const userField = document.createElement("article");
  userField.id = "user-field";
  const formUser = document.createElement("form");
  formUser.id = "user-form";

  //billing field
  const billingField = document.createElement("article");
  billingField.id = "billing-field";
  const formBilling = document.createElement("form");
  formBilling.id = "billing-form";

  // Name input
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "First Name";

  // Last name input
  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.name = "lastname";
  lastNameInput.placeholder = "Last Name";

  //Email input
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Email";

  // Billing address input
  const billingAddressInput = document.createElement("input");
  billingAddressInput.type = "text";
  billingAddressInput.name = "billing-address";
  billingAddressInput.placeholder = "Billing Address";

  // Billing address line 2 input
  const billingAddressLine2Input = document.createElement("input");
  billingAddressLine2Input.type = "text";
  billingAddressLine2Input.name = "billing-address-line-2";
  billingAddressLine2Input.placeholder = "Billing Address Line 2";

  // Country input
  const countryInput = document.createElement("input");
  countryInput.type = "text";
  countryInput.name = "country";
  countryInput.placeholder = "Country";

  // City input
  const cityInput = document.createElement("input");
  cityInput.type = "text";
  cityInput.name = "city";
  cityInput.placeholder = "City";

  // Post address input
  const postAddressInput = document.createElement("input");
  postAddressInput.type = "text";
  postAddressInput.name = "post-address";
  postAddressInput.placeholder = "Post Address";

  // Credit card details article
  const creditCardDetails = document.createElement("article");
  creditCardDetails.id = "credit-card-details";
  const formCreditCard = document.createElement("form");
  formCreditCard.id = "credit-card-form";

  // First name input
  const ccFirstNameInput = document.createElement("input");
  ccFirstNameInput.type = "text";
  ccFirstNameInput.name = "cc-firstname";
  ccFirstNameInput.placeholder = "First Name";

  // Last name input
  const ccLastNameInput = document.createElement("input");
  ccLastNameInput.type = "text";
  ccLastNameInput.name = "cc-lastname";
  ccLastNameInput.placeholder = "Last Name";

  // Credit card number input
  const ccNumberInput = document.createElement("input");
  ccNumberInput.type = "text";
  ccNumberInput.name = "cc-number";
  ccNumberInput.placeholder = "Credit Card Number";

  // Expiration date input
  const ccExpirationDateInput = document.createElement("input");
  ccExpirationDateInput.type = "text";
  ccExpirationDateInput.name = "cc-expiration-date";
  ccExpirationDateInput.placeholder = "Expiration Date (MM/YY)";

  // div med bilder till EXPIRATION DATE
  const expirationDateImage = document.createElement("div");
  expirationDateImage.id = "cards-images";

  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");

  // Bilderna för att visa vilka kort som accepteras
  img1.src = "/../assets/icons/card_credit_debit_mastercard_icon.png";
  img2.src = "/../assets/icons/card_credit_logo_visa_icon.png";
  img3.src = "/../assets/icons/card_paypal_method_payment_icon.png";

  // Append images to the div
  expirationDateImage.appendChild(img1);
  expirationDateImage.appendChild(img2);
  expirationDateImage.appendChild(img3);

  // CVV code input
  const ccCvvInput = document.createElement("input");
  ccCvvInput.type = "text";
  ccCvvInput.name = "cc-cvv";
  ccCvvInput.placeholder = "CVV Code";

  // Zip code input
  const ccZipCodeInput = document.createElement("input");
  ccZipCodeInput.type = "text";
  ccZipCodeInput.name = "cc-zip-code";
  ccZipCodeInput.placeholder = "Zip Code";

  //end - Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Accept & Pay";

  // Appends
  formUser.appendChild(nameInput);
  formUser.appendChild(lastNameInput);
  formUser.appendChild(emailInput);
  formBilling.appendChild(billingAddressInput);
  formBilling.appendChild(billingAddressLine2Input);
  formBilling.appendChild(countryInput);
  formBilling.appendChild(cityInput);
  formBilling.appendChild(postAddressInput);
  creditCardDetails.appendChild(ccFirstNameInput);
  creditCardDetails.appendChild(ccLastNameInput);
  creditCardDetails.appendChild(ccNumberInput);
  creditCardDetails.appendChild(ccExpirationDateInput);
  creditCardDetails.appendChild(expirationDateImage);
  creditCardDetails.appendChild(ccCvvInput);
  creditCardDetails.appendChild(ccZipCodeInput);
  // Append the forms to the sections
  userField.appendChild(formUser);
  billingField.appendChild(formBilling);
  creditCardDetails.appendChild(formCreditCard);

  section.appendChild(userField);
  section.appendChild(billingField);
  section.appendChild(creditCardDetails);
  section.appendChild(submitButton);

  return section;
}
