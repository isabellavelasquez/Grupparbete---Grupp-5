import { createUserCheckoutForm } from "./usercheckoutformhelper.ts";

document
  .getElementById("form-container")
  ?.appendChild(createUserCheckoutForm());
