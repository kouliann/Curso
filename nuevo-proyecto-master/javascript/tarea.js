var n1=parseInt(prompt("ingrese el valor de n1", 0));
var n2=parseInt(prompt("Ingrese el valor de n2", 0));


    var num=parseInt(prompt("ingrese el valor para sacar su tabla de multiplicar", 0));
     if (num1<1){
        console.log("El primer número debe ser menor que el segundo.");
        num=parseInt(prompt("ingrese el valor para sacar su tabla de multiplicar", 0));
  }

    function calculadora (num){
        let y=1;
        let mul="";
        let r

        while(y<=10){
            mul=num*y;
            console.log (num+ "*" +y+ "=" +mul);
            y++;
        }
    }

    calculadora (num);
    let n1=parseInt(prompt("Ingrese el primer número:"));
    let n2=parseInt(prompt("Ingrese el segundo número:"));

    if (n1>=n2) {
        console.log("El primer número debe ser menor que el segundo");
        n1=parseInt(prompt("Ingrese el primer número:"));
        n2=parseInt(prompt("Ingrese el segundo número:"));
    }
    for (let i=n1 + 1; i<n2; i++){
        console.log("ED-" +i);
    }

    let n1=parseInt(prompt("Ingrese el primer número:"));
    let n2=parseInt(prompt("Ingrese el segundo número:"));
    const num=[n1, n2];

    
    for (let i=0; i<num.length; i++){
        if (num[i]%2==0){
            console.log(num[i]+ " es par");
        }else{
            console.log(num[i]+ " es impar");
        }
    }
          
        

      
      
      