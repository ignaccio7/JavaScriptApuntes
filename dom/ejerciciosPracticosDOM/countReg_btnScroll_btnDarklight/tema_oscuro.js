
const d = document;

//Local storage es una webapi que tenemos en el navegador para poder almacenar los datos revisar la documentacion hasta cuanta
//informacion podemos almacenar pero es una mejor opcion que las cookies

const ls = localStorage;
let switchLDmode;




export default function btnDarkTheme(btn,classDark){
	
	let moon = "☽", sun = "☼";

	const $btnTheme = d.querySelector(btn);

	const $selectors = d.querySelectorAll("[data-dark]"); //devuelve todas las etiquetas que tengan el data-atributte data-dark

	

	/*d.addEventListener("click",(e)=>{
		//console.log($btnTheme.textContent);
		if (e.target.matches(btn)) {
			if ($btnTheme.textContent === moon){ 
				//recorremos todos los selectores con el data-atributte y agregamos la clase
				$selectors.forEach((elem)=>{
					elem.classList.add(classDark);
				});
				$btnTheme.textContent = sun;
			}else{
				$selectors.forEach((elem)=>{
					elem.classList.remove(classDark);
				});
				$btnTheme.textContent = moon;
			}
		}
	});
	lo comentamos porque mas abajo resolvemos esta misma funcion pero guardando los datos en el localstorage*/	

	let darkMode = ()=>{
		$selectors.forEach((elem)=>{
			elem.classList.add(classDark);
		});
		$btnTheme.textContent = sun;
		ls.setItem("switchLDmode",true);
	}

	let lightMode = ()=>{
		$selectors.forEach((elem)=>{
			elem.classList.remove(classDark);
		});
		$btnTheme.textContent = moon;
		ls.setItem("switchLDmode",false);
	}



	d.addEventListener("click",(e)=>{
	//console.log($btnTheme.textContent);
		if (e.target.matches(btn)) {
			if ($btnTheme.textContent === moon){ 				
				darkMode();	
			}else{
				lightMode();
			}
		}
	});

	//console.log($selectors);
	//
	

	//aqui verificamos si esta con el tema dark o no mediante el localstorage
	d.addEventListener("DOMContentLoaded",(e)=>{
		if (ls.getItem("switchLDmode") === 'true') {
			darkMode();
		}else{
			lightMode();
		}
	});

}
















