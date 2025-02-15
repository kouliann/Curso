console.log(1);
    document.addEventListener('DOMContentLoaded', () => {
        console.log(2);
    })
console.log(3);

const nav = document.querySelector('.navegacion');
 

//vamos a registrar el eventListener para el nav

nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')
    nav.style.backgroundColor = 'darkblue';
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'maroon';
})

nav.addEventListener('click', () =>{
    console.log('agarraloo');
    nav.style.backgroundColor = 'puple';
})

nav.addEventListener('mouseup', () => {
    console.log('sueeeltaloo');
    nav.style.backgroundColor = 'yellow'
})

nav.addEventListener('dblclick', ()=>{
    console.log('no vas a abrir nada deja quieto');
    nav.style.backgroundColor='orange'
})

const calculadora={
    sumar: function (n1,n2){
        sum=n1+n2;
        document.getElementById('result').innerHTML=`la suma de a: ${n1} mas b: ${n2}=${sum}`;
    },

    restar: function (n1,n2){
        resta=n1-n2;
        document.getElementById('result').innerHTML=`la resta de a: ${n1} menos b: ${n2}=${resta}`;
    },

    multiplicar: function (n1,n2){
        multipica=n1*n2;
        document.getElementById('result').innerHTML=`la multiplicacion de a: ${n1} por b: ${n2}=${multipica}`;
    },

    dividir: function (n1,n2){
        division=n1/n2;
        document.getElementById('result').innerHTML=`la division de a: ${n1} entre b: ${n2}=${division}`;
    },
}

const tabla=[
    {nombre: 'Joan'},
    {nombre: "Alba"},
    {nombre:"zonati"},
    {nombre: "Jesus"},
    {nombre:"Soma"},
    {nombre:"Dore"},
    
    
]

const impresion={
mostrar: function(){

    for(let i = 0; i<tabla.length; i++){
        document.getElementById('registro').innerHTML=`nombre: ${tabla[i].nombre}`
    }
}
  
}
