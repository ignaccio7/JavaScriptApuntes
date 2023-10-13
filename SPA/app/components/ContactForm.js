
export function ContactForm() {
    const $form = document.createElement("form");
    $form.classList.add("contact-form");
	$form.method = "POST";
	$form.action ='https://formsubmit.co/igna260298@gmail.com';

	const $styles = document.getElementById("dynamic-styles");

	$styles.innerHTML = `
	*,
	*::before,
	*::after{
		box-sizing: border-box;
	}
	
	/**********  Contact form validations**************************/
	.contact-form{
		--form-ok-color:#52C776;
		--form-error-color:#E46565;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
	}
	
	/*a todos los hijos directos*/
	/*.contact-form > *   */
	.contact-form > *{
		display: block;	
		width: 100%;
		margin: 0 auto;
		padding: .5rem;
	}
	
	.contact-form textarea{
		resize: none;
	}
	
	.contact-form legend,
	.contact-form-response{
		font-size: 1.5rem;
		text-align: center;
	}
	
	.contact-form input,
	.contact-form textarea{
		font-size: 1rem;
		font-family: sans-serif;
	}
	
	.contact-form input[type="submit"]{
		width: 50%;	
		font-weight: bold;
		cursor: pointer;
		text-transform: uppercase;
	}
	
	.contact-form *::placeholder{
		color: #2D8AB1;
	}
	
	.contact-form [required]:valid{
		border: thin solid var(--form-ok-color);
	}
	
	.contact-form [required]:invalid{
		border: thin solid var(--form-error-color);
	}
	/*para los errores que mostraremos cuando no cumplan con la validacion*/
	.contact-form-error{
		font-size: 80%;
		background-color: var(--form-error-color);
		color: #fff;
		transition: all 800ms ease;
	}
	
	.contact-form-error.is-active{
		display: block;
		/*name duration iteration-count animation-direction delay efectORitmAnimation animationFillMode->conserva estilos*/
		animation: show-message 1s 1 normal 0s ease-out both;
	}
	
	.none{
		display: none;
	}
	
	@keyframes show-message{
		0%{
			visibility: hidden;
			opacity: 0;
		}
		100%{
			visibility: visible;
		}
	}	
	`;

    $form.innerHTML = `
    <!--este legend es como el titulo del formulario-->
			<legend>Envianos tus comentarios</legend>

			<!--cuando el input detecte un patron a cumplir el texto aparece cuando incumplimos al querer enviar-->
			<input type="text" name="name" placeholder="Escribe tu nombre" title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>

			<br>

			<input type="email" name="email" placeholder="Escribe tu correo" title="Email incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
			<br>


			<input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
			<br>


			<!---el textarea no acepta el pattern pero lo agregaremos un data atributte para validar con js-->
			<textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" title="No se debe exceder los 255 caracteres" required data-pattern="^.{1,255}$"></textarea>
			<br>


			<input type="submit" value="enviar">

			<div class="contact-form-loader none">
				<!--El loader lo sacamos de 
				https://samherbert.net/svg-loaders/-->
				<img src="./app/assets/loader.svg" alt="Cargando...">
			</div>

			<div class="contact-form-response none">
				<p>Los datos han sido enviados</p>
			</div>
    `;

	function contactFormValidations(){
		const d = document;
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

	setTimeout(() => {
		contactFormValidations();
	}, 100);

    return $form;

}


