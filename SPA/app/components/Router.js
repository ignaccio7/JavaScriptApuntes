
import api from "../helpers/wp_api.js";
import { ajax } from '../helpers/ajax.js';
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";


export async function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("main");

    let { hash } = location;
    //console.log(hash);
    $main.innerHTML = "";

    if (!hash || hash === '#/') {
        // $main.innerHTML = "Inicio";
        $main.classList.add("grid-fluid");
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                console.log(posts);
                let html = '';
                posts.forEach(post => {
                    html += PostCard(post);
                });

                d.getElementById("main").innerHTML = html;

                // d.querySelector(".loader").style.display = "none";

            }
        });
    } else if (hash.includes("#/search")) {
        // $main.innerHTML = "Busqueda";
        let query = localStorage.getItem("wpSearch");

        
        // if (!query || query===null) return d.querySelector(".loader").style.display = "none";
        if (!query || query===null){            
            d.querySelector(".loader").style.display = "none";
            $main.innerHTML = '';
            return false;
        }
        
        console.log(`${api.SEARCH}${query}`);

        await ajax({
            url:`${api.SEARCH}${query}`,
            cbSuccess:(search)=>{
                console.log("search");
                console.log(search);
                let html = ``;
                
                if (search.length === 0) {
                    html = `
                        <p class="error">
                            No existen resultados de busqueda para el termino <mark>${query}</ma>
                        </p>
                    `;
                } else {
                    search.forEach(post =>{
                        html += SearchCard(post);
                    });
                }

                $main.innerHTML = html;

            }
        });

    } else if (hash === "#/contacto") {
        // $main.innerHTML = "Contacto";
        $main.innerHTML = '';
        $main.appendChild(ContactForm());
    } else {
        // $main.innerHTML = "Contenido del post previamente seleccionado";
        console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`);
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                console.log(post);
                $main.innerHTML = Post(post);
            }
        });        
    }

    d.querySelector(".loader").style.display = "none";

}

