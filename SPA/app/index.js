//archivo principal js que desencadenara toda la programacion de la spa
//por ejem invocaion a componentes - delegacion de eventos etc

import api from './helpers/wp_api.js';

import { App } from "./App.js";

const d = document;

// d.addEventListener("DOMContentLoaded",(e)=>{
//     App();
// });

d.addEventListener("DOMContentLoaded",App);

//para quenos ayude con las rutas que detecte cuando cambia el hash
window.addEventListener("hashchange",()=>{
    api.page=1;
    App();
})



