//https://developer.wordpress.org/rest-api/reference/
//LAS CONSTANTES EN JS LAS ESCRIBIMOS EN UPPERCASE
const NAME = "css-tricks", //o se puede probar con css-tricks o malvestida o cualquier otro sitio echo con wordpress
    DOMAIN = `https://${NAME}.com`,
    SITE = `${DOMAIN}/wp-json`, //DEVUELVE LA INFORMACION EN FORMATO JSON DEL SITIO QUE VAMOS A COMSUMIR
    API_WP = `${SITE}/wp/v2`,//NOS DEVUELVE INFORMACION MAS DETALLADA DEL SISTIO
    PER_PAGE = 10, //NRO DE POST A SOLICITAR
    POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`, //PARA ACCEDER A TODOS LOS POSTS y para que nos traiga toda la informacion ya sea la categoria etiquetas ids colocamos embed ... per_page cuantas post traemos por pagina
    POST = `${API_WP}/posts`,//para obtener la info de un post en particular
    SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;//PARA EL BUSCADOR

let page = 1;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    SEARCH,
    page
}



