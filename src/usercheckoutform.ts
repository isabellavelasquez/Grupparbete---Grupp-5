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

// Append
formUser.appendChild(nameInput);
formUser.appendChild(lastNameInput);
formUser.appendChild(emailInput);
// Append the form to the section
userField.appendChild(formUser);

section.appendChild(userField);
