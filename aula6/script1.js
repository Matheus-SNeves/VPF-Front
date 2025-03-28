const funcionarios = JSON.parse(window.localStorage.getItem('funcionarios'));
if (funcionarios === null) {
    window.localStorage.setItem('funcionarios', JSON.stringify([]));
    funcionarios = [];
}

const tabela = document.getElementById('tabela');
funcionarios.forEach(e => {
    console.table(e);
    tabela.innerHTML += `
    <tr>
            <td>${e.id}</td>
            <td>${e.nome}</td>
            <td>${e.cpf}</td>
            <td>${e.email}</td>
            <td>${e.telefone}</td>
            <td>${e.logradouro}</td>
            <td><button onclick="excluir(${e.id})" style="background: red;">Excluir</button> <button onclick="editar(${e.id})">Editar</button></td>
        </tr>`

});

function excluir(id) {
    if (confirm('Realmente quer excluir o funcionario ' + id + ' ?')) {
        const indice = funcionarios.findIndex(funcionario => funcionario.id === id);
        funcionarios.splice(indice, 1);
        window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
        window.location.reload();
    }
}

const registrar = document.querySelector('#cadastro form');
registrar.addEventListener('submit', e => {
    e.preventDefault();
    const funcionario = {
        id: funcionarios.length + 1,
        nome: registrar.nome.value,
        cpf: registrar.cpf.value,
        email: registrar.email.value,
        telefone: registrar.telefone.value,
        logradouro: registrar.logradouro.value
    };
    funcionarios.push(funcionario);
    window.localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    window.location.reload();
});
