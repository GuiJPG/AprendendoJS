const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';

texto.innerHTML += `<p>Raiz Quadrada : ${Math.sqrt(numero)}</p>`;

texto.innerHTML += `<p>Numero Inteiro : ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `<p>Numero NaN : ${Number.isNaN(numero)}</p>`;

texto.innerHTML += `<p>Numero arredondando para baixo : ${Math.floor(numero)}</p>`;

texto.innerHTML += `<p>Numero arredondando para cima : ${Math.ceil(numero)}</p>`;

texto.innerHTML += `<p>Numero com casas decimais : ${numero.toFixed(2)}</p>`;