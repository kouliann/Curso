function displayDate(){
    document.getElementById("fecha").innerHTML = Date();
}
let n1;
let n2;

function suma(n1,n2){
    document.getElementById('resultado').innerHTML=n1+n2;
}

function mOver(obj){
    obj.innerHTML="ya mañana es quizaas..."
}

function mOut(obj){
    obj.innerHTML="navidad"
}