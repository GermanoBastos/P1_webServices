const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Itelefone = document.querySelector(".email");
const Iemail = document.querySelector(".telefone");
const Iid = document.querySelector(".id");
const btnPost = document.querySelector(".btn-post");
const btnDelete = document.querySelector(".btn-delete");
const btnPut = document.querySelector(".btn-put");
const url = `https://p1webservices.herokuapp.com/usuario`;

//CADASTRAR USUARIOS ============================================================
function cadastrar() {
  fetch(url, {
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


// FUNÇÃO PARA LIMPAR CAMPOS APÓS CLIQUE DE UM BOTÃO
function limpar() {
  (Iid.value = ""),
    (Inome.value = ""),
    (Icpf.value = ""),
    (Itelefone.value = ""),
    (Iemail.value = "");
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
