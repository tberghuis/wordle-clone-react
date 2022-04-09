const eventHandler = (event) => {
  console.log("event", event);
  // a = 65
  // z = 90
  // TODO how to do this is keyCode is deprecated....
  // is there a lib to convert key to keyCode?
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log("letter", event.key.toUpperCase());
    addLetter(event.key.toUpperCase());
    return;
  }

  if (event.code === "Backspace") {
    removeLetter();
    return;
  }

  if (event.code === "Enter") {
    onKeyUpEnter();
    return;
  }
};

document.addEventListener("keyup", eventHandler);

// put in file actions.js
function addLetter(letter) {
  console.log("addLetter", letter);
}
