/* function calculadora (n1,n2){
    console.log("La suma es ", (n1+n2)) ;
    console.log(" la resta es ", (n1-n2)) ;
    console.log("la multiplicacion es ", (n1*n2)) ;
    console.log("la division es ", (n1/n2));
}

function porConsola(n1, n2){
    console.log("La suma es ", (n1+n2)) ;
    console.log(" la resta es ", (n1-n2)) ;
    console.log("la multiplicacion es ", (n1*n2)) ;
    console.log("la division es ", (n1/n2));

}

function porPantalla(n1, n2){
    document.write("La suma es ", (n1+n2) +"<br/>") ;
    document.write(" la resta es ", (n1-n2) +"<br/>") ;
    document.write("la multiplicacion es ", (n1*n2) +"<br/>") ;
    document.write("la division es ", (n1/n2) +"<br/>");
}

function calculadora (n1,n2, mostrar=false){

    if(mostrar==false){
        porConsola(n1,n2);
    }
    else{
        porPantalla(n1,n2);
    }

    return true;
}

calculadora (500, 35, false);*/

function sumando(n1,n2, sumaMuestra, sumaPordos){
    var suma=n1+n2;
    sumaMuestra(suma);
    sumaPordos(suma);

    return suma;

}

sumando(25, 50, function(dato){
    console.log("la suma es:" +(dato))

},function (dato){
    console.log ("la suma multimpicada es " +(dato*2))
});