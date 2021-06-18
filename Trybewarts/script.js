const check = document.getElementById("agreement");
const submit = document.getElementById("submit-btn");

const counter = document.getElementById("counter");
const textarea = document.getElementById("textarea");

const login = document.getElementById("login");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");

const form = document.getElementById("evaluation-form");

function checkTerms() {
  submit.disabled = !check.checked;
}

function counterEvent() {
  counter.innerText = 500 - textarea.value.length;
}

function submitLogin() {
  if (
    login.value.toLowerCase() === "tryber@betrybe.com" ||
    password.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}

function deleteForms() {
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
}

function createParagraphs(paragraphs) {
  paragraphs.appendChild(document.createElement("p"));
  paragraphs.appendChild(document.createElement("p"));
  paragraphs.appendChild(document.createElement("p"));
  paragraphs.appendChild(document.createElement("p"));
  paragraphs.appendChild(document.createElement("p"));
  paragraphs.appendChild(document.createElement("p"));
  paragraphs.appendChild(document.createElement("p"));
}

function appendFormsItens(formsItems) {
  document.getElementsByTagName(
    "p"
  )[0].innerText = `Nome: ${formsItems[0]} ${formsItems[1]}`;
  document.getElementsByTagName("p")[1].innerText = `Email: ${formsItems[2]}`;
  document.getElementsByTagName("p")[2].innerText = `Casa: ${formsItems[3]}`;
  document.getElementsByTagName("p")[3].innerText = `Família: ${formsItems[4]}`;
  document.getElementsByTagName(
    "p"
  )[4].innerText = `Matérias: ${formsItems[5]}`;
  document.getElementsByTagName(
    "p"
  )[5].innerText = `Avaliação: ${formsItems[6]}`;
  document.getElementsByTagName(
    "p"
  )[6].innerText = `Observações: ${formsItems[7]}`;
}

function createParagraphsSection(formsItems) {
  const paragraphs = document.createElement("section");
  form.insertBefore(paragraphs, form.firstChild);
  createParagraphs(paragraphs);
  appendFormsItens(formsItems);
}

function makeSubjectsIntoString() {
  const subjects = document.querySelectorAll("input[class=subject]:checked");
  const subjectsAl = [];
  for (let index = 0; index < subjects.length; index += 1) {
    subjectsAl[index] = ` ${subjects[index].value}`;
  }
  return subjectsAl.join();
}

function makeFormsVariables() {
  return [
    document.getElementById("input-name").value,
    document.getElementById("input-lastname").value,
    document.getElementById("input-email").value,
    document.getElementById("house").value,
    document.querySelector("input[name=family]:checked").value,
    makeSubjectsIntoString(),
    document.querySelector('input[name="rate"]:checked').value,
    document.getElementById("textarea").value,
  ];
}
function submitForms(event) {
  event.preventDefault();
  const formsItems = makeFormsVariables();
  deleteForms();
  createParagraphsSection(formsItems);
}

loginButton.addEventListener("click", submitLogin);

textarea.addEventListener("keyup", counterEvent);

check.addEventListener("change", checkTerms);

submit.addEventListener("click", submitForms);

window.onload = checkTerms;
