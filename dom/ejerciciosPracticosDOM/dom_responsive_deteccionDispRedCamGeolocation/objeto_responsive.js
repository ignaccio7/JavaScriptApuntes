const d = document, w = window;


//https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event
export default function responsiveMedia(idObservado, mediaQuery, mobileContent, deskoptContent){
	let breakpoint = w.matchMedia(mediaQuery); //es un evento de tipo mediaquery en el window
	//tambien se podria hacer con wl window resize pero es mejor esta manera osea usar un objeto de tipo mediaQuery

	const responsive=(e)=>{
		if (e.matches) //este matches detectara si la mediaQuery se cumple solo si es verdadero
		{
			d.getElementById(idObservado).innerHTML = deskoptContent;
		}else{
			d.getElementById(idObservado).innerHTML = mobileContent;
		}
	}

	breakpoint.addEventListener("change",responsive);
	//console.log(breakpoint);MediaQueryList {media: '(min-width: 800px)', matches: false, onchange: null}
	responsive(breakpoint);


	/*SI QUEREMOS VER COMO ESTO AYUDA AL RESPONSIVE ENTONCES GUARDEMOS LA PAGINA WEB CON CTRL + S EN SU VERSION DESKTOP Y MOBILE
	SE PODRIA HACER CON CSS CON DISPLAY NONE PERO VISUALMENTE SOLUCIONAMOS EL PROBLEMA PERO AUNQUE LO OCULTEMOS 
	ESTO NO REDUCE LA CARGA DE DATOS QUE CONSUMAMOS ESTO BASICAMENTE ES UNA TECNICA PARA WPO WEB PERFORMANCE OPTIMIZE*/
}






