
const d = document,
	w = window, 
	n = navigator;

export default function webCam(idElementVideo){

	const $video = d.getElementById(idElementVideo);

	//este objeto mediaDevices que brinda acceso a los dispositivos de entrada de medios conectados, como cámaras y micrófonos, así como el uso compartido de pantalla.
	// y el metodo o funcion getUserMedia es una funcion nativa del navegador que ejecutaremos para 
	// pedir el acceso a la camara
	//console.log(n.mediaDevices.getUserMedia);

	if (n.mediaDevices.getUserMedia) //si el navegador tiene este metodo
	{
		//recibe una seria de parametros como activar el video o el audio
		//y esta funcion devuelve una promesa 
		n.mediaDevices.getUserMedia({video:true,audio:false})
		.then((stream)=>{
			//el metodo then recien ese objeto stream que recibira los trozos que transmite
			//la camara web
			console.log(stream);//nos devolvera un objeto MediaStream
			//en lugar de enviarle una cadena en este atributo	$video.src lo mandaremos mediante un objeto que es lo que nos devuelve
			$video.srcObject = stream;
			$video.play(); //para que se vea lo que esta grabando la camara
			
		})
		.catch((err)=>{
			$video.insertAdjacentHTML("beforebegin",`
				<p>
					<mark>
						Sucedio el siguiente error : ${err}
					</mark>
				</p>
			`);
			console.error(`Sucedio el siguiente error : ${err}`);
		});
	}

}










