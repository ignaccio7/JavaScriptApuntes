//el contenido de assets lo obtuvimos haciendo https://github.com/typicode/json-server
//no olvidar que para hacer correr el servidor de json
// json-server -w -p 5555 assets/db.json

const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();


//como ajax pide tantos pasos para realizar su peticion trataremos de optimizar su funcion ya que va siguiendo los mismos pasos para solicitar un recurso http
const ajax = (options) => {
    //vamos a destructurar todos los datos que necesitamos en cada peticion
    //url para hacer la peticion
    //method metodo post get put...
    //success sera una funcion en caso de exito
    //error sera una funcion en caso de error
    //data objeto de datos en caso que eliminemos editemos 
    let { url, method, success, error, data } = options; 
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange",e => {

        if (xhr.readyState !== 4 || url==="") return;

        if (xhr.status >= 200 && xhr.status< 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        }else{
            let message = xhr.statusText || 'Ocurrio un error';
            error(`Error ${xhr.status}: ${message}`);
        }
    });
    //si es vacio entonces sera get
    xhr.open(method || "GET",url);

    //para agregar cabeceras
    //sino especificamos la cabecera el valor por defecto es texto en plano por eso especificamos que es json
    xhr.setRequestHeader("Content-type","application/json;charset=utf-8");

    //para enviar los datos que recibamos y nuestra api recibe un texto parseamos el data
    xhr.send(JSON.stringify(data));

};

//para la petificon GET para obtejer los datos
const getAll = ()=>{
    // ajax({
    //     url:"http://localhost:5555/santos",
    //     method:"GET",
    //     success:(res)=>{ console.log(res); },
    //     error:(err)=>{ console.log(err); },
    //     data:null
    // });
    ajax({
        url:"http://localhost:5555/santos",        
        success:(res)=>{ 
            //console.log(res); 
            let $clone;
            res.forEach(element => {
               //agregamos los datos a la plantilla que utilizaremos
                $template.querySelector(".name").textContent = element.nombre;
                $template.querySelector(".constellation").textContent = element.constelacion;
                
                //agregamos data atributtes a los botones para que cuando nos toque eliminar o modificar los saquemos de ahi
                $template.querySelector(".edit").dataset.id = element.id;
                $template.querySelector(".edit").dataset.name = element.nombre;
                $template.querySelector(".edit").dataset.constellation = element.constelacion;

                $template.querySelector(".delete").dataset.id = element.id;

                $clone = d.importNode($template,true);//debemos clonar la etiqueta template ya que la usaremos posteriormente con los diferentes datos y true para que clone el contenido dentro
                $fragment.appendChild($clone);
            });

            //agregamos el fragmento a la tabla
            $table.appendChild($fragment);

        },
        error:(err)=>{ 
            //console.log(err); 
            //console.log($table.querySelector("tbody"));
            $table.querySelector("tbody").insertAdjacentHTML("afterbegin",`<p><b> ${err} </b> </p>`);
        },
    });
}


//la funcion de cargar datos GET se debe ejecutar una vez cargue el navegador asi que
d.addEventListener("DOMContentLoaded",(e)=>{
    getAll();
});

//para el post
d.addEventListener("submit",e=>{
    if (e.target === $form) {
        e.preventDefault();

        if(!e.target.id.value){
            //CREATE POST
            ajax({
                url:"http://localhost:5555/santos",
                method:"POST",
                success:(res)=>location.reload(),//por defecto jsonserver recarga la pagina despues de una solicitud post
                error:(err)=> $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`),
                data:{
                    nombre:$form.nombre.value,
                    constelacion:$form.constelacion.value
                }
            });
        }else{
            //UPDATE PUT
            ajax({
                url:`http://localhost:5555/santos/${$form.id.value}`,
                method:"PUT",
                success:(res)=>location.reload(),
                error:(err)=>$form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`),
                data:{
                    nombre:$form.nombre.value,
                    constelacion:$form.constelacion.value
                }
            });
        }    

    }
});

//para el put
d.addEventListener("click",(e)=>{
    if (e.target.matches(".edit")) {
        $form.nombre.value = e.target.getAttribute("data-name");
        $form.constelacion.value = e.target.dataset.constellation;
        $form.id.value = e.target.getAttribute("data-id");

        $title.textContent = "Modificando Santo";
    }

    if (e.target.matches(".delete")) {
        //alert("eliminando");
        let isDelete = confirm(`Estas seguro de eliminar a ${e.target.dataset.id}`);
        //console.log(isDelete);
        if (isDelete) {
            ajax({
                url:`http://localhost:5555/santos/${e.target.dataset.id}`,
                method:"DELETE",
                success:(res)=>location.reload(),
                error:(err)=>alert(err)
            });
        }
    }

});




















