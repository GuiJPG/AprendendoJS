
const h1 = document.querySelector('.container h1');
const date = new Date();

// const options = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// h1.innerHTML = date.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle:'short'});
// h1.innerHTML = new Intl.DateTimeFormat('pt-BR',{dateStyle: 'full', timeStyle:'short'}).format(date);
h1.innerHTML = new Intl.DateTimeFormat('pt-BR',{dateStyle: 'full', timeStyle:'short'}).format(date).toUpperCase();

console.log(date.toLocaleString());
