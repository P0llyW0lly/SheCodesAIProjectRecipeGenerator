function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ""
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientInput = document.querySelector("#ingredient");
  let apiKey = "478d0990d462befaftab553fodf9bd43";
  let prompt = `generate a simple reciple including ${ingredientInput.value} in basic HTML and seperate lines with <br />. Do not say in basic HTML in the response`
  let context = "you are a cuisine loving AI assistant who can suggest short, quick recipes";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
