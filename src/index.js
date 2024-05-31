function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Haggis, Neeps and Tatties",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
