
const d = document;

export default function btnHamburguer(idBoton,asideNav,menuLink){

	/*ESTE ES PARA EL EVENTO DEL BOTON HAMBURGUER*/
	let $aside = d.querySelector(asideNav),
		$btn = d.querySelector(idBoton);

	d.addEventListener("click",(e)=>{
		//if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
		if ( (e.target.matches(idBoton)) || (e.target.matches(`${idBoton} *`))) {
			$aside.classList.toggle("active-nav");
			$btn.classList.toggle("is-active");			
		}

		if (e.target.matches(menuLink)) {
			$aside.classList.remove("active-nav");
			$btn.classList.remove("is-active");				
		}

	});	
}


export function scrollSpy(){
	/*ESTE ES PARA EL EVENTO DEL SCROLL SPY*/
	//console.log("scrollSpy");
	const $sections = d.querySelectorAll("section[data-scroll-spy]");

	const callback = (entradas,observador)=>{
		//console.log(entradas); //nos imprimira todos los elementos que esta observando y de este nos interesara el atributo target que hace referencia al elemento y isIntersecting que es un boolean si esta o no en el foco
		//console.log(observador);//Es el observador y podemos ver que los parametros que nos serviran son root,rootMargin,thresholds
		entradas.forEach((entrada)=>{
			//console.log(entrada);
			//2do colocamos aqui para sacar el id de todas las secciones
			let id = entrada.target.getAttribute('id')
			//console.log(id); //ira imprimiendo todos los ids de las secciones que recorra
			if (entrada.isIntersecting) {
				//si esque esta en el foco se agrega la clase al nav
				//console.log(entrada); solo nos imprime la entrada que esta en el foco
				//1ro let id = entrada.target.getAttribute('id'); //necesitamos el id para agregar la clase en el nav
				//console.log(id);
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active-nav");
			}else{
				//por falso se la quita
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active-nav");
				
			}
		});
	};

	//vamos a probar una nueva api que es el intersection observer
	//que se va encargar de observar los elementos del dom en nuestro viewport
	//y nos va informar cuando esten o no en foco cuando esten a nuestra vista
	//creamos el observador y recibe una funcion que se ejecutara y unos parametros 
	//
	//3ro modificamos esto con los parametros  const observer = new IntersectionObserver(callback,{});
	const observer = new IntersectionObserver(callback,{
		root:null, //es el elemento base del cual se basara para observar sino especificamos es el body
		rootMargin:'-300px', //es un margen que le podemos dar al elemento base(top,right,bottom,left) puede ser un margen externo o interno y eso afectara depende como vea el foco -- si colocamos '-250px' afecta a los 4 lados
		//thresholds:[0.5,0.75] //esto significa el limite entre 0 a 1 donde 0 (en cuanto el elemento se visualize se ejecuta) 1 (cuando este al 100%) 0.5 al 50%		
		//cuando el elemento este entre [0.5,0.75] 50% y 75% de su contenido
		thresholds: 1.0,
	});

	//ahora le tenemos que indicar que elemento observara
	//const $sectionPrueba = d.querySelector("section[data-scroll-spy]");
	//observer.observe($sectionPrueba);
	//pero debemos observar a todas las secciones y no a una sola asi
	$sections.forEach((elem)=>{
		observer.observe(elem);
	});

	

}






