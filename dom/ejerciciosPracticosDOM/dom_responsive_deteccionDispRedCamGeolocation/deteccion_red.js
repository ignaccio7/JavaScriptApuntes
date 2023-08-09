const d = document,
	w = window,
	n = navigator;

//no le haremos llegar nada ya que ira detectando la red del usuario
//y crearemos un div cuando detecte la red
export default function networkStatus(){
	//tenemos dos metodos que nos ayudaran a detectar la conexion del dispositivo
	//w.addEventListener("online",(e) => {console.log(n.onLine); console.log("hola")} ); //imprimira true si hay coneccion
	//w.addEventListener("offline",(e) => console.log(n.onLine) ); //imprimira false si no hay coneccion

	const isOnline = () =>{
		const $div = d.createElement("div");

		if (n.onLine) {
			$div.textContent = "Conexion Reestablecida";
			$div.classList.add("online");
			$div.classList.remove("offline");
		}else{
			$div.textContent = "Conexion Perdida";
			$div.classList.remove("online");
			$div.classList.add("offline");
		}

		//d.body.appendChild($div);
		d.body.insertAdjacentElement("afterbegin",$div);

		let notify = setTimeout(()=>{
			d.body.removeChild($div);
		},2000);

	};

	w.addEventListener("online",(e) => isOnline());
	w.addEventListener("offline",(e) => isOnline());

}






