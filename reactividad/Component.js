
const Component = (function(){
    //Creamos el constructor del componente
    const Constructor = function(options){
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }

    //Agregamos los metodos al protopipo del constructor componente

    //Render UI
    Constructor.prototype.render = function(){
        const $element = document.querySelector(this.el);
        if (!$element) {
            return
        }
        $element.innerHTML = this.template(this.data);

        console.log(this.data);
    };

    //Actualizar el State de forma reactiva
    Constructor.prototype.setState = function(object){
        for (const key in object) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = object[key];                
            }
        }
        this.render();
    };

    //Obtenemos una copia inmutable del estado
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.data));
    };

    return Constructor;

})();


