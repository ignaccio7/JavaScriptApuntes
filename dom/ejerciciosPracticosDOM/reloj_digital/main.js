import { digitalClock, alarm } from './reloj.js';

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
	digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
	alarm("./assets_alarma.mp3","#activar-alarma","#desactivar-alarma");
});