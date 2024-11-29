const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listTarefas = document.querySelector('.tarefas');

function criaLi(){
   const li = document.createElement('li');
   return li;
}

function limpaInput(){
   inputTarefa.value = '';
   inputTarefa.focus();
}

function btnApagar(li){
   li.innerText += ' ';
   const btnApagar = document.createElement('button');
   btnApagar.innerText = 'Apagar';
   btnApagar.setAttribute('class', 'apagar');
   li.appendChild(btnApagar);
}

function salvarTarefas(){
   const liTarefas = listTarefas.querySelectorAll('li');
   const listaTarefas  = [];

   for(let tarefa of liTarefas){
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaTarefas.push(tarefaTexto);
   }

   const tarefaJSON = JSON.stringify(listaTarefas);
   localStorage.setItem('tarefas', tarefaJSON);
}

function addTarefasStorage(){
   const tarefas = localStorage.getItem('tarefas');
   const listaTarefas = JSON.parse(tarefas);

   for(let tarefa of listaTarefas){
      criaTarefa(tarefa);
   }  
}

addTarefasStorage();

inputTarefa.addEventListener('keypress', function(e){
   if(e.keyCode === 13){
      if(!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
      
   }
})

function criaTarefa(textInput){
   const li = criaLi();
   li.innerHTML = textInput;
   listTarefas.appendChild(li);
   limpaInput();
   btnApagar(li);
   salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
   if(!inputTarefa.value) return;
   criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
   const el = e.target;
   if(el.classList.contains('apagar')){
     el.parentElement.remove();
     salvarTarefas();
   }
});