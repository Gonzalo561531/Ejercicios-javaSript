'use strict'

/*PROGRAMA QUE NOS PIDA 2 NUMEROS Y QUE NOS DIGA CUAL ES EL MAYOR, EL MENOR Y SI SON IGUALES
PLUS: Si los numeros no son numeros o son menores o iguales a cero,nos vuelva a pedir datos*/


while(numero1 <=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
   var numero1 =parseInt(prompt('introduce el primer numero',0));
   var numero2 =parseInt(prompt('introduce el segundo numero',0));
};

if (numero1 == numero2 ) {
	alert('los numeros son iguales');
}else if(numero1 > numero2){
     alert('El numero mayor es: '+numero1);
     alert('el numero menor es: '+numero2);
}else{
	alert('El numero mayor es: '+numero2);
     alert('el numero menor es: '+numero1);
}