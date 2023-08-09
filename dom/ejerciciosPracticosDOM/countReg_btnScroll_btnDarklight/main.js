import countDown from './cuenta_regresiva.js';
import { botonScroll } from './boton_scroll.js';
import btnDarkTheme from './tema_oscuro.js';

const d = document;

//https://emojipedia.org/es/cara-con-ojos-de-espiral/
d.addEventListener("DOMContentLoaded",(e)=>{
	//countDown("countdown","Feb 26 2024 00:00:00","Feliz Cumpleaños a mi 😵‍💫 ");
	countDown("countdown","Jul 27 2023 16:24:00","Feliz Cumpleaños a mi 😵‍💫 ");
	botonScroll('.scroll-top-btn');
	//como utilizamos el evento DOMContentLoaded y si en nuestro archivo tema_oscuro usamos el mismo evento esta
	//esa funcion que declaramos ahi DOMContentLoaded nose ejecutara asi que procedemos a sacar de esta funcion
	//btnDarkTheme('.dark-theme-btn',"dark-theme");
});

//sino funciona de la manera de arriba comentar esa y descomentar esta
btnDarkTheme('.dark-theme-btn',"dark-theme");

