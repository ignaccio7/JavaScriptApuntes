//Representara el componente padre de toda la aplicacion

// import api from './helpers/wp_api.js';

// import { ajax } from './helpers/ajax.js';

//COMPONENTS
// import { Title } from './components/Title.js';


import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
// import { PostCard } from './components/PostCard.js';
import { Router } from './components/Router.js';
import { InfiniteScroll } from './helpers/infinite_scroll.js';

export function App (){
    // document.getElementById("app").innerHTML = `<h1>Welcome to my first SPA in JavaScript</h1>`;

    // console.log(api);

    // ajax({
    //     url:api.POSTS,
    //     cbSuccess:(posts)=>{
    //         console.log(posts);
    //     }
    // });

    // ajax({
    //     url:api.CATEGORIES,
    //     cbSuccess:(categories)=>{
    //         console.log(categories);
    //     }
    // });
    const d=document,
        $app = d.getElementById("app");

    $app.innerHTML = null;
    
    $app.appendChild(Header());
    $app.appendChild(Main());
    $app.appendChild(Loader());

    // ajax({
    //     url:api.POSTS,
    //     cbSuccess:(posts)=>{
    //         console.log(posts);
    //         let html='';
    //         posts.forEach(post=>{
    //             html+=PostCard(post);                
    //         });

    //         document.getElementById("posts").innerHTML = html;

    //         document.querySelector(".loader").style.display = "none";

    //     }
    // });
    //esta funcion ajax lo mandaremos al router
    Router();

    //podemos generar un error

    // ajax({
    //     url:"abc",
    //     cbSuccess:()=>{}
    // });

    InfiniteScroll();

}



