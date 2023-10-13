
export function Menu(){

    const $menu = document.createElement("nav");

    $menu.innerHTML = `
        <a href="#/">Home</a> - 
        <a href="#/search">Busqueda</a> - 
        <a href="#/contacto">Contacto</a> - 
        <a href="https://aprendejavascript.org" target="_blank">Aprende JS</a>
    `;


    return $menu;
}

