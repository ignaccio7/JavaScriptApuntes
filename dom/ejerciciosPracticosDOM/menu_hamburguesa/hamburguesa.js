/*

let hamburgerMenu = (panelBtn,panel)=>{
	const d = document;

	d.addEventListener("click",(e)=>{
		console.log(e.target);
		if(e.target.matches(panelBtn)){			
			d.querySelector(panel).classList.toggle("is-active");
		}
	});
};

export default hamburgerMenu;


 */

export default function hamburgerMenu(panelBtn,panel,menuLink){
	const d = document;

	d.addEventListener("click",(e)=>{
		//console.log(e.target);
		/*  
		con panelBtn hacemos referencia a .panel-btn
		y con `${panelBtn} *` hacemos referencia a cualquiera de sus hijos
		*/
		if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){			
			d.querySelector(panel).classList.toggle("is-active");
			d.querySelector(panelBtn).classList.toggle("is-active");
		}

		if(e.target.matches(menuLink)){
			d.querySelector(panel).classList.remove("is-active");
			d.querySelector(panelBtn).classList.remove("is-active");	
		}

	});
};