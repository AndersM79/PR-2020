function multiplo(numero) {
  return numero * 3;
};

var resultado = multiplo(6)
console.log(resultado);

//
function saludo(nombre) {
  return 'lindo dia' + nombre
};
const resultadoSaludo = saludo('gaby');
console.log(resultadoSaludo);

//
function numero() {
  var i = 0;
  for (i; i < 10; i++) {
    console.log(i + 1);
  }
};

numero();

//
for (var i = 0; i < 10; i++)
  console.log(i);

for (var i = 5; i < 9; i++) {
  i += i;
};
console.log(i)

//ejemplo1
n = 2;
x = 4;
while (n < 3) {
  n++;
  x += n;
}
console.log(n);

//ejemplo2

n = 1
x = 2;
while (n < 4) {
  n++;
  x += n;
}
console.log(x);

//ejemplo3
var numbers = [1, 2, 3, 4, 5],
  total = 0;

numbers.map(function (number) {
  total += number;
});
console.log(numbers);


//ejemplo4 

var promedio = [8, 9, 6, 2],
  total = 0;

promedio.map(function (number) {
  total += number;
});
console.log(promedio);









