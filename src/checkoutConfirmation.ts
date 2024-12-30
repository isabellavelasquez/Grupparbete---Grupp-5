const section = document.createElement("section");

const articleText = document.createElement("article");
const paragraph = document.createElement("p");
paragraph.innerHTML =
  "Thank you for shopping with us! We are excited to confirm that we have received your payment for your recent order. Your transaction was successful, and your selected items are being processed for shipment.";
articleText.id = "articleText";
articleText.appendChild(paragraph);

const articleImage = document.createElement("article");
const image = document.createElement("img");
image.src = "check_icon.png";
image.alt = "purchase confirmation image";
articleImage.appendChild(image);

const articleButton = document.createElement("article");
const button = document.createElement("button");
button.textContent = "Return to shopping";
articleButton.appendChild(button);

section.appendChild(articleText);
section.appendChild(articleImage);
section.appendChild(articleButton);

document.body.appendChild(section);

document.getElementById("confirmation-container")?.appendChild(section);

button.addEventListener("click", () => {
  window.location.href = "index.html";
});
