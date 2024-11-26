function relogio(){
    
    function criaHoraSegundos(segundos){
        const data = new Date(segundos * 1000);
            return data.toLocaleTimeString('pt-BR',{
                hour12: false,
                timeZone: 'UTC'
            });
        }
        
        const relogio = document.querySelector('.relogio');
        
        let segundos = 0;
        let timer;
        
        function iniciaRelogio(){
            timer = setInterval(function(){
                segundos++;
                relogio.innerHTML = criaHoraSegundos(segundos);
            }, 1000);
        }
        
        document.addEventListener('click', function(e){
            const element = e.target;
        
            if(element.classList.contains('zerar')){
                clearInterval(timer);
                relogio.innerHTML = '00:00:00';
                relogio.classList.remove('pausado');
                segundos = 0;
            }
        
          
            if(element.classList.contains('pausar')){
                clearInterval(timer);
                relogio.classList.add('pausado');
            }
        
            if(element.classList.contains('iniciar')){
                relogio.classList.remove('pausado');
                clearInterval(timer);
                iniciaRelogio();
            }
        });        
}
relogio();

