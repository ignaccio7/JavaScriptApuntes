const d = document;


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
				pattern = $input.pattern || $input.dataset.pattern;
		
			console.log($input,pattern);
		}
	});


}



















