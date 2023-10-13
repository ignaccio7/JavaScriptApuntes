const d = document,
	w = window;

/*
export default function contactFormValidations(){
	const $form = d.querySelector(".contact-form"),
		$inputs = d.querySelectorAll(".contact-form [required]");

	//console.log($inputs);

	$inputs.forEach((input)=>{
		let $span = d.createElement("span");
		//$span.setAttribute("id",input.name);
		$span.id=input.name;
		//console.log($span);		
		$span.textContent = input.getAttribute("title");
		$span.classList.add("contact-form-error","none");
		input.insertAdjacentElement("afterend",$span);
	});

	d.addEventListener("keyup",(e)=>{
		if (e.target.matches(".contact-form [required]")) {
			let $input = e.target,
				//pattern = $input.getAttribute("pattern") || $input.getAttribute("data-pattern");
				pattern = $input.pattern || $input.dataset.pattern;
				//console.log($input,pattern);
				if (pattern && $input.value!=="") {
					//console.log("El input tiene patron");
					let regex = new RegExp(pattern);
					return !regex.exec($input.value)
						? d.getElementById($input.name).classList.add("is-active")
						: d.getElementById($input.name).classList.remove("is-active");
				}

				if (!pattern) {
					//console.log("El input no tiene patron");
					console.log($input.value.trim().length > 0);
					console.log($input.value === "");
					return ($input.value !== "" && $input.value.trim().length > 0)
						? d.getElementById($input.name).classList.remove("is-active")
						: d.getElementById($input.name).classList.add("is-active");
				}


		}
	});
}
*/

function contactFormValidations(){
	const $form = d.querySelector(".contact-form"),
		$inputs = d.querySelectorAll(".contact-form [required]");

	//console.log($inputs);

	$inputs.forEach((input)=>{
		let $span = d.createElement("span");
		//$span.setAttribute("id",input.name);
		$span.id=input.name;
		//console.log($span);		
		$span.textContent = input.getAttribute("title");
		$span.classList.add("contact-form-error","none");
		input.insertAdjacentElement("afterend",$span);
	});

	d.addEventListener("keyup",(e)=>{
		if (e.target.matches(".contact-form [required]")) {
			let $input = e.target,
				//pattern = $input.getAttribute("pattern") || $input.getAttribute("data-pattern");
				pattern = $input.pattern || $input.dataset.pattern;
				//console.log($input,pattern);
				if (pattern && $input.value!=="") {
					//console.log("El input tiene patron");
					let regex = new RegExp(pattern);
					return !regex.exec($input.value)
						? d.getElementById($input.name).classList.add("is-active")
						: d.getElementById($input.name).classList.remove("is-active");
				}

				if (!pattern) {
					//console.log("El input no tiene patron");
					//console.log($input.value.trim().length > 0);
					//console.log($input.value === "");
					return ($input.value !== "" && $input.value.trim().length > 0)
						? d.getElementById($input.name).classList.remove("is-active")
						: d.getElementById($input.name).classList.add("is-active");
				}


		}
	});

	d.addEventListener("submit",(e)=>{
		if (e.target.matches(".contact-form")) {
			//e.preventDefault();
			//alert("se esta enviando");
			const $loader = d.querySelector('.contact-form .contact-form-loader') ,
				$response = d.querySelector('.contact-form .contact-form-response');

			$loader.classList.remove("none");

			setTimeout(()=>{
				$loader.classList.add("none");
				$response.classList.remove("none");
				
				setTimeout(()=>{
					$response.classList.add("none");
					e.target.reset();
				},3000);

			}, 3000);


		}
	});
}


//para el narrador de texto
function speechReader(){
	const $speechSelect = d.getElementById("speech-select"),
		$speechTextarea = d.getElementById("speech-text"),
		$speechBtn = d.getElementById("speech-btn"),
		speechMessage = new SpeechSynthesisUtterance();

	//console.log(speechMessage); //con esta api nos permitira poder ejecutar el narrado y aqui asignaremos una voz en particular
	
	//Y para obtener las voces entonces usaremos el api
	//console.log(w.speechSynthesis); //utilizaremos esta web api para decetar cuando agreguemos una voz
	//console.log(w.speechSynthesis.getVoices()); Y para las voces con este metodo pero aqui no cargara por lo que debemos ejecutarlos en un evento
	let voices = []; 
	//tenemos que asignar este evento al speechsynthesis para que cargue las voces
	w.speechSynthesis.addEventListener("voiceschanged",(e)=>{
		//console.log(e);
		voices = w.speechSynthesis.getVoices();
		//console.log(voices);
		
		voices.forEach((elem)=>{
			const $option = d.createElement("option");
			$option.value = elem.name;
			$option.textContent = `${elem.name} ***** ${elem.lang}`;

			$speechSelect.appendChild($option);
		});
		
	});
	//para cuando cambien la voz
	d.addEventListener("change",(e)=>{
		if (e.target === $speechSelect) {
			
			speechMessage.voice = voices.find(voice => voice.name === e.target.value);
			
			//console.log(speechMessage);			

		}
	});
	//para cuando den click a leer
	d.addEventListener("click",(e)=>{
		if (e.target === $speechBtn) {
			speechMessage.text = $speechTextarea.value;
			w.speechSynthesis.speak(speechMessage);
		}
	});

		
}

d.addEventListener("DOMContentLoaded",(e)=>{
	contactFormValidations();
	speechReader();



});

















