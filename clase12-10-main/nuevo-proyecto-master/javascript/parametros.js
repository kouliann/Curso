

function frutas(fruta1, fruta2, ...frutass){ //parametro rest
    console.log ("la primera fruta es " +fruta1);
    console.log ("la segunda fruta es " +fruta2);
    console.log (frutass);


}

frutas ("parchita", "patilla", "limon", "fresa");
var frutas2=["guanabana, melon, mandarina"];

frutas(frutas2, "cambur", "lechoza", "patilla");