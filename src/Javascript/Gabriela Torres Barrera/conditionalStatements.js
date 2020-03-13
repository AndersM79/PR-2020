  //if 
 
 var mostrarMensaje = true;
 
if(mostrarMensaje) {
  console.log("Hola Mundo");
}
         


var edad = 18;
 
if(edad >= 18) {
  console.log("Eres mayor de edad");
}
   

//switch 

var foo = 0;
switch (foo) {
  case -1:
    console.log('1 negativo');
    break;
  case 0:
    console.log(0)
    
  case 1: 
    console.log(1);
    break; 
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}


var Animal = 'Jirafa';
switch (Animal) {
  case 'Vaca':
  case 'Jirafa':
  case 'Perro':
  case 'Cerdo':
    console.log('jirafa');
    break;
  case 'Dinosaurio':
  default:
    console.log('perro');
}

//if else 

var edad = prompt("Dime tu edad");
if (edad >17) {
alert('Eres mayor de edad, puedes acceder');
}else {
alert('Eres menor de edad; NO puedes acceder');
}
console.log(edad);

  


var dia=1; 
if(dia == 1) {
  console.log("Hoy es lunes.");
} else if(dia == 2) {
  console.log("Hoy es martes.");
} else if(dia == 3) {
  console.log("Hoy es miércoles.");
} else if(dia == 4) {
  console.log("Hoy es jueves.");
} else if(dia == 5) {
  console.log("Hoy es viernes.");
} else if(dia == 6) {
  console.log("Hoy es sábado.");
} else if(dia == 0) {
  console.log("Hoy es domingo.");
}