
const d = document;

export default function countDown(id, limitDate, finalMessage){
	let $countdown = d.getElementById(id),
		$limitTime = new Date(limitDate);
		//console.log(new Date(),$limitTime);
	//ahora procedemos a hallar el timestamp en milisegundos del dia limite y el que tenemos hoy
	let nowDate;//= new Date().getTime(); //tiempo en milisegundos de la fecha actual
	$limitTime = $limitTime.getTime(); //fecha limite de nuestro cumpleaños en milisegundos	

	let days,hours,minutes,seconds , leftTime;

	let countdownTempo = setInterval(()=>{
		nowDate = new Date().getTime(); //sacamos los segundos que van transcruyendo
		leftTime = $limitTime - nowDate;  //sacamos los milisegundos de cuanto falta para llegar a la fecha limite


		//convertimos el leftTime en dias
		days = Math.floor(leftTime / (1000*60*60*24));  // <valor dias> , <valor milisegundos>
		//convertimos el modulo de leftTime en horas 
		//hours = Math.floor((leftTime % (1000*60*60*24)) / (1000*60*60))
		hours = ("0" + Math.floor((leftTime % (1000*60*60*24)) / (1000*60*60))).slice(-2);
		//convertimos el modulo de leftTime en minutos 
		minutes =("0" +  Math.floor((leftTime % (1000*60*60)) / (1000*60))).slice(-2);
		//convertimos el modulo de leftTime en segundos 
		seconds =("0" +  Math.floor((leftTime % (1000*60)) / (1000))).slice(-2);

		//console.log(nowDate,$limitTime ,leftTime);
		//console.log(days);
		$countdown.innerHTML = `Faltan : ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;

		if (leftTime<0) {
			clearInterval(countdownTempo);
			$countdown.innerHTML = `${finalMessage}`;
		}

	},1000)

};


