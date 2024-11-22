
/*nombre="programacion";
precio=40;
disponible=true;*/


/// objeto literal en vez de crear tres variables crear un objeto

const curso={
    nombre:"programacion",
    precios: 40,
    disponible: true,
    informacion:{
        fechaInicio: "5 de noviembre",
        fechaFinalizacion: "20 de diciembre"
    }
}

console.log(curso);

const{nombre, precio, disponible, informacion:{fechaInicio}}=curso;
console.log(fechaInicio);




/*//agregar propiedades
curso.modalidad="presencial"
console.log(curso);
//para eliminar propiedades
delete curso.modalidad;
console.log(curso);
//destructuring de objetos

const{gasolina="lleno", precio, prestable}=carro;
console.log(gasolina);
*/

const carro={
    

    propietario: "Joan Garcia",
    seguro:true,

    especificaciones:{
        marca: "Renault",
        modelo: "Duster Oroch",
        año: "2023",
    }
}

const{propietario, seguro, especificaciones:{marca}}=carro;
console.log(marca);



