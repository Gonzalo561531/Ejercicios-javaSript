'use strict'
/*MOSTRAR TODOS LOS NUMEROS IMPARES QUE HAY ENTRE 2 NUMEROS INTRODUCIDOS 
POR EL USUARIO*/

var numero1 = parseInt(prompt("introduce el primer numero",0));
var numero2 = parseInt(prompt("introduce el segundo numero",0));

document.write("<h1>"+numero1+" a "+numero2+" esto son los numeros impares: <h1>");

while (numero1 < numero2) {
	numero1++;
	if (numero1 & 2 != 0) {
		document.write("<h1>"+numero1+"<h1>")

	}
}