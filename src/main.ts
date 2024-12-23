import "./style.css";

// header
const h1 = document.getElementById("webShopName");
if (h1) {
  h1.innerHTML = "Our Cool Webshop";
}

document.getElementById("searchBar")?.addEventListener("submit", (e) => {
  e.preventDefault();
});

const navbar = document.getElementById("navbar");
const categoryContainer = document.createElement("ul");
const firstCategory = document.createElement("li");
firstCategory.innerHTML = "Man";
const secondCategory = document.createElement("li");
secondCategory.innerHTML = "Kvinna";
const thirdCategory = document.createElement("li");
thirdCategory.innerHTML = "Barn";

categoryContainer.appendChild(firstCategory);
categoryContainer.appendChild(secondCategory);
categoryContainer.appendChild(thirdCategory);
navbar?.appendChild(categoryContainer);
