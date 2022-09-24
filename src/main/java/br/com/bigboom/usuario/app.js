const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Itelefone = document.querySelector(".email");
const Iemail = document.querySelector(".telefone");
const Iid = document.querySelector(".id");

function cadastrar() {
  fetch("https://p1webservices.herokuapp.com/usuario", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      id: Iid.value,
      nome: Inome.value,
      cpf: Icpf.value,
      telefone: Itelefone.value,
      email: Iemail.value,
    }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
}

function limpar() {
    Iid.value = "",
    Inome.value = "",
    Icpf.value = "",
    Itelefone.value = "",
    Iemail.value = "";
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  cadastrar();
  limpar()
});
