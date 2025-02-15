'usse strict'

window.addEventListener('load',function(){
    console.log('dom cargado')

    var formulario = document.querySelector('#formulario');

    var box = document.querySelector('.alumnos')
    box.style.dispaly="none"

    formulario.addEventListener('submit',function(){
        console.log('capturando formulario');

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector ('#apellido').value;
        var edad = document.querySelector('#edad').value;

        if (nombre.trim()==null || nombre.trim().length==0 || !isNaN(nombre)){
            //alert('nombre no es valido')
            document.querySelector('#error_nombre').innerHTML="El nombre es incorrecto";
            document.querySelector('#error_nombre').style.color ="red";
            return false;
        }else{
            document.querySelector('#error_nombre').style.display="none";
        }


        if (apellido.trim()==null || apellido.trim().length==0 || !isNaN(apellido)){
            //alert('apellido no es valido')
            document.querySelector('#error_apellido').innerHTML="El apellido es incorrecto"
            document.querySelector('#error_apellido').style.color ="red";
            return false;
        }else{
            document.querySelector('#error_apellido').style.display="none";
        }

        if (edad==null || edad<=0 || isNaN(edad)){
            //alert('edad no es valido')
            document.querySelector('#error_edad').innerHTML="La edad es incorrecta"
            document.querySelector('#error_edad').style.color ="red";
            return false;
        }else{
            document.querySelector('#error_edad').style.display="none";
        }


        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellido = document.querySelector ('#p_apellido span');
        var p_edad = document.querySelector ('#p_edad span')
        console.log(nombre, apellido, edad);

        p_nombre.innerHTML=nombre;
        p_apellido.innerHTML=apellido;
        p_edad.innerHTML=edad;
        

        
    });
});

