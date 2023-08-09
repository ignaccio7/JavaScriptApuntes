
const d = document;

export default function slider(){
	const $slides = d.querySelectorAll('.slider-slide'),
		$btnPrev = d.getElementById('prev'),
		$btnNext = d.getElementById('next');

	let i=0;

	d.addEventListener("click",(e)=>{
		if (e.target === $btnNext) {
			e.preventDefault();
			$slides[i].classList.remove("active");
			i++;
			if (i>=$slides.length) {
				i=0;			
			}
			$slides[i].classList.add("active");
		}

		if (e.target === $btnPrev) {
			e.preventDefault();
			$slides[i].classList.remove("active");
			i--;
			if (i<0) {
				i=$slides.length-1;			
			}
			$slides[i].classList.add("active");
		}
	});

}











