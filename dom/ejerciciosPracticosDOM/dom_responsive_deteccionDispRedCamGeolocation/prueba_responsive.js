//probando si un sitio es responsivo abriendolo con el w.open

const d = document;

export default function responsiveTester(form){
	const $formTest = d.getElementById(form);
	let tester;

	d.addEventListener("submit",(e)=>{
		//se puede comparar con la funcion matches o comparandolo contra el elemento del formulario - El target del submit en el formulario es el mismo formulario
		//if (e.target.matches(form)) { de esta forma pero tendriamos que cambiar el valor del id en el main.js aumentando un #
		if (e.target === $formTest) {
			e.preventDefault();
			//console.log($formTest);
			//console.log(e.target);			
			
			//podemos acceder a los inputs del formulario con la notacion del .
			tester = window.open(
						$formTest.url.value, //url de pagina a abrir
						"tester", //target es el nombre que se le asigna a esta ventana para dirigir enlaces con el atributo target HTML
						`innerWidth=${$formTest.ancho.value} , innerHeight=${$formTest.alto.value}`						
					);
		}
	});

	d.addEventListener("click",(e)=>{
		//console.log(e.target);
		if (e.target === $formTest.cerrar) tester.close();
	})

}







