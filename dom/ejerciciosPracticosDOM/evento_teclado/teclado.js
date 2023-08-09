const d = document;

export function shortcuts(e){
	//console.log(e); //el evento que se ejecuto -- si presionamos s
	//console.log(e.type); //el tipo de evento "keydown"
	//console.log(e.key); //la letra que presinamos "s"
	//console.log(e.keyCode); //el codigo o id que tiene la letra  83
	//console.log(e.ctrlKey);// si esque presinamos el ctrl true/false
	//console.log(e.altKey);// si esque presinamos el alt true/false
	//console.log(e.shiftKey);// si esque presinamos el shift true/false

	if (e.key === "a" && e.altKey) {
		alert("Haz lanzado una alerta");
	}

	if (e.key === "c" && e.altKey) {
		confirm("Haz lanzado una confirmacion");
	}

	if (e.key === "p" && e.altKey) {
		prompt("Haz lanzado un aviso");
	}

}


let x=0,y=0;
export function moveBall(e,stage,ball){
	const $ball = d.querySelector(ball),
	$stage = d.querySelector(stage);

	console.log(e.keyCode);
	console.log(e.key);	

	//como hacemos para que detecte los bordes del stage y no pase los bordes
	//getBoundingClientRect nos ayuda a saber los valores acerca la anchura altura posX poxY que tan alejado esta de X e Y
	const limitsBall = $ball.getBoundingClientRect(),
	limitsStage = $stage.getBoundingClientRect();

	console.log(limitsBall);
	console.log(limitsStage);

	switch(e.keyCode){
		case 37:
			//izquierda
			if (Math.round(limitsBall.left) > Math.round(limitsStage.left)) x--;			
			e.preventDefault(); //lo hacemos en cada uno de los casos para que no afecte los comportamientos de los otros botones
		break;
		case 38:
			//arriba
			if (Math.round(limitsBall.top) > Math.round(limitsStage.top)) y--;
			e.preventDefault();
		break;
		case 39:
			//derecha
			if (Math.round(limitsBall.right) < Math.round(limitsStage.right)) x++;
			e.preventDefault();
		break;
		case 40:
			//abajo
			if (Math.round(limitsBall.bottom) < Math.round(limitsStage.bottom)) y++;
			e.preventDefault();
		break;
		default:
		break;		
	}
	$ball.style.transform = `translate(${x * 10}px ,${y * 10}px)`;	
}


























