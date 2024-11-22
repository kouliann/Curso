"user strict";
let contadorCarrito=1;
let id=0;
let nombre='';
let precio=0.0;
let cantidad=0;
let menu=0;
const iva=16;
let idProducto=0;

const preCarrito={
    idP:[],
    nombreP:[],
    precioP:[],
    cantidadP:[],
    venta:[],
    subCarrito: function (id, nombre, precio, cantidad){
        this.contadorCarrito+=1;
        this.idP[contadorCarrito]=id;
        this.nombreP[contadorCarrito]=nombre;
        this.precioP[contadorCarrito]=precio;
        this.cantidadP[contadorCarrito]=cantidad;
        this.venta[contadorCarrito]=precio*cantidad;
    },
}

const carrito={
    aticulos:0,
    monto:0.0,
    montoIva:0.0,
    montoTotal:0.0,

    calculos: function(iva){
        this.articulos=0;
        this.monto=0.0;

        let size=idP.lenght;
        for(i=0;i<size;i++){
            const{cantidadP, venta}=this.productos[i];
            this.articulos+=cantidadP[i];
            this.monto+=venta[i];
        }
        ///////////////
        let impuestos=iva/100;
        this.montoIva=this.monto*impuestos;
        ////////////////
        this.montoTotal=0.0;
        this.montoTotal=this.monto+this.montoIva;

    },
    
   detallesProductos:function(){
    let size=nombreP.lenght;
    let MOS='';
    for(i=0;i<size;i++){
      MOS+=(idP[i]+ nombreP[i]+ precioP[i]+ cantidadP[i]+ venta[i]);
    }
    return MOS;
   },

    mostrarDetalles:function(){
    alert('esto es lo que lleva en el carrito'+'\n'
        +this.detallesProductos()+ '\n' +
        'Monto a pagar:...'+ this.monto+ '\n' +
        'Impuestos:...'+this.montoIva+ '\n' +
        'Monto Total a pagar:...'+this.montoTotal+ '\n' +
        '----------------------------------------'+ '\n' +
        'Cantidad de articulos:...'+this.articulos+ '\n'


    )},

    eliminar:function(){
    let idProducto=parseInt(prompt('Ingrese el indice de lo que va a eliminar'));  
    for(i=0; i<id.lenght; i++){
        if(idProducto==idP[i]){
            this.articulos=this.articulos-cantidadP[i];
            this.monto=this.monto-venta[i];
            idP[i]=0;
            nombreP[i]=null;
            precioP[i]=0.0;
            cantidadP[i]=0;
            venta[i]=0;
        }
    }
    
   }




}
   
   


function catalogo(idProducto){
    alert('1: Carton de huevos' +'\n'+
        '2: Leche' +'\n'+
        '3: Harina'+'\n'+
        '4: Mantequilla'+'\n'+
        '5: Queso'+'\n'+
        '6: Mortadela'+'\n'+
        '7: Jamon'+'\n'+
        '8: tomate'+'\n'+
        '9: cebolla'+'\n'+
        '10: Ajo'+'\n')
        idProducto=parseInt(prompt("ingrese una opcion de la lista"));
    while(idProducto<1 || idProducto>10){
    idProducto=parseInt(prompt('error, ingrese nuevamente'));
    }
    switch (idProducto){
        case 1:
            id=1;
            nombre='huevos';
            precio=500;
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 2:
            id=2;
            nombre='Leche'
            precio=240;
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 3:
            id=3;
            nombre='Harina'
            precio=75;
            
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 4:
            id=4;
            nombre='Mantequilla'
            precio=159;
            
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 5:
            id=5;
            nombre='Queso'
            precio=240;
            
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 6:
            id=6;
            nombre='Jamon'
            precio=270;
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 7:
            id=7;
            nombre='Mortadela'
            precio=167;
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 8:
            id=8;
            nombre='Tomate'
            precio=178;
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 9:
            id=9;
            nombre='Cebolla'
            precio=235;
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
        case 10:
            id=10;
            nombre='Ajo'
            precio=167;
            alert("Id || Producto || Precio"+'\n'+
            id+ ' || '+ nombre +' || '+precio);
            break
    }
    let desicion=prompt('Desea ingresarlo al carrito? 1:si 0:no');
    if(desicion=true){
    let cantidad= parseInt(prompt("ingrese la cantidad"));
    while(cantidad<1){
        alert("Error, como planeas meter esa cantidad?, prueba otra vez");
        cantidad= parseInt(prompt("ingrese la cantidad"));
    }
    preCarrito.subCarrito(id, nombre, precio, cantidad);
}
}

function menuOpciones(){
   let menu=parseInt(prompt('que desea hacer?'+'\n'+
        '1: mirar'+'\n'+
        '2: agregar'+'\n'+
        '3: eliminar'+'\n'+
        '4: cambiar cantidad'+'\n'+
        '5: vaciar'+'\n'+
        '6: buscar'+'\n'+
        '7: pagar'+'\n'))
        while(menu<1 ||menu>7){
        alert("error, prueba otra ve");
        menu= parseInt(prompt('que desea hacer?'+'\n'+
            '1: mirar'+'\n'+
            '2: agregar'+'\n'+
            '3: eliminar'+'\n'+
            '4: cambiar cantidad'+'\n'+
            '5: vaciar'+'\n'+
            '6: buscar'+'\n'+
            '7: pagar'+'\n'));
    }
}





alert("Bienvenido a la tiendita de don juan");
alert("Seleccione una opcion del menu basada en su id");
catalogo(idProducto);


menuOpciones();

switch(menu){
    case 1:
        carrito.calculos(iva)
        carrito.mostrarDetalles();
        break;
    case 2:
        catalogo(idProducto);
     break
    case 3:
        carrito.eliminar()
        break
    case 4:
    
        break


    
}
