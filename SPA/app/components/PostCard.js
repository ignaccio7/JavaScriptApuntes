
export function PostCard(props){

    let { title, date, slug, _embedded, id } = props;
    let dateFormat = new Date(date).toLocaleString();

    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";

    document.addEventListener("click",e=>{
        // if (e.target.matches(".post-card a")) {
        if (!e.target.matches(".post-card a")) return false;
        localStorage.setItem("wpPostId",e.target.dataset.id)
    })

    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h3>${title.rendered}</h3>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
            </p>            
        </article>
    `;

}


