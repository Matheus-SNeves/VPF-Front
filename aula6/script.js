const produtos = JSON.parse(window.localStorage.getItem('produtos'));
if (produtos === null) {
    window.localStorage.setItem('produtos', JSON.stringify([]));
    produtos = [];
}

const tabela = document.getElementById('tabela');
produtos.forEach(e => {
    console.table(e);
    tabela.innerHTML += `
    <tr>
            <td>${e.id}</td>
            <td>${e.nome}</td>
            <td>${e.descricao}</td>
            <td>${e.valcusto}</td>
            <td>${e.valfinal}</td>
            <td><button onclick="excluir(${e.id})" style="background: red;">Excluir</button> <button onclick="editar(${e.id})">Editar</button></td>
        </tr>`

});

function excluir(id) {
    if (confirm('Realmente quer excluir o produto ' + id + ' ?')) {
        const indice = produtos.findIndex(produto => produto.id === id);
        produtos.splice(indice, 1);
        window.localStorage.setItem('produtos', JSON.stringify(produtos));
        window.location.reload();
    }
}

const registrar = document.querySelector('#cadastro form');
registrar.addEventListener('submit', e => {
    e.preventDefault();
    const produto = {
        id: produtos.length + 1,
        nome: registrar.nome.value,
        descricao: registrar.descricao.value,
        valcusto: registrar.valcusto.value,
        valfinal: registrar.valfinal.value
    };
    produtos.push(produto);
    window.localStorage.setItem('produtos', JSON.stringify(produtos));
    window.location.reload();
});
