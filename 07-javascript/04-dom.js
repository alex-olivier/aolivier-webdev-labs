// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const setupDomExercise = (doc = document) => {
  const clickInput = doc.querySelector("#userInput1");
  const copyButton = doc.querySelector("#copy");
  const clickOutput = doc.querySelector(".output");

  // add an event listener on the target element

  // callback function to handle event
  if (clickInput && copyButton && clickOutput) {
    copyButton.addEventListener("click", () => {
      clickOutput.textContent = clickInput.value;
    });
  }

  // Exercise #2:
  // when the user enters input text, copy the user input to the output area

  // fetch JavaScript objects representing specific elements in the DOM
  const inputEventInput = doc.querySelector("#userInput2");
  const inputEventSection = doc.querySelector("#inputEventExample");
  let inputEventOutput = inputEventSection
    ? inputEventSection.querySelector(".output")
    : null;

  if (inputEventSection && !inputEventOutput) {
    inputEventOutput = doc.createElement("div");
    inputEventOutput.className = "output";
    inputEventSection.append(inputEventOutput);
  }

  // add an event listener on the target element

  // callback function to handle event
  if (inputEventInput && inputEventOutput) {
    inputEventInput.addEventListener("input", () => {
      inputEventOutput.textContent = inputEventInput.value;
    });
  }

  return {
    clickInput,
    copyButton,
    clickOutput,
    inputEventInput,
    inputEventOutput,
  };
};

if (typeof document !== "undefined") {
  setupDomExercise(document);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { setupDomExercise };
}
