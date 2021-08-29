let nombre = prompt("Dime tu nombre: ");
alert("¡Hola "+nombre+"!");

let nro1 = prompt(nombre + " ingresa un nro: ");
if (parseInt(nro1) > 1000){
    alert("El nro "+ nro1 + " es mayor a 1000");
}else{
    console.log("El nro "+ nro1 + " es menor a 1000");
}


let textoUser = prompt(nombre + " ingresa un texto: ");
if (textoUser == 'Hola'){
    console.log("El texto es "+ textoUser);
}else{
    console.log("El texto "+textoUser+ " no es Hola");
}

let nro2 = prompt(nombre + " ingresa un nro: ");
if (parseInt(nro2) >= 10 && parseInt(nro2) <= 50){
    alert("El nro "+ nro2 + " esta en el intervalo 10 y 50");
}else{
    console.log("El nro "+ nro2 + " no esta en el intervalo 10 y 50");
}
