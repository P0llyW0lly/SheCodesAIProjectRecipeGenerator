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
  let prompt = `generate a simple reciple including ${ingredientInput.value} in HTML format. When writing the recipe separate the ingredients with an HTML <br />, separate each instruction or step with a <br />. Do not say in basic HTML in the response`
  let context = "you are a cuisine loving AI assistant who can suggest short, quick recipes";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="cooking">⏳ Cooking up a recipe with ${ingredientInput.value}</div >`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
