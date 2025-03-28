const clientes = JSON.parse(window.localStorage.getItem('clientes'));
if (clientes === null) {
    window.localStorage.setItem('clientes', JSON.stringify([]));
    clientes = [];
}

const tabela = document.getElementById('tabela');
clientes.forEach(e => {
    console.table(e);
    tabela.innerHTML += `
    <tr>
            <td>${e.id}</td>
            <td>${e.nome}</td>
            <td>${e.cpf}</td>
            <td>${e.email}</td>
            <td>${e.logradouro}</td>
            <td><button onclick="excluir(${e.id})" style="background: red;">Excluir</button> <button onclick="editar(${e.id})">Editar</button></td>
        </tr>`

});

function excluir(id) {
    if (confirm('Realmente quer excluir o cliente ' + id + ' ?')) {
        const indice = clientes.findIndex(cliente => cliente.id === id);
        clientes.splice(indice, 1);
        window.localStorage.setItem('clientes', JSON.stringify(clientes));
        window.location.reload();
    }
}

const registrar = document.querySelector('#cadastro form');
registrar.addEventListener('submit', e => {
    e.preventDefault();
    const cliente = {
        id: clientes.length + 1,
        nome: registrar.nome.value,
        cpf: registrar.cpf.value,
        email: registrar.email.value,
        logradouro: registrar.logradouro.value
    };
    clientes.push(cliente);
    window.localStorage.setItem('clientes', JSON.stringify(clientes));
    window.location.reload();
});
