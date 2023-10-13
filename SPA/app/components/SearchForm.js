
export function SearchForm(){
    const d = document,
        $searchForm = d.createElement("form"),
        $input = d.createElement("input"),
        $submit = d.createElement("input");
    
    $submit.type = "submit";
    $submit.value = "🔍";

    $searchForm.classList.add("search");

    $input.name="search";
    $input.type="search";
    $input.placeholder="Buscar...";
    

    if (location.hash.includes("#/search")) {
        $input.value=localStorage.getItem('wpSearch');
    }
    
    $searchForm.appendChild($input);
    $searchForm.appendChild($submit);

    d.addEventListener("search",e=>{
        if (!(e.target.matches("input[type='search']"))) return false;

        if (!e.target.value) {
            console.log("ELIMINAR EL CONTNEIDO MAIN");
            localStorage.removeItem("wpSearch");
            d.getElementById("main").innerHTML='';
        }

    })

    d.addEventListener("submit",(e)=>{
        if (!(e.target === $searchForm)) return false;

        e.preventDefault();
        localStorage.setItem("wpSearch",e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;

    });

    return $searchForm;
}


