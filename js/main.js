document.getElementById('form-boton');
function boton(){
    alert('Se ha enviado su informacion')
}

let titulo=document.querySelector('.title');
let tituloC=document.createElement('p');

tituloC.innerHTML='Formulario';
titulo.appendChild(tituloC);

// --------------------------------------------------------------------
setInterval(()=>{
let dia=document.getElementsByClassName('reloj')[0];
let tiempo= new Date();
let horas=tiempo.getHours();
let minutos=tiempo.getMinutes();
let segundo=tiempo.getSeconds();

dia.innerHTML=horas+':'+minutos+":"+segundo;
},1000)
// --------------------------------------------------------

let teclado=document.getElementById('nombre');
teclado.addEventListener('keydown',function(e){
    console.log("estas presionando la tecla: ",e.key)
})

let tecladoDos=document.getElementById('apellido');
tecladoDos.addEventListener('keydown',function(e){
    console.log("el usuario esta presionando la tecla: ",e.key)
})


let pantalla=document.querySelector('form');
pantalla.addEventListener('submit',function(e){


    
    e.preventDefault();
    let correo=document.getElementById('usuario"').value
    console.log(correo);
})