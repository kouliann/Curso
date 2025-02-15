const curso={
    nombre:"programacion",
    precios: 40,
    disponible: true,
}

const carro={
    propietario: "Joan Garcia",
    seguro:true,
    marca: "Renault",
    modelo: "Duster Oroch",
    año: "2023",
}

/*console.log(curso);

Object.freeze(curso);//congelar un objeto
curso.nombre="marketing";
delete curso.nombre;
console.log (curso);
console.log(Object.isFrozen(curso));
 

Object.seal(curso)//no se elimina ni agrega pero si se puede editar
curso.nombre="marketing"
console.log(curso);*/

//como unir 2 objetos

const planficacion =Object.assign(curso, carro);//unir objetos
console.log (planficacion);


