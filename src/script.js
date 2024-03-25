function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Generating amazing recipes",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#form");
recipeFormElement.addEventListener("submit", generateRecipe);