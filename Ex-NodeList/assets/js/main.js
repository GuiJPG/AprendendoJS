const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');


const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;


for (let p of ps){
   p.style.backgroundColor = backgroudColorBody;
   p.style.color = '#FFFF';
}