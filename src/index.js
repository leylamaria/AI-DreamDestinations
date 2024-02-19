function generateDestination(event) {
  event.preventDefault();

  new Typewriter("#destination", {
    strings: "Brazil, sunny, warm waters and steady winds",
    autoStart: true,
    cursur: null,
    delay: 10,
  });
}

let destinationFormElement = document.querySelector(
  "#destination-generator-form"
);
destinationFormElement.addEventListener("submit", generateDestination);
