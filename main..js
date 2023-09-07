
function cadastrar() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var tr = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdTelefone = document.createElement("td");
    tdNome.textContent = nome;
    tdTelefone.textContent = telefone;
    tr.appendChild(tdNome);
    tr.appendChild(tdTelefone);
    var tbody = document.getElementById("tbody");
    tbody.appendChild(tr);
    document.getElementById("form").reset();
  }
  