const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i];
    const tagCriada = document.createElement(tag);
    const textCriada = document.createTextNode(texto); // Nó de texto dentro do HTML
    
    tagCriada.appendChild(textCriada); //adicionando dentro da tag o texto 
    div.appendChild(tagCriada);
}

container.appendChild(div); //Adicionando a div dentro do container