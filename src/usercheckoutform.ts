import { createUserCheckoutForm } from "./HTMLHelpers/userCheckoutFormHelper";

document
  .getElementById("form-container")
  ?.appendChild(createUserCheckoutForm());
