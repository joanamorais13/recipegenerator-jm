function displayRecipe(response){
new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "16fb2o2e0345actc8844b4d07e81636f";
  let context = "Your are a recipe master and love to cook quick, easy and simple recipes. Your mission is to generate short recipes in basic HTML. The list of ingredients cannot be longer than 5. The list of instructions cannot be longer than 5. The instructions must be simnple like bullet list. Make sure to follow the user instructions"; 
  let prompt = `user instructions: generate a recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recipe")
  console.log (`prompt: &{prompt}`)
  console.log (`context: &{context}`)

axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#form");
recipeFormElement.addEventListener("submit", generateRecipe);

