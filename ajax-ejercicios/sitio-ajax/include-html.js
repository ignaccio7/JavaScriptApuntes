
let replaceHTML = async (elemento, url) => {
    try {
        let response = await fetch(url,{
            method:"GET",
            headers:{
                "Content-type":"text/html ; charset=utf-8"
            }
        });

        if(!response.ok) throw new Error("Nose pudo cargar el contenido");

        let tag = await response.text();
        elemento.outerHTML = tag;        
    } catch (error) {
        elemento.textContent = error;
    }
};

document.addEventListener("DOMContentLoaded",(e)=>{
    let getTags = document.querySelectorAll("[data-include]");
    getTags.forEach(elem=>{
        replaceHTML(elem,elem.getAttribute("data-include"));
    });
});



