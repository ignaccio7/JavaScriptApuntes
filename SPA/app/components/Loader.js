
export function Loader(){
    const $loader = document.createElement("img");
    //como el componente se esta renderizando en el index entonces hacemos referencia al source desde el index
    //$loader.setAttribute("src","../assets/loader.svg");
    $loader.setAttribute("src","./app/assets/loader.svg");
    $loader.alt = "Cargando...";
    $loader.classList.add("loader");

    return $loader;
}

