/*function sumar(a,b){
    return a+b
}

const resultado=sumar(1,2);
console.log(resultado)

//mas avanzado...

let total=0;
function agregarCarrito(precio){
    return total+=precio;
}

function calcularImpuesto(total){
    return 1.15*total;
}

total=agregarCarrito(200);
total=agregarCarrito(300);
total=agregarCarrito(400);
console.log(total);

const totalPagar=calcularImpuesto(total);

console.log(`el total a pagar es de ${totalPagar}`)




//Arrow function en metodos de una propiedad

const Reproductor={
    cancion:"",
    reproducir: id=>console.log(`REproduciendo la cancion id: ${id}`),
    pausar:id=> console.log(`cancion: ${id} pausada...`),
    borrar:id => console.log(`Borrando la cancion con id: ${id}`),
    crearPlaylist: nombre=> console.log(`Creando Playist: ${nombre}`),
    reproducirPlaylist: nombre=> console.log(`reproduciendo la Playlist ${nombre}`),
    
    //tambien estan los Set y los get, set

    set nuevaCancion(cancion){
        this.cancion=cancion;
        console.log(`añadiendo ${cancion}`)
    },

    get obtenerCancion(){
        console.log(this.cancion)
    }

}

Reproductor.reproducir(30);
Reproductor.pausar(30);
Reproductor.crearPlaylist("bellakeo e e eo");
Reproductor.reproducirPlaylist("bellakeo e e eo");*/

modelo="";
const Carro={
    modelo:"",
    prender: nombre=>console.log(`el carro ${nombre} esta prendiendo`),
    retroceder: nombre=>console.log(`el carro ${nombre} esta echando patra' `),
    apagar: nombre=>console.log(`el carro ${nombre} esta apagao`),

    set carroNuevo(modelo){
        this.modelo=modelo;
        console.log(`añadiendo a ${modelo} en el estacio`);
    },

    get obteneCarro(){
        console.log(this.modelo);
    }
    

}

/*Carro.prender("jose manue");
Carro.retroceder("jose manue");
Carro.apagar("jose manue");
Carro.carroNuevo="felipe";


const producto={
    nombre:"monitor",
    precio:400,
    disponible:true
}*/

console.log(Object.keys(Carro));//nos devolvera un arreglo con los keys del objeto
console.log(Object.values(Carro));//nos devolvera un arreglo con los valores del objeto
console.log(Object.entries(Carro));//entries nos va a retornar una matriz de llaves y valores