//para el filtro de busqueda
import filterCards from './filtro_busqueda.js';
//para el sorteo digital
import draw from './sorteo.js';
//para el slider no mandamos nada como parametros
import slider from './carrusel.js';
//para el boton de hamburguesa
import btnHamburguer,{scrollSpy} from './boton_scrollSpy.js';
//para el video inteligente
import smartVideo from './video_inteligente.js';


const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
	//console.log("cargado");
	//2 parametros el texto recibido en el input y la clase de las tarjetas
	filterCards('#search','.card');

	//sorteo
	draw("#winner-btn",".player");
	//slider
	slider();
	//boton de hamburguesa
	btnHamburguer('#scroll-btn','.panel','.menu a');
	//seccion scrollspy
	scrollSpy();
	//video inteligente
	smartVideo();

});









