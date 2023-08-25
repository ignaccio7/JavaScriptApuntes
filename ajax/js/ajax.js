//XMLHttpRequest
//lo encerraremos en un funcion anonima autoejecutable
(() => {
    //1ro instanciamos al objeto de tipo xml----
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    //console.log(xhr);//esta es el objeto de la api que tendra multiples eventos con los cuales se nos permitira realizar la peticion

    //2do Debemos declaral el o los eventos que manejaremos de la peticion
    //este evento se lanzara cuando detecta cualquier cambio de estado todos los demas eventos reciden de este evento
    xhr.addEventListener("readystatechange", (e) => {
        //5to console.log(xhr); se imprimira aqui 4 veces por los estados de peticion explicados en el html el 0 no cuenta -- loading,loaded,interactive,complete
        /*
        if (xhr.readyState === 4) { //asi aseguramos que la peticion ya se completo
            console.log(xhr);
        } */
        
        if(xhr.readyState !== 4) return;

        //console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("Exito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = `${xhr.responseText}`;
            let json = JSON.parse(xhr.responseText);
            //console.log(xhr.responseText);
            //console.log(json);
            json.forEach(elem=>{
                const $li = document.createElement("li");
                $li.innerHTML = `name:${elem.name} -- email:${elem.email} -- phone:${elem.phone} `;
                $fragment.appendChild($li);                                
            });
            $xhr.appendChild($fragment);

        }else{
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.outerText = `Error ${xhr.status} : ${message}`;
            //console.log("Error");
        }

        //console.log("Este mensaje se cargara de cualquier forma");
        
    });

    //3ro la instruccion que abrira la peticion
    //(<parametroporelcualNosComunicamos>,<urloRecurso de la peticion>)
    //xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.open("GET", "assets/users.json");
    //4to enviamos la peticion con o sin datos depende las necesidades
    xhr.send();


})();



//FETCH
(()=>{
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

        /*
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    });
        */
    
    // fetch("assets/users.json")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        //console.log(res);
        //nos devuelve en el body un ReadebleStream que podria ser datos en formato json (metodo json) o una imagen en base64 o dataUri (metodo blob para aquello que no es texto) o podria ser texto plano (metodo text)
        //return res.json();
        return res.ok ? res.json() : Promise.reject(res); //hacemos esto ya que por algun tipo de error no iba al catch
    })
    .then(json => {
        //console.log(json);
        //$fetch.innerHTML = json;
        json.forEach(elem=>{
            const $li = document.createElement("li");
            $li.innerHTML = ` name:${elem.name} -- email:${elem.email} -- phone:${elem.phone} `;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);

    })
    .catch(err=>{
        //console.log("Estamos en el catch");
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.outerText = `Error ${err.status} : ${message}`;
    })
    .finally(()=>{
        //console.log("Este mensaje se cargara de cualquier forma");
    });

})();


//FETCH - ASYNC AWAIT
(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            //let response = await fetch("assets/users.json");
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await response.json();
    
            //console.log(response);
            //console.log(json);   
            
            //para que nos devuelva el error en el catch aqui lo manejamos ya que sino no va
            //if(!response.ok) throw new Error("Ocurrio un error al solicitar los datos"); //pero aqui el Error solo puede recibir un string nada mas
            if(!response.ok) throw { status: response.status, statusText: response.statusText };

            json.forEach(elem => {
                const $li = document.createElement("li");
                $li.innerHTML = ` ${elem.name} -- ${elem.email} -- ${elem.phone} `;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        } catch (error) {
            console.log("Error en el catch");
            console.log(error);
            let message = error.statusText || "Ocurrio un fallo";
            $fetchAsync.outerText = ` Error ${error.status}: ${message} `;
        } finally {
            //console.log("Este codigo se ejecuta independientemente del try catch");
        }


    }

    getData();
    
})();


//AXIOS - PROMISE
(()=>{
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        // console.log(response);
        // console.log(response.data);
        let json = response.data;
        json.forEach(elem =>{
            const $li = document.createElement("li");
            $li.innerHTML = ` ${elem.name} -- ${elem.email} -- ${elem.phone} `;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);

    })
    .catch(error=>{
        //console.log("Error en el catch");
        //console.log("error:"+error);
        //console.log(error);
        let message = error.response.statusText || "Ocurrio un fallo axios!";
        $axios.outerText = ` Error ${error.response.status} : ${message} `;
    })
    .finally(()=>{
        // console.log("Se ejecutara al final siempre");
    });

})();


//AXIOS - ASYNC AWAIT
(()=>{

    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();
    
    async function getData(){
        try{
            let response = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = response.data;
                
            //console.log(json);

            json.forEach(elem =>{
                const $li = document.createElement("li");
                $li.textContent = `${elem.name} -- ${elem.email} -- ${elem.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);

        }catch(err){
            //console.log("Error en el catch");
            //console.log(err);
            let message = err.response.statusText || "Fallo en axios async";
            $axiosAsync.outerText = `Error ${err.response.status}: ${message}`;
        }finally{
            console.log("Este codigo se ejecutara independientemente del try o catch");
        }
    }

    getData();

})();































