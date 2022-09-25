const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Itelefone = document.querySelector(".email");
const Iemail = document.querySelector(".telefone");
const Iid = document.querySelector(".id");
const btnPost = document.querySelector(".btn-post");
const btnDelete = document.querySelector(".btn-delete");
const btnPut = document.querySelector(".btn-put");

//CADASTRAR USUARIOS ============================================================
function cadastrar() {
  fetch(`https://p1webservices.herokuapp.com/usuario`, {
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
function atualizar() {
  fetch(`https://p1webservices.herokuapp.com/usuario/${Iid.value}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
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


// DLEETAR USUARIOS ===============================================================
  function deletar() {
    fetch(`https://p1webservices.herokuapp.com/usuario/${Iid.value}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      // body: JSON.stringify({
      //   id: Iid.value,
      //   nome: Inome.value,
      //   cpf: Icpf.value,
      //   telefone: Itelefone.value,
      //   email: Iemail.value,
      // }),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
    }

// FUNÇÃO PARA LIMPAR CAMPOS APÓS CLIQUE DE UM BOTÃO
function limpar() {
  (Iid.value = ""),
    (Inome.value = ""),
    (Icpf.value = ""),
    (Itelefone.value = ""),
    (Iemail.value = "");
}

//BOTÃO POST OK ===============================================
btnPost.addEventListener("click", function(event){
  event.preventDefault();
  cadastrar();
  limpar();
});
//BOTÃO DELETE POR ID OK ===============================================
btnDelete.addEventListener("click", function(event){
  event.preventDefault();
  deletar();
  limpar();
});
//BOTÃO PUT POR ID OK ===============================================
btnPut.addEventListener("click", function(event){
  event.preventDefault();
  atualizar();
  limpar();
});
