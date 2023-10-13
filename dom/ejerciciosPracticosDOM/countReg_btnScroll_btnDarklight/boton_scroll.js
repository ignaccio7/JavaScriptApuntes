const d = document, w = window;

export function botonScroll(btnScroll){
	const btn = d.querySelector(btnScroll);

	let scrollTop;

	w.addEventListener("scroll",(e)=>{
		scrollTop = w.pageYOffset || d.documentElement.scrollTop;
		if (scrollTop>400) {
			btn.classList.remove("hidden");
		}else{
			btn.classList.add("hidden");
		}
	});

	d.addEventListener("click",(e)=>{
		if (e.target.matches(btnScroll)) {
			w.scrollTo({
				behavior: "smooth",
				top:0,
				//left:0 
			});
		}
	});

	//console.log(w.pageYOffset, d.documentElement.scrollTop);
}


/**
 * PODEMOS HACER NOTAR UN METODO INTERESANTE 
 * si quisieramos hacer un scroll infinito osea que si cargamos 10 post por pagina y queremos que cuando llegue al final de la pagina con el scroll cargar los siguientes 10
 

 */
/*window.addEventListener("scroll",e=>{
	//scrollTop obtiene cuando de scroll tenemos 
	//clientHeight obtiene el viewportHeight en pixeles que tenemos en nuestro navegador
	//scrollHeight obtiene el tamaño en pixeles de todo el scroll que podemos aplicar a la pagina
	const { scrollTop, clientHeight, scrollHeight }	= document.documentElement;

	if (scrollTop + clientHeight >= scrollHeight) {
		console.log("cargamos mas informacion");
	}

})*/

