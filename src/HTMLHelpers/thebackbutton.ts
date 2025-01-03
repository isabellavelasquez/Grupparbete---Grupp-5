export function theBackButton( // Funktionen theBackButton tar emot två argument
  imageSrc: string, // imageSrc är en sträng
  altText: string // altText är en sträng
): HTMLDivElement {
  // HTMLDivElement är return-typen
  const div = document.createElement("div");
  div.classList.add("backbutton");
  div.id = "backbutton";
  const anchor = document.createElement("a");
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = altText;

  anchor.appendChild(img);
  div.appendChild(anchor);
  document.getElementById("header")?.appendChild(div);

  return div;
}
//Fri text funderingar: Undra om detta är bästa sättet att bygga en backbutton på?
// frågan är om man ska lägga till ett till argument på att taggen a href ska gå till en viss sida -
// eller om man ska lägga till en eventlistener på de sidorna till denna funktion som gör detta?

// const theBackbutton = document.createElement("img");
// cartIcon.src = "../assets/icons/cart.png";
// cartIcon.alt = "icon av shoppingvagn";
// cartIcon.classList.add("cartButtonIcon");
// document.getElementById("header")?.appendChild(cartIcon);
