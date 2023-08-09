
import {shortcuts, moveBall} from './teclado.js';


const d = document;

//keydown cuando presionamos una tecla en el teclado
//keyup cuando soltamos una tecla en el teclado
//keypress mientras presionemos una tecla en el teclado
d.addEventListener("keydown",(e)=>{
	shortcuts(e);
	moveBall(e,".stage",".ball");
});

