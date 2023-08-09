const d = document, w = window;

export function botonScroll(btnScroll){
	const btn = d.querySelector(btnScroll);

	let scrollTop;

	w.addEventListener("scroll",(e)=>{
		scrollTop = w.pageYOffset || d.documentElement.scrollTop;
		if (scrollTop>400) {
			btn.classList.remove("hidden");
		}else{
			btn.classList.add("hidden");
		}
	});

	d.addEventListener("click",(e)=>{
		if (e.target.matches(btnScroll)) {
			w.scrollTo({
				behavior: "smooth",
				top:0,
				//left:0 
			});
		}
	});

	//console.log(w.pageYOffset, d.documentElement.scrollTop);
}