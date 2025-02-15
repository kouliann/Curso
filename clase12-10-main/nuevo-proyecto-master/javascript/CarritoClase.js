const carrito=[
    {nombre: "monitor", precio:500},
    {nombre: "television", precio:700},
    {nombre:"Tablet", precio:300},
    {nombre: "audifonos", precio:200},
    {nombre:"teclado", precio:50},
    {nombre:"Celular", precio:500},
]

//muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo

const nuevoArray=carrito.map(function(producto){
    return `Articulo: ${producto.nombre} Precio:${producto.precio}`;
})

const nuevoArray2=carrito.forEach(function(producto){
console.log (`Articulo: ${producto.nombre}, precio: ${producto.precio}`)
})

//console.log(nuevoArray);
//console.log(nuevoArray2),

for(let i = 0; i<carrito.length; i++){
    console.log(`Articulo: ${carrito[i].nombre}, Precio: ${carrito[i].precio}`)
}