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
nameInput.placeholder = "Name";
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
// Append
formUser.appendChild(nameInput);
formUser.appendChild(lastNameInput);
formUser.appendChild(emailInput);
// Append the form to the section
userField.appendChild(formUser);

section.appendChild(userField);
