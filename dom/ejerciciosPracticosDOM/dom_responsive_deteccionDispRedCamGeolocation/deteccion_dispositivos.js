
const d = document,
	n = navigator,
	ua = n.userAgent;

export default function userAgentInfo(idInfoDispositivo){
	const $info = d.getElementById(idInfoDispositivo);
	//NOTA el adaptiveDesign era la forma en la que depende el dispotivo que nos encontremos
	//cargaba una pagina diferente en el dispositivo un ejemplo pude ser faceebook
	//desde desktop es facebook.com y desde un mobile es un m.facebook.com y eso es lo que se hacia tenias 2 fronts y depende 
	//el dispositivo en el que te encontraras cambiaba lo que te mostraban
	
	//declaramos objetos que nos ayudaran para detectar en que dispositivo nos encontramos
	//nos ayudaremos con las expresiones regulares para saber si dentro de la info del userAgent
	//se encuentra la informacion acerca de que tipo de mobile/desktop/browser nos encontramos
	//-----El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
	const isMobile = {
		/*android:() => {
			if (ua.match(/android/i)) 
				return ua
		},//  i   es la bandera que ignora mayusculas y minusculas */
		android: () => ua.match(/android/i), //devuelve ['Android', index: 20, input: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/… Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36', groups: undefined]
		ios: () => ua.match(/iphone|ipad|ipod/i),
		windows: () => ua.match(/windows phone/i),
		any: function(){
			//es una funcion anonima ya que si hacemos un array funcion entonces el this seria el padre del objeto isMobile		
			return this.android() || this.ios() || this.windows();
		}
	};

	const isDesktop = {
		linux: () => ua.match(/linux/i),
		mac: () => ua.match(/mac os/i),
		windows: () => ua.match(/windows nt/i),
		any: function(){
			return this.linux() || this.mac() || this.windows();
		}	
	};

	const isBrowser = {
		chrome: () => ua.match(/chrome/i),
		safari: () => ua.match(/safari/i),
		firefox: () => ua.match(/firefox/i),
		opera: () => ua.match(/opera|opera mini/i),
		ie: () => ua.match(/msie|iemobile/i),
		edge: () => ua.match(/edge/i),
		any: function(){
			return(
				this.ie() || 
				this.edge() ||
				this.chrome() ||
				this.safari() ||
				this.firefox() ||
				this.opera()
			)
		}	
	}

	//console.log(ua); //devuelve si fuera un dispo android Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36
	//console.log(isMobile.android()); //devuelve solo si es un dispo android  ['Android', index: 20, input: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/… Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36', groups: undefined]
	//console.log(isMobile.any()); //devuelve solo si fuera un android ios windowsPhone o los que agreguemos ['Android', index: 20, input: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/… Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36', groups: undefined] 

	//console.log(isDesktop.any());

	//imprimira el ua
	//imprimira el SO en el que detecte
	//Imprimira el navegador en el que se encuentre
	$info.innerHTML += `
	<ul>
		<li> User Agent: <b> ${ua} </b> </li> 
		<li> Plataforma: <b> ${isMobile.any() ? isMobile.any() : isDesktop.any() } </b> </li> 
		<li> Navegador: <b> ${isBrowser.any() } </b> </li>
	</ul>
	`;
	

	//CONTENIDO EXCLUSIVO - VALIDANDO SI FUERA UN NAVEGADOR X O DISPOSITIVO X
	if (isBrowser.chrome()) {
		$info.innerHTML += `<p> <mark> Este contenido solo se ve en Chrome </mark> </p> `;
	}

	if (isBrowser.firefox()) {
		$info.innerHTML += `<p> <mark> Este contenido solo se ve en Firefox </mark> </p> `;
	}

	if (isBrowser.ie()) {
		$info.innerHTML += `<p> <mark> Este contenido solo se ve en Internet Explorer </mark> </p> `;
	}


	if (isDesktop.windows()) {
		$info.innerHTML += `<p> <mark> Descarga nuestro software para windows </mark> </p> `;
	}	

	if (isDesktop.linux()) {
		$info.innerHTML += `<p> <mark> Descarga nuestro software para Linux </mark> </p> `;
	}	


	$info.innerHTML += `si probamos en un dispositivo android cualquiera nos redireccionara a youtube tal cual como cuando entramos a facebook desde un mobile nos llega a m.facebook`;
	if (isMobile.android()) {
		window.location.href= "https://youtube.com";
	}	


}















