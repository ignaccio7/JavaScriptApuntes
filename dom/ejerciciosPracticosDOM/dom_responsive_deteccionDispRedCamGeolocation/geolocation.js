
const d = document, //es el arbol la estructura html que nos permite acceder a los nodos
	w = window, // es la ventana de nuestro navegador
	n = navigator; // nos da informacion de las caracteristicas del dispositivo o del usuario usertAgent desconexiones geolocalizacion camara etc


export default function getGeolocation(idInfoGeolocation){
	//La API de geolocalización permite al usuario proporcionar su ubicación a las aplicaciones web si así lo desea
	
	const $id = d.getElementById(idInfoGeolocation);

	//la funcion de la geolocalizacion para poder ejecutar esta funcion necesitan 3 parametros
	//n.geolocation.getCurrentPosition(success,error,options);

	//probraremos con el metodo getCurrentPosition nos devolvera la posicion actual
	//y recibe 3 parametros (<funcion en caso de exito>,<funcion en caso de error>,<objetio opcional con opciones>)
	/*
	maximumAge
	Un valor positivo longque indica la edad máxima en milisegundos de una posible posición almacenada en caché que es aceptable devolver. Si se establece en 0, significa que el dispositivo no puede usar una posición almacenada en caché y debe intentar recuperar la posición actual real. Si se establece en Infinityel dispositivo, debe devolver una posición en caché independientemente de su antigüedad. Predeterminado: 0.

	timeout
	Un longvalor positivo que representa el tiempo máximo (en milisegundos) que el dispositivo puede tardar para devolver una posición. El valor predeterminado es Infinity, lo que significa que getCurrentPosition()no volverá hasta que el puesto esté disponible.

	enableHighAccuracy
	Un valor booleano que indica que a la aplicación le gustaría recibir los mejores resultados posibles. Si trueel dispositivo es capaz de proporcionar una posición más precisa, lo hará.
	 */
	
	const success = (position)=>{
		console.log(position);
		//si es exitoso
		/*
			GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1690921636171}
			coords: GeolocationCoordinates
			accuracy: 16.803 es la presicion
			altitude: 	null la targeta de la computadora no puede detectar la altitud
			altitudeAccuracy: null   presicion de la altitud
			latitude:-16.5177693    los que nos interesa son estos longitud y latitud
			longitude:-68.1067934
			speed:null 			la velocidad
			timestamp:1690921636171 		tiempo expresado en milisegundos de cuando se dio la lectura
		 */
		let coords = position.coords;
		//nota el zoom de google maps va de 1 a 20 y segun eso podremos determinar que tan lejos o cerca queremos que nos
		//muestre la posicion que obtuvimos
		//rel no opener para evitar que la ventana que abrimos se pueda controlar con js
		$id.innerHTML = `
		<p>
			Tu posicion actual es:
			<ul>
				<li>Latitud : ${coords.latitude}</li>
				<li>Longitud : ${coords.longitude}</li>
				<li>Presicion : ${coords.accuracy} metros</li>
			</ul>
			<a href="https://google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
		</p>
		`;
	}

	const error = (err)=>{
		console.log(err);//si denegamos el permiso GeolocationPositionError {code: 1, message: 'User denied Geolocation'}
		$id.innerHTML = `
			<h3> Error : <mark> codigo = ${err.code} , mensaje = ${err.message} </mark> </h3>
		`;

	}

	const options = {
		enableHighAccuracy:true, //acelerando el hardware para que tome la mejor lectura
		timeout:5000, //cuanto tiempo estara esperando para que tome la lectura
		maximumAge:0 //para que no se guarde en cache las lecturas 
	};

	n.geolocation.getCurrentPosition(success,error,options);

	//existe otro metodo que es el watchPosition() que cuando detecte un cambio de posicion nos ira arrojando un objeto con las coordenadas

}







