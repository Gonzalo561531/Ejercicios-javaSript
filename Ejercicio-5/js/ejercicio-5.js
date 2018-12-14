'use strict'
/* MOSTRAR TODOS LOS NUMEROS DIVISORESDE UN NUMERO INTRUDUCIDOS
EN PROMPT*/
var numero = parseInt(prompt("Mete un numero",0));

for(var i = 0;i<=numero;i++){
	if(numero%i==0){
      console.log('Divisor'+i);
	}
	
}