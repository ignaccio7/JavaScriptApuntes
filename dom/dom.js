/* **********     WEB APIs     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/* console.log(window);
console.log(document);

let texto = "Hola, soy tu amigo y docente ...";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */
/*





*/
/* **********     DOM: Introducción      ********** */
/* console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links); //HTMLCollection coleccion de nodos en el documento de los enlaces que existen
console.log(document.images);//HTMLCollection
console.log(document.forms);//HTMLCollection
console.log(document.styleSheets);//StyleSheetList lista de hojas de estilo que utilicemos en el documento
console.log(document.scripts);//HTMLCollection
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>"); */
/*





*/
/* **********    DOM: Nodos, Elementos y Selectores      ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
//existen diferentes tipos de nodos como pueden ser los elementos html o el texto dentro de las etiquetas  //son nodos de tipo elemento o nodos de tipo texto
//
//estos metodos ya no suelen utilizarse xq se reemplazaron con otro metodo mas optimo
 /*console.log(document.getElementsByTagName("li")); //HTMLCollection - coleccion de elementos en el html de las listas
console.log(document.getElementsByClassName("card"));//HTMLCollection - coleccion de elementos de html que tengan la clase card
console.log(document.getElementsByName("nombre"));//NodeList una lista de nodos que tengan ese atributo //generalmente lo usamos en etiquetas de tipo formulario 
console.log(document.getElementById("menu"));//Nos devuelve el codigo html de la etiqueta con ese id
//se reemplazaron con querySelector pero el getElementById se sigue usando
console.log(document.querySelector("#menu")); //Devuelve la etiqueta html
console.log(document.querySelector("a")); //devuelve la primera etiqueta de enlace 
console.log(document.querySelectorAll("a")); //NodeList - Devuelve una lista de nodos de los enlaces
console.log(document.querySelectorAll("a").length); // devuelve la cantidad de enlaces que hay
document.querySelectorAll("a").forEach((el) => console.log(el)); //Recorremos la lista con un foreach - e imprime la etiqueta html de cada enlace
console.log(document.querySelector(".card")); // 
console.log(document.querySelectorAll(".card")); //
console.log(document.querySelectorAll(".card")[2]); //
console.log(document.querySelector("#menu li")); //
console.log(document.querySelectorAll("#menu li")); // */
/*





*/
/* **********     DOM: Atributos y Data-Attributes      ********** */
//<div atributo="<valor>" data-atributo="<valor>"></div>
/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href); //devuelve file:///D:/NACHO/PRACTICAS/JS/dom/dom.html
console.log(document.querySelector(".link-dom").getAttribute("href")); //devuelve dom.html

document.documentElement.lang = "en"; //para setear
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX"); //para setear
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */
/*





*/
/* **********    DOM: Estilos y Variables CSS      ********** */
/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style); //devuelve un chorizo de codigo en CSSStyleDeclaration
console.log($linkDOM.getAttribute("style")); //devuelve background-color: #F7DF1E; color: #222;
console.log($linkDOM.style.backgroundColor); //aunque pongamos en formato hexadecimal nos devuelve en rgb
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor); */
/*





*/
/* **********     DOM: Clases CSS      ********** */
/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className); //devuelve card rotate-45
console.log($card.classList); //devuelve DOMTokenList(2) ['card', 'rotate-45', value: 'card rotate-45']
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */
/*





*/
/* **********    DOM: Texto y HTML      ********** */
/* const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

//$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */
/*





*/
/* **********     DOM Traversing: Recorriendo el DOM      ********** */
/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild); //con firstChild hacemos referencia al nodo que seria el salto de linea y los espacios
console.log($cards.firstElementChild); //con firstElementChild hacemos referencia al primer elemento que en este cas seria la etiqueta figure
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */
/*





 */
/* **********    DOM: Creando Elementos y Fragmentos      ********** */
/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("CreateTextNode"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://picsum.photos/200/200");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://picsum.photos/200/200" alt="People">
<figcaption>innerHTML</figcaption>
`;
$figure2.classList.add("card");

$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */
/*





*/
/* **********     DOM: Templates HTML      ********** */
//son etiquetas que no se renderizan exactamente en el DOM pero que las podemos usar como plantillas para crear otras en base a esta
////las etiquetas template nose renderizan nose las crearon para eso solo sirven como para tener una plantilla y a partir de estas tener una base para crear otras
/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content, //para acceder al contenido de las etiquetas de adentro y no asi a la etiqueta template,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "Animales",
      img: "https://placebear.com/200/200",
    },
    {
      title: "Arquitectura",
      img: "https://placekitten.com/200/200",
    },
    {
      title: "Gente",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "Naturaleza",
      img: "https://placebear.com/200/200",
    },
  ];

cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true); //para clonar las etiquetas del contenido del template , true para que clone las etiquetas dentro - false para que solo clone la etiqueta template
  $fragment.appendChild($clone);
});
$cards.appendChild($fragment); 
//para no tener errores siempre se debe clonar como indica
//https://developer.mozilla.org/es/docs/Web/HTML/Element/template
//hicimos pruebas abajo y da error

//////////////////
//console.log($template); //devuelve la ultima figure que hubieramos añadido

/*$prueba = document.querySelector("#holaprueba");
console.log($prueba);

$parrafo = document.createElement("p");
$parrafo.textContent = "hola parrafo";
$cards.appendChild($parrafo);

console.log($prueba);

$parrafo.textContent = "hola parrafo 2";
$cards.appendChild($parrafo);

console.log($prueba.content);*/


/*
let $prueba = document.querySelector("#holaprueba").content;
console.log($prueba);
console.log(document.querySelector("#holaprueba"));

console.log($prueba.querySelector("p"));
$prueba.querySelector("p").textContent = "hola mundo 111";

var $clone = document.importNode($prueba, true);

$cards.appendChild($clone);

$prueba.querySelector("p").textContent = "hola mundo 2";
$clone = document.importNode($prueba, true);

$cards.appendChild($clone);*/




/* **********   DOM: Modificando Elementos (Old Style)     ********** */
/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //si es false solo clona la etiqueta cards - si es true clona todo el contenido dentro
  //de esta manera clona el Nodo pero no es lo mismo que el importNode lo que hacia el import es que copiaba la estructura ya que al ser un template este nose renderiza en el DOM

$newCard.innerHTML = `
  <img src="https://placebear.com/200/200" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//reemplaza en lugar de
//$cards.replaceChild($newCard, $cards.children[2]);

//reemplaza antes de el lugar
$cards.insertBefore($newCard, $cards.firstElementChild);

//para eliminar un elemento - en este caso el ultimo
$cards.removeChild($cards.lastElementChild);

//
document.body.appendChild($cloneCards); */



/* **********   DOM: Modificando Elementos (Cool Style)     ********** */
/* 
ELEMENTOS PARA INSERTAR ELEMENTOS EN EL LUGAR QUE NOSOTROS QUERAMOS
.insertAdjacent...
  .insertAdjacentElement(position, el) similar al appendChild
  .insertAdjacentHTML(position, html) similar al innerHTML
  .insertAdjacentText(position, text) similar al textConten

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/
 /*const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placebear.com/200/200" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
//$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); 
//$cards.prepend($newCard); //primer hijo
//$cards.append($newCard); //ultimo hijo
//$cards.before($newCard); //hermano anterior
//$cards.after($newCard); //hermano posterior
*/



/**
 * 📝 Los Eventos

    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
 */
    
/* ************************************************************************************************************************************** */
     
   //1️⃣ COMO ATRIBUTO DEL HTML
    
   //👀 Muy importante: 
   /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
    *👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
   */
/*    function holaMundo(){
       alert('Holaaa Mundo')
       console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.
       
      //👉 type.- es el tipo de evento q se desencadeno
      //👉 target.- es el elemento que origino el evento
      
      //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
    }
    */
/* *************************************************************************************************************************************** */
    
   //2️⃣ COMO MANEJADOR SEMÁNTICO
    
   //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
   //👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
/*    const $eventoSemantico = document.getElementById('evento-semantico')
    $eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.
    
   //👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
     $eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
        alert(`Hola Manejador de Evento Semántico`)
        console.log(e)
        console.log(event)
     }
    
/* ************************************************************************************************************************************** */
     
   //3️⃣ COMO MANEJADOR MÚLTIPLE
   
   //👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
/*   const $eventoMultiple = document.getElementById('evento-multiple')
   //👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
   // 1° Nombre de evento
   // 2° Función q se va a ejecutar, pero sin parentesis
   $eventoMultiple.addEventListener('click', holaMundo)
   
   //👇 tmb podemos trabajar con una arrow function
   $eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
      alert(`Hola Manejador de Evento Múltiple`)
      console.log(e)
      console.log(e.type)
      console.log(e.target)
      console.log(event)
   } )
     
     
     
   //📝NOTA:
   //👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento   
   //👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
   //👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
   //👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
   //👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
 */






/* **********   DOM: Eventos con Parámetros y Remover Eventos      ********** */
/*
function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});


//para enviar algun parametro en un evento lo que debemos hacer es encerrarla en una funcion flecha o en una funcion anonima


$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Nestor");
});

//solo se puede remover algun evento cuando estamos usando el addeventlistener

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
  console.log(e);
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); 

*/




/* **********    DOM: Flujo de Eventos (Burbuja y Captura)     ********** */
/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: false, //false hace referencia a burbuja y true a captura
    once: true,//si es true solo se ejecuta 1 vez
  });
}); 
*/



/* **********    DOM: stopPropagation & preventDefault      
  con el stopPropagation lo que hacemos es detener la propagacion ya sea en burbuja o captura
  con el prevenDefault detenemos la accion que tendria por defecto un eveto 
  puede ser el caso de un enlace que nos dirige a una pagina y lo detenemos
********** */
/*
 const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation(); //con esto logramos que el flujo de los eventos se detenga en el que clickeamos
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  //Fase de burbuja
  div.addEventListener("click", flujoEventos); 
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
  //});
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy un enlace e ire a youtube...");
  e.preventDefault();
  e.stopPropagation();
}); 
*/





/* **********    DOM: Delegación de Eventos    
  es una manera de optimizar la aplicacion a nivel de recursos de memoria
  sabemos que no es optimo agregar un addeventlistener a cada elemento en el que nosotros quisieramos un evento
  en cambio cuando lo asignamos a un elemento padre imaginemos el caso de un formulario que no podemos estar asignando
  un evento pueda ser onchange onblur onfocus por cada elemento input que nosotros tengamos se lo podriamos asignar
  al elemento que es el padre el form y luego segun ocurra el evento detectamos que elemento fue el que lo causo
  incluso podriamos ir un poco mas alla y asignarselo al elemento document y luego con el target lo buscamos

  si pensamos un poco como el evento estara asignado al document ya no necesitariamos el trabajo de detener la propagacion
********** */
/* function flujoEventos(e) {
  console.log(
    `Hola te saluda ${e.target.className} el click lo originó ${e.target.className}`
  );
  console.log(e.target);
  //e.stopPropagation();
}

document.addEventListener("click", (e) => {
  //el evento matches busca un selector valido
  //validara a true cuando presionemos ese selector
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy un enlace e ire a youtube...");
    e.preventDefault();
    //e.stopPropagation();
  }
}); 
*/



/* **********    BOM: Propiedades y Eventos      
  Estos metodos hacen referencia a los metodos que tiene el objeto window
  anteriormente con el dom lo haciamos al document

********* */
/*
El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, 
sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.

El evento load se dispara cuando se ha detectado la carga completa de la página.

Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado para
Peticiones asíncronas pausan el parseo del DOM.
*/
 
//el evento resize se ejecuta cada vez que nosotros modifiquemos el tamaño de la ventana
/*window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth); //ancho de la pestaña
  console.log(window.innerHeight); //alto de la pestaña
  console.log(window.outerWidth); //ancho del navegador
  console.log(window.outerHeight); //alto del navegador
  console.log(e);
});

//cuando detecte algun scroll en el navegador
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); 
*/







/* **********    BOM: Métodos      ********** */
//window.alert("Alerta");
//window.confirm("Confirmación");
//window.prompt("Aviso");
/* const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener(
  "click",
  (e) => (ventana = window.open("https://youtube.com"))
);

$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => window.print()); */




/* **********   BOM: Objetos: URL, Historial y Navegador    
  react router vue router estan construidos con este tipo de objetos
  lo cual no es mucho importante conocerlos
 ********** */
 console.log("********** Objeto URL (location) **********");
console.log(location); //devuelve un objeto con propiedades de la locacion
console.log(location.origin);  // el origen es file:// xq lo abrimos desde el disco duro o cuando lo abrimos con el liveserver http://127.0.0.1:5500
console.log(location.protocol); // file: o http:
console.log(location.host); // con liveserver 127.0.0.1:5500
console.log(location.hostname); // con liveserver 127.0.0.1
console.log(location.port); // con liveserver 5500
console.log(location.href); //file:///D:/NACHO/PRACTICAS/JS/dom/index.html con liveserver http://127.0.0.1:5500/dom.html
console.log(location.hash); // es el valor de la url que esta despues de un hash url#<valor>  --- si la url es file:///D:/NACHO/PRACTICAS/JS/dom/index.html#contacto devuelve #contacto
console.log(location.search); // es el valor de la url que esta despues de un search url?nombre=<valor>&edad=<valor>  --- si la url es file:///D:/NACHO/PRACTICAS/JS/dom/index.html?nombre=nestor&edad=25 devuelve ?nombre=nestor&edad=25
console.log(location.pathname); //  /D:/NACHO/PRACTICAS/JS/dom/index.html con liveserver /index.html
//location.reload(); //recarga la pagina

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length); //longitud de cuantas paginas emos visitado
//history.forward(1); //para ir paginas hacia adelante acepta positivos
//history.go(-3); //para ir paginas hacia adelante o atras pero acepta negativos
//history.back(2); //para ir paginas hacia atras acepta positivos

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection); //da informacion de la coneccion del usuario - de momento no soportada por firefox
console.log(navigator.geolocation); //la localicacion
console.log(navigator.mediaDevices); //Dispositivos como camaras microfonos
console.log(navigator.mimeTypes); //Tipos de formatos que dependiendo del tipo de app soporta el navegador
console.log(navigator.onLine); //saber si estamos en linea o no
console.log(navigator.serviceWorker); //es un elemento importante es un api que nos ayuda a hacer PWA hacer que los sitios web puedan simular volverse apps de escritorio
console.log(navigator.storage); //es el api de almacenamiento ya sea webstorage o localstorage
console.log(navigator.usb); //la capacidad de detectar dispositivos usb
console.log(navigator.userAgent); //nos da informacion sobre el navegador que se conecta a nuestra app










































