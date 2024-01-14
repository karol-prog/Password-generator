let characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "?",
  "{",
  "}",
  "-",
  "+",
  "=",
  "[",
  "]",
  "|",
  "~",
  "`",
  "@",
];

const passLenght = 12;

/* Dark Theme */
const darkTheme = document.querySelector(".fa-solid"); /* btn */

darkTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  darkTheme.classList.toggle("fa-moon");
  darkTheme.classList.toggle("fa-sun");
});

/* Buttons and span add DOM */
const genPassword = document.getElementById("genpass-btn");
const newPasswordOne = document.querySelector(".pass-one");
const newPasswordTwo = document.querySelector(".pass-two");
const copyPasswordOne = document.querySelector(".copy-one");
const copyPasswordtwo = document.querySelector(".copy-two");

/* Generate random character */
function generateChar() {
  let randomCharIndex = Math.floor(Math.random() * characters.length);
  let randomChar = characters[randomCharIndex];
  return randomChar;
}

/* Generate randomm password and add it to span */
function generatePassword() {
  newPasswordOne.textContent = "";
  newPasswordTwo.textContent = "";

  for (let i = 0; i < 12; i++) {
    newPasswordOne.textContent +=
      generateChar(); /* calling the function randomChar and store it in newPasswordOne */
    newPasswordTwo.textContent += generateChar(); /* Same */
  }
}

genPassword.addEventListener("click", generatePassword);

/* Copy text with copy btn */
copyPasswordOne.addEventListener("click", function () {
  let textArea =
    document.createElement("textarea"); /* create temporary text area */
  textArea.value =
    newPasswordOne.textContent; /* Take a vaue from new gen pass one */

  document.body.appendChild(textArea); /* make text area to html body */

  textArea.select(); /* select the text */

  document.execCommand("copy"); /* copy to clipboard */

  document.body.removeChild(textArea); /* remove text are from html body */
});

copyPasswordtwo.addEventListener("click", function () {
  let textArea = document.createElement("textarea");
  textArea.value = newPasswordTwo.textContent;

  document.body.appendChild(textArea);

  textArea.select();

  document.execCommand("copy");

  document.body.removeChild(textArea);
});
