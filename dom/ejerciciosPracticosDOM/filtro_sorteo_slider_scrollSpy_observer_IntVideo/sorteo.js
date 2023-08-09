
const d = document;

export default function draw(btn,selector){

	const getWinner = (selector)=>{
		const $players = d.querySelectorAll(selector);
		//console.log($players);
		let random = Math.floor(Math.random()*$players.length);//redondeamos al menor y la funcion random multiplicada por la longitud nos dara un numero de 0 a la longitud
		//obviamente si la longitud es 10 nos dara un resultado entre 0 y 9 pero como son vectores la posicion 0 es la 1 y la 9 es la 10
		//console.log(random);
		let winner = $players[random].textContent;
		return `El ganador es : ${winner}`;
	}

	d.addEventListener("click",(e)=>{
		if (e.target.matches(btn)) {
			let result = getWinner(selector);
			alert(result);
			//console.log(result);
		}
	});

	//si esque lo qusieramo probar en un canal de comentarios de youtube entonces
	//solo quedaria modificar la funcion y verificamos los elementos en el inspector
	//del navegadorr y luego copiamos y ejecutamos esta funcion en la consola
	/*const getWinnerComment = (selector)=>{
		const $players = document.querySelectorAll(selector);
		//console.log($players);
		let random = Math.floor(Math.random()*$players.length);//redondeamos al menor y la funcion random multiplicada por la longitud nos dara un numero de 0 a la longitud
		//obviamente si la longitud es 10 nos dara un resultado entre 0 y 9 pero como son vectores la posicion 0 es la 1 y la 9 es la 10
		console.log(random);
		let winner = $players[random].textContent;
		return `El ganador es : ${winner}`;
	}
	getWinnerComment(".ytd-item-section-renderer #author-text span");	*/

}





