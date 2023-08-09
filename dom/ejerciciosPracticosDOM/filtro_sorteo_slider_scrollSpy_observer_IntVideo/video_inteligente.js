
const d = document,
	w = window;

export default function smartVideo(){

	const $videos = d.querySelectorAll('video[data-smart-video]');
	console.log($videos);

	//1. hasta aqui ya estaria pero cuando cambiamos de pantalla y el foco sigue en el video este sigue corriendo
	const callback = (entradas)=>{
		entradas.forEach((entrada)=>{			
			//console.log(entrada);
			//console.log(d.visibilityState); //imprimi visible si estas en la pestaña y hidden si no lo estas
			console.log(d.visibilityState);
			if (entrada.isIntersecting) {
				entrada.target.play();
			}else{
				entrada.target.pause();
			}

			//para arreglar el problema 1.
			//detectamos el evento cuando cambie de ventana y
			//vemos si el foco del documento esta en visible
			//El visibilitychangeevento se activa en el documento cuando el contenido de su pestaña se vuelve visible o se oculta.
			w.addEventListener("visibilitychange", 
				e => d.visibilityState === "visible"
				? entrada.target.play()
				: entrada.target.pause()
			);


		});
	};


	const observer = new IntersectionObserver(callback,{threshold:0.8});

	$videos.forEach(el => observer.observe(el));

}











