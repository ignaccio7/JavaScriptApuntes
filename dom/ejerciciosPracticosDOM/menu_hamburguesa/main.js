import hamburgerMenu from './hamburguesa.js';

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
	hamburgerMenu(".panel-btn",".panel",".menu a");
});