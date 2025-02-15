'use strict'

var formulario = document.querySelector ('#formulario');
var ul = document.querySelector('#listarDonaciones');

function construirLista(){
    ul.innerHTML = '';
    for (var i in localStorage){
        if(typeof localStorage[i]==='string'){
            var li = document.createElement('li');
            li.textContent = localStorage[i];
            ul.appendChild(li);
        }
    }
}

construirLista();

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    var dona= document.querySelector('#nombre').value;
    if(nombre.length >=1){
        localStorage.setItem(dona, dona);
        construirLista();
    }
});