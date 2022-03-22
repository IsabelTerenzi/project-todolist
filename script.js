const botaoAdd = document.querySelector('#criar-tarefa');
const paiBotao = document.querySelector('#texto-tarefa');

botaoAdd.addEventListener('click', adicionaTarefa);
botaoAdd.addEventListener('click', limpaTarefa);

function criaLista(texto){
    const tarefa = document.createElement('li');
    tarefa.innerText = texto;
    paiBotao.appendChild(tarefa);
}

function adicionaTarefa(){
    const tarefa = document.getElementById('texto-tarefa');
    localStorage.setItem(tarefa, 'texto');

    criaLista(tarefa);
}

function limpaTarefa (){
   localStorage.clear();
}

window.onload = function (){
    if (localStorage.length > 0){
        for (let i = 0; i < localStorage.length; i ++){
            let chave = localStorage.key(i);
            let tarefa = JSON.parse(localStorage.getItem(chave));
            criaLista(tarefa);
        }
    }
}