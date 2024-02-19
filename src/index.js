function displayDestination(response) {
  console.log("destination found");

  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generateDestination(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "445od433c4e95b2d074a20e8fb1cta30";
  let prompt = `Generate one perfect travel destination considering these factors ${instructionsInput.value}`;
  let context =
    "Dear AI, your a well-traveled and experienced globetrotter and luxury holiday enthusiast. You are very good in picking perfect destinations for all occasions. Please only provide a single destination in basic <HTML> structure with the destination in a <strong> element. Could you also provide a short about 4 line explication for your choice. Please always provide the <strong> destination element first then with a <br />the explanation.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating destination");
  console.log(`Prompt: ${prompt}`);
  axios.get(apiUrl).then(displayDestination);
}

let destinationFormElement = document.querySelector(
  "#destination-generator-form"
);
destinationFormElement.addEventListener("submit", generateDestination);
