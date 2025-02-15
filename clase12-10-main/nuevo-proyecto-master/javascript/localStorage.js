'use strict'
if (typeof(Storage) !=='undefined'){
    console.log('local storage disponible');
}
else{
    console.log ('Loal storage no disponible')
}


//guardar elemento
localStorage.setItem("titulo", "curso de php");

//obtener elemento
localStorage.getItem("titulo");

//mostrarlo por consola
console.log(localStorage.getItem("titulo"));

//mostrarlo por html

document.querySelector('#curso').innerHTML = localStorage.getItem ("titulo");

//guardar objetos

var usuario={
    nombre:'Eli',
    email:'eli@gmail.com',
    web:"felicilandia"

}

localStorage.setItem("usuario",JSON.stringify(usuario));

//la forma correcta de almacenar datos en el local storage es convirtiendo los objetos en JSONString porque no preocesa el objeto con javascript puro, la forma correcta de enviar informacion a un API se debe hacer igual con JSON string

//recuperar objetos de local storage

var userjs=JSON.parse(localStorage.getItem("usuario"));
console.log(userjs)

document.querySelector('#alumno').append(" "+userjs.nombre+" "+userjs.web);


//vaciar
//localStorage.removeItem("usuario");

//localStorage.clearItem("usuario");