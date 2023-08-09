import responsiveMedia from './objeto_responsive.js';
//para probar si el sitio es reponsive
import responsiveTester from './prueba_responsive.js';
//para detectar en que dispositivo estamos
import userAgentInfo from './deteccion_dispositivos.js';
//para la deteccion de la red no lo haremos dentro del DOMContentLoaded ya que tenemos que esperar a la hoja de estilos para añadir ese detalle
import networkStatus from './deteccion_red.js';
//para la deteccion de la camara web
import webCam from './deteccion_webcam.js';
//para la geolocalizacion
import getGeolocation from './geolocation.js';




const d = document;


d.addEventListener("DOMContentLoaded",(e)=>{
	//responsiveMedia("youtube","(min-width: 800px)","Contenido Mobile", "Contenido Desktop");
	responsiveMedia("youtube","(min-width: 800px)",
	 `<a href="https://www.youtube.com/watch?v=539WE7w-5qs&list=RD539WE7w-5qs&start_radio=1" target="_blank">-----Ver Video----</a>`,
	 `<iframe width="560" height="315" src="https://www.youtube.com/embed/539WE7w-5qs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);

	//responsiveMedia("gmaps","(min-width: 800px)","Contenido Mobile", "Contenido Desktop");
	responsiveMedia("gmaps","(min-width: 800px)",
	 `<a href="https://goo.gl/maps/QxCux2LKSzmjnRg3A" target="_blank">-----Ver Mapa----</a>`,
	 `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15302.34968513375!2d-68.1371624!3d-16.4964159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20740f995505%3A0xdf697c2a08595767!2sBas%C3%ADlica%20Menor%20de%20San%20Francisco!5e0!3m2!1ses!2sbo!4v1690580770894!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);


	responsiveTester('formResponsive');

	userAgentInfo('idInfoDispositivo');

	webCam('webcam');

	getGeolocation('infoGeolocation');

});

//aqui lo ejecutamos ya que esta funcion se ejecutara si el navegador 
//detecta que perdimos o reconectamos la conexion
networkStatus();








