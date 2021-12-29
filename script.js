window.onload = function() {
  // chamar conteudo salvo
  document.querySelector('#lista-tarefas').innerHTML = localStorage.getItem('lista-salva');
  

  const botaoCriarTarefa = document.querySelector('#criar-tarefa');
  const caixaDeInput = document.querySelector('#texto-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');
  const botaoApagaTudo = document.querySelector('#apaga-tudo');
  const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
  const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');

  // Requesito 5 && 6 - evento click no botao e entrega valor de input na lista
  // texto no button
  function criaItemLista() {
    const itemLista = document.createElement('li');
    itemLista.className = 'item-tarefa';
    itemLista.innerText = caixaDeInput.value;
    listaTarefas.appendChild(itemLista);
    caixaDeInput.value = '';
  }
   botaoCriarTarefa.addEventListener('click', criaItemLista);

  // requesito 7- alterar cor de fundo do item da lista tarefas
  // Requesito 8 - alterar apenas uma cor por vez

  const itemTarefasOl = document.querySelector('ol')
  const  listaLis = itemTarefasOl.children; 
  console.log(listaLis);

  function alteraCorItemLista(event) {
    for (let index = 0; index < listaLis.length; index += 1) {
      listaLis[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  }
  itemTarefasOl.addEventListener('click', alteraCorItemLista);

  // requesito 9- Ao clicar 2x no item marca com risco de completado
  // e retira o risco completado
  function tarefaCompletada(event) {
    if (event.target.className === 'item-tarefa completed') {
      return event.target.className = 'item-tarefa';
    }
    
    event.target.className = 'item-tarefa completed';
  }
  itemTarefasOl.addEventListener('dblclick', tarefaCompletada);

  // requesito 10- botao apaga tudo quando clicar apaga todos itens da lista
  // botao criado direto no html
  function LimparLista() {
    itemTarefasOl.innerText = '';
  }
  botaoApagaTudo.addEventListener('click', LimparLista);

  // requesito 11- Botao que remove elementos finalizados da lista
  // botao criado direto  no html
  function LimpaFinalizados() {
    const finalizado = document.querySelector('.completed');
    finalizado.remove();
  }

  botaoApagaFinalizados.addEventListener('click', LimpaFinalizados);
  // 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista

  // 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
  function salvaListaTarefas() {
    // salvar conteudo
    const itensDalista = document.querySelector('#lista-tarefas').innerHTML;
    localStorage.setItem('lista-salva', itensDalista);
  }
  botaoSalvarTarefas.addEventListener('click', salvaListaTarefas);

}