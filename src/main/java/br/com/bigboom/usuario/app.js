const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Itelefone = document.querySelector(".telefone");
const Iemail = document.querySelector(".email");
const Iid = document.querySelector(".id");
const btnPost = document.querySelector(".btn-post");
const btnDelete = document.querySelector(".btn-delete");
const btnPut = document.querySelector(".btn-put");
const url = `https://p1webservices.herokuapp.com/usuario`;

// const url = `https://p1webservices.herokuapp.com/usuario/`;

//CADASTRAR USUARIOS ============================================================
function cadastrar() {
<<<<<<< HEAD
  fetch(`https://p1webservices.herokuapp.com/usuario/`, {
=======
  fetch(url, {
>>>>>>> 831287dc9c46e89f9a2aa0edb06af78dbaae457e
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
      return res.json();
    })
    .catch(function (res) {
      console.log(res);
    });
}

// ATUALIZAR USUARIOS ===============================================================
function atualizar() {
  fetch(`https://p1webservices.herokuapp.com/usuario/${Iid.value}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
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

// DELETAR USUARIOS ===============================================================
function deletar() {
  fetch(`https://p1webservices.herokuapp.com/usuario/${Iid.value}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
}
<<<<<<< HEAD
=======

//COLETAR DADOS DA URL PARA EXIBIR NA TABELA
fetch(url)
  .then((response) => {
    response.json().then((url) => {
      setTableData(url);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const setTableData = (url) => {
  let list = url.map(element => {
    let tr = document.querySelector("#tr-register");
    return tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nome}</td>
        <td>${element.cpf}</td>
        <td>${element.telefone}</td>
        <td>${element.email}</td>`;
  })



};

>>>>>>> 831287dc9c46e89f9a2aa0edb06af78dbaae457e

//COLETAR DADOS DA URL PARA EXIBIR NA TABELA
fetch(`https://p1webservices.herokuapp.com/usuario/`)
  .then((response) => {
    response.json().then((url) => {
      setTableData(url);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const setTableData = (url) => {
  let tabela = document.getElementById("tabela");
  url.map((element) => {
    let linha = criaLinha(element);
    tabela.appendChild(linha);
  });
};

//FUNÇÃO PARA CRIAR LINHAS NA TABELA HTML =================================
function criaLinha(url) {
  //linhas que serão criadas =========
  linha = document.createElement("tr");
  id = document.createElement("td");
  nome = document.createElement("td");
  cpf = document.createElement("td");
  telefone = document.createElement("td");
  email = document.createElement("td")
  //linhas

  id.innerHTML = url.id;
  nome.innerHTML = url.nome;
  cpf.innerHTML = url.cpf;
  telefone.innerHTML = url.telefone;
  email.innerHTML = url.email;

  linha.appendChild(id);
  linha.appendChild(nome);
  linha.appendChild(cpf);
  linha.appendChild(telefone);
  linha.appendChild(email)
  return linha;
}

// FUNÇÃO PARA LIMPAR CAMPOS APÓS CLIQUE DE UM BOTÃO ======================
function limpar() {
  (Iid.value = ""),
    (Inome.value = ""),
    (Icpf.value = ""),
    (Itelefone.value = ""),
    (Iemail.value = "")
}

//BOTÃO POST OK =======================================================
btnPost.addEventListener("click", function (event) {
  event.preventDefault();
  cadastrar();
  limpar();
  self.location.reload();
});
//BOTÃO DELETE POR ID OK ===============================================
btnDelete.addEventListener("click", function (event) {
  event.preventDefault();
  deletar();
  limpar();

});
//BOTÃO PUT POR ID OK ==================================================
btnPut.addEventListener("click", function (event) {
  event.preventDefault();
  atualizar();
  limpar();

});
