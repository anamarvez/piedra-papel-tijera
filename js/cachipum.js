var jugadaUser;
var jugadaCompu;
var numRedondo;
var numRandom;
var confirm;

/*repito mientras el usuario quiera jugar*/
do{
	/*repito mientras el usuario ingrese las palabras correctas y ademas toLowerCase lo convierte en minuscula*/
	while (!(jugadaUser==="piedra" || 
		   jugadaUser==="papel" || 
		   jugadaUser==="tijera")){
		var jugadaUser = prompt("¿piedra, papel o tijera?").toLowerCase();
		console.log(jugadaUser);
	}

	/*Busco un número random para la selección de la opción de la computadora*/
	var numRandom=Math.random()*2;
	var numRedondo=Math.round(numRandom);
	console.log(numRedondo);

	/*0: piedra / 1:tijera / 2:papel*/

	if (numRedondo==0){
		jugadaCompu="piedra";
	} else if (numRedondo==1){
		jugadaCompu="tijera";
	} else {
		jugadaCompu="papel";
	}
	
	alert("Ahora le toca al computador elegir");
	console.log(jugadaCompu);
	alert("El computador eligió: " + jugadaCompu);

	if (jugadaUser=="piedra"){
		if (jugadaCompu=="piedra"){
			alert("¡Hubo Empate!");
		} else if(jugadaCompu=="papel"){
			alert("¡Te ganó la máquina!");
		} else {
			alert("¡Felicidades GANASTE!");
		}
	} else if (jugadaUser=="papel"){
		if (jugadaCompu=="papel"){
			alert("¡Hubo Empate!");
		} else if (jugadaCompu=="tijera"){
			alert("¡Te ganó la máquina!");
		} else {
			alert("¡Felicidades GANASTE!");
		}
	} else {
		if (jugadaCompu=="tijera"){
			alert("¡Hubo Empate!");
		} else if (jugadaCompu=="piedra"){
			alert("¡Te ganó la máquina!");
		} else {
			alert("¡Felicidades GANASTE!");
		}
	}
	jugadaUser="culaquier cosa"
}while(window.confirm("¿Desea jugar de nuevo?"))



