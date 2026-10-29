const valorA = document.querySelector('#valorA');
const btiniciar = document.querySelector('#btiniciar');
const valorB = document.querySelector('#valorB');
const respUser = document.querySelector('#respUser');
const btconferir = document.querySelector('#btconferir');
const txtAcertos = document.querySelector('#acertosUser')
const txtErros = document.querySelector('#errosUser');

btiniciar.addEventListener('click', ()=>{
    respUser.focus();
        preencher();
});
    function preencher(){
     let a = Math.ceil(Math.random()*10);
    valorA.innerHTML = a;
     let b = Math.ceil(Math.random()*10);
    valorB.innerHTML = b;
    }

    btconferir.addEventListener('click', ()=>{
        conferir();
    });
    respUser.addEventListener('keydown', (event) =>{
        console.log(event);
        if(event.key == "Enter"){
            event.preventDefault();
            conferir();
        }
    });

    function conferir(){
        let correta = valorA.innerHTML * valorB.innerHTML;
        let incorreta = valorA.innerHTML * valorB.innerHTML;
        if(correta == respUser.value){
            //acertoooooooooooooooooouuuuuuuu
            temp = txtAcertos.innerHTML;
            temp++;
            txtAcertos.innerHTML = temp;
            preencher();
            respUser.value = '';
            respUser.focus();
        } 
        else{
            //erroooooooooooooooooooooooooooooooou
            temp = txtErros.innerHTML;
            temp++;
            txtErros.innerHTML = temp;
            preencher();
            respUser.value = '';
            respUser.focus();
        }
    }
