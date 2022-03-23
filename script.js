let tarefa = '';

const lista = document.getElementById('lista-tarefas');
const botaoAdd = document.querySelector('#criar-tarefa');
const botaoLimpar = document.querySelector('#apaga-tudo');
const limpaFeitos = document.querySelector('#remover-finalizados');

botaoAdd.addEventListener('click', adicionaTarefa);
botaoLimpar.addEventListener('click', limpaLista);
limpaFeitos.addEventListener('click', apagaFeitos);

function criaTarefa(texto) {
  const itemLista = document.createElement('li');
  itemLista.innerText = texto;
  itemLista.addEventListener('click', ficaCinza);
  itemLista.addEventListener('dblclick', ficaRiscado);
  lista.appendChild(itemLista);
}

function adicionaTarefa() {
  tarefa = document.getElementById('texto-tarefa').value;

  localStorage.setItem(tarefa, '');

  document.getElementById('texto-tarefa').value = '';

  criaTarefa(tarefa);
}

function limpaLista() {
  lista.innerText = '';
  localStorage.clear();
}

function ficaCinza(event) {
  event.target.classList.toggle('gray');
}

function ficaRiscado(event) {
  event.target.classList.toggle('completed');
}

function apagaFeitos() {
  const itemListaFeito = document.querySelectorAll('.completed');
  for (let i = 0; i < itemListaFeito.length; i += 1) {
    itemListaFeito[i].remove();
  }
}

window.onload = function () {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      let key = localStorage.key(i);
      criaTarefa(tarefa);
    }
  }
};
