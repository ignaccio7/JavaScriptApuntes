
const d = document;

export default function filterCards(datoBuscar,card){	

	//const dato = d.getElementById(datoBuscar);

	//este evento se ejecutara cuando dejen de apretar una tecla en el teclado
	d.addEventListener("input",(e)=>{
		//el metodo matches busca un selector valido como puedes ser el .card o #card etc
		if (e.target.matches(datoBuscar)) {
			//console.log(e.target.value);

			//para cuando apreten la tecla escapte 
			//if (e.key === "Escape") e.target.value = ""
			
			d.querySelectorAll(card).forEach((elem)=>{
				//console.log(elem.children[1].textContent); de esta manera solo sacamos el texto del figcaption
				//console.log(elem.textContent); //sacamos todo el contenido textual del figure se puede ver en la consola
				if (elem.textContent.toLowerCase().includes(e.target.value)) {
					elem.classList.remove('filter');
				}else{
					elem.classList.add('filter');
				}
			});
			

		}
	});

	//para cuando aprenten la X en el input search es este evento
	/*d.addEventListener("search",(e)=>{
		if (e.target.matches(datoBuscar)) {
			console.log(e.target.value);
		}
	});
	*/

	//para probar lo del visibiliti hidden
	/*d.addEventListener("click",(e)=>{
		if (e.target.matches(card)) { alert("aaa"); }
	});*/

}





