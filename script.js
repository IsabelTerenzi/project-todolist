let tarefa = '';

const lista = document.getElementById('lista-tarefas');
const botaoAdd = document.querySelector('#criar-tarefa');

botaoAdd.addEventListener('click', adicionaTarefa);

//botaoLimparLista.addEventListener('click', apagaTudo);
//botaoLimparCompletos.addEventListener('click', removeFinalizados);
function criaTarefa(texto) {
    const itemLista = document.createElement('li');
    itemLista.innerText = texto;

    lista.appendChild(itemLista);
}



function adicionaTarefa() {
    tarefa = document.getElementById('texto-tarefa').value;

    localStorage.setItem(tarefa, '');

    document.getElementById('texto-tarefa').value = '';

    criaTarefa(tarefa);
}