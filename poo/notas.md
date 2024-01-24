# POO programacion orientada a objetos

Es un estilo de programacion utilizado donde creas estructuras de datos de forma *similar a la vida real*, esto facilita considerablemente la forma de planificar y preparar el codigo de programas o aplicaciones.

La parte compleja en el mundo de programacion es a la hora de *crear estructuras de datos*. 

Conforme nuestro codigo en la aplicacion va creciendo vamos teniendo una gran cantidad de variables y funciones que al estar inconexas es facil ir añadiendo una sobre otra y que el codigo llegue a descontrolarse.

Es por eso que necesitamos una forma de organizar las variables y constantes para tenerlo todo agrupado de modo que con el tiempo sea sencillo de entender, modificar y ampliar. A esta agrupacion se denomina una clase.

## Clases

Las variables y constantes incluidas en una clase se denominan propiedads y se utilizan para guardar informacion relacionada (se suele denominar estado)
Por otro lado, las funciones incluidas en una clase se denominan metodos y se utilizan para realizar una accion relacionada a la clase.

### Ejemplo

Piensa, por ejemplo, en el protagonista (héroe) de un juego. Tiene una serie de variables relacionadas con él (vidas, fuerza, energía, etc...), pero también tiene una serie de funciones relacionadas con él (hablar, disparar, curar, etc...). Todas ellas, las podríamos agrupar en una clase porque tienen relación con ese concepto de personaje:

---

Personaje
----------

- Vidas restantes (propiedad)      # Número de vidas que le quedan al personaje
- Fuerza (propiedad)               # Número que representa la fuerza del personaje
- Energía (propiedad)              # Número que representa la energía de la vida actual
- Velocidad (propiedad)            # Número que representa la velocidad actual del personaje
- Hablar (método)                  # Función que hará que el personaje diga algo
- Disparar (método)                # Función que hará que el personaje dispare con su arma
- Curar (método)                   # Función que hará que el personaje use un botiquín

---

Sin embargo, el concepto de *Clase* es un concepto abstracto. En el juego, por ejemplo, podríamos tener dos héroes que podemos elegir al principio. Ambos héroes tienen los mismos atributos y funciones, pero son dos personajes diferentes. Por esa razón, en la *programación orientada a objetos* se tiene un concepto llamado *Clase* y otro concepto llamado *Objeto*:

![Imagen acerca de la relacion de la clase con sus propiedades y metodos](https://lenguajejs.com/javascript/oop/que-es/programacion-orientada-objetos.png "Clase Objetos Propiedades Metodos")

El primero de ellos, la *Clase* se refiere al concepto abstracto de personaje, mientras que el segundo de ellos, el *objeto* se refiere a un elemento particular. Por ejemplo, la *clase* podría ser Personaje, mientras que los objetos serían Mario y Luigi, ya que ambos se basan en un Personaje, pero tienen sus detalles particulares (Mario podría tener más vida, o Luigi más energía, diferentes velocidades, etc...).

### Similitud con la vida real

Además de proveernos una forma de agrupar y organizar nuestro código y crear nuevos elementos basados en ellas sin repetirnos, las clases nos ofrecen una forma similar a la vida real de crear estructuras de datos, que de otra forma podría ser mucho más complejo.

Si por ejemplo, necesitaramos añadir una variable que indique la velocidad que tiene el personaje, podríamos añadir una propiedad denominada velocidad que contenga un 5. Luego, podríamos incluir un método denominado correr que cambie esa propiedad velocidad a 10, y un método denominado caminar que la vuelva a cambiar a 5.

Como ves, se trata de una forma que se asemeja bastante al mundo real, y puede ser mucho más sencillo para nosotros crear estructuras de datos para nuestros programas porque sólo tenemos que pensar en el elemento en la vida real, e imitarlo al programarlo.

Todo esto puede complicarse bastante, pero una vez sentadas estas bases, ya podemos comenzar a ver un poco de código para entender como funciona la Programación orientada a objetos en Javascript.

> Tradicionalmente, Javascript no soportaba clases de forma nativa, pero en ECMAScript 2015  se introdujo la posibilidad de usar clases simulando como se utilizan en otros lenguajes de programación. Internamente, Javascript traduce estas clases al sistema basado en prototipos que usa en realidad, sin embargo, los programadores no necesitarán saber como funcionan los prototipos, sino que les bastará con utilizar las clases a modo de azúcar sintáctico, es decir, un sistema que «endulza» la forma de trabajar para que sea más agradable y familiar.

### ¿Qué es una Clase?

Como mencionamos en el apartado anterior, una clase sólo es una forma de organizar código de forma entendible con el objetivo de simplificar el funcionamiento de nuestro programa. Además, hay que tener en cuenta que las clases son «conceptos abstractos» de los que se pueden crear objetos de programación, cada uno con sus características concretas.

Esto puede ser complicado de entender con palabras, pero se ve muy claro con ejemplos:

![Imagen con ejemplos de clases con sus objetos](https://lenguajejs.com/javascript/oop/clases/clases-objetos.png "Ejemplo de Clases y Objetos")

En primer lugar tenemos la clase. La clase es el concepto abstracto de un objeto, mientras que el objeto es el elemento final que se basa en la clase. En la imagen anterior tenemos varios ejemplos:

1. En el primer ejemplo tenemos dos objetos: pato y ratón. Ambos son animales, por lo que son objetos que están basados en la clase Animal. Tanto pato como ratón tienen las características que estarán definidas en la clase Animal: color, sonido que emiten, nombre, etc...

2. En el segundo ejemplo tenemos dos objetos seat y opel. Se trata de dos coches, que son vehículos, puesto que están basados en la clase Vehículo. Cada uno tendrá las características de su clase: color del vehículo, número de ruedas, marca, modelo, etc...

3. En el tercer ejemplo tenemos dos objetos cuadrado y c2. Se trata de dos formas geométricas, que al igual que los ejemplos anteriores tendrán sus propias características, como por ejemplo el tamaño de sus lados. El elemento cuadrado puede tener un lado de 3 cm y el elemento c2 puede tener un lado de 6 cm.

### Instanciar una clase

Se le llama instanciar una clase, crear un objeto o crear una instancia a la acción de crear un nuevo objeto basado en una clase particular. Esta acción la realizamos a través de la palabra clave new, seguida del nombre de la clase, la cuál puede tener parámetros, en cuyo caso se controlarían desde un constructor, concepto que veremos más adelante.

En Javascript, para instancia una clase, se utiliza una sintaxis muy similar a otros lenguajes como, por ejemplo, Java. Es tan sencillo como escribir lo siguiente:

```javascript
// Declaración de una clase (de momento, vacía)
class Animal {}

// Crear (instanciar) un objeto basada en una clase
const pato = new Animal();
```

Observa que luego creamos una variable donde hacemos un new Animal(). Estamos creando un objeto pato que es de tipo Animal, y que contendrá todas las características definidas dentro de la clase Animal (de momento, vacía).

> Una norma de estilo en el mundo de la programación es que las clases deben siempre empezar en mayúsculas (nomenclatura llamada PascalCase). Esto nos ayudará a diferenciarlas sólo con leerlas. 

### Miembros de una clase

Una clase tiene diferentes características que la forman, que generalmente se denominan miembros, y que normalmente son de dos tipos: propiedades y métodos. Vamos a ir explicándolas detalladamente. Pero primero, una tabla general para verlas en conjunto, con sus tipos:


| Elemento	| Descripción	| Más información|
|-----------|---------------|-----------------------|
|Propiedad	|Variable que existe dentro de una clase. Puede ser pública o privada.|	Ver propiedades
|Propiedad pública|	Propiedad a la que se puede acceder desde fuera de la clase.|
|Propiedad privada |	Propiedad a la que no se puede acceder desde fuera de la clase.|
|Propiedad computada |	Función para acceder a una propiedad con modificaciones (getter/setter).|
|Método |	Función que existe dentro de una clase. Puede ser pública o privada.|	Ver métodos|
|Método público |	Método que se puede ejecutar desde dentro y fuera de la clase.|
|Método privado |	Método que sólo se puede ejecutar desde dentro de la clase.|
|Constructor |	Método especial que se ejecuta automáticamente cuando se crea una instancia.|
|Método estático |	Método que se ejecuta directamente desde la clase, no desde la instancia.|
|Inicializador estático |	Bloque de código que se ejecuta al definir la clase, sin necesidad de instancia.|

Como vemos, todos estas características se dividen en dos grupos:

* Las propiedades: a grandes rasgos, variables dentro de clases
* Los métodos: a grandes rasgos, funciones dentro de clases

Un ejemplo sencillo de cada uno:

```javascript
class Animal {
  // Propiedades
  name = "Garfield";
  type = "cat";

  // Métodos
  hablar() {
    return "Odio los lunes."
  }
}
```

### La palabra clave this

Más adelante utilizaremos mucho la palabra clave this. Esta es una palabra clave que se utiliza mucho dentro de las clases para hacer referencia al objeto instanciado. Ojo, que hace referencia al objeto instanciado y no a la clase:

```javascript
class Animal {
  name;                 // Propiedad (variable de clase sin valor definido)

  constructor(name) {
    this.name = name;   // Hacemos referencia a la propiedad name del objeto instanciado
  }
}
```
Observa que la palabra clave this no se refiere a la clase Animal exactamente, sino a la variable que utilizamos al instanciarla. Es decir, si hacemos un const pato = new Animal(), se ejecutaría el constructor y la palabra clave this haría referencia a pato, por lo que this.name estaría haciendo referencia a pato.name.

Es importante tener mucho cuidado con la palabra clave this, ya que en muchas situaciones creemos que devuelve una referencia al elemento padre que la contiene, pero en su lugar, devolverá el objeto Window, ya que se encuentra fuera de una clase o dentro de una función con otro contexto:

```javascript
function hello() {
  return this;
}

hello();                      // Window
const object = { hello }      // Metemos la función dentro del objeto
object.hello() === object;    // true
```
En este caso, podemos ver que si ejecutamos la función hello() en un contexto global, nos devuelve el padre, es decir, el objeto Window. Sin embargo, si metemos la función hello() dentro de un objeto , al ejecutar object.hello() nos devuelve el padre, es decir, el propio objeto object.

> Ten cuidado al utilizar this. Asegúrate siempre de que this tiene el valor que realmente crees que tiene.

### Clases en ficheros externos

Generalmente, para tener el código lo más organizado posible, las clases se suelen almacenar en ficheros individuales, de forma que cada clase que creamos, debería estar en un fichero con su mismo nombre:

```javascript
// Animal.js

export class Animal {
  /* Contenido de la clase */
}
```

Luego, si queremos crear objetos basados en esta clase, lo habitual suele ser importar el fichero de la clase en cuestión y crear el objeto a partir de la clase. Algo similar al siguiente fragmento de código:


```javascript
// index.js

import { Animal } from "./Animal.js";

const pato = new Animal();
```

Si nuestra aplicación se complica mucho, podríamos comenzar a crear carpetas para organizar mejor aún nuestros ficheros de clases, y por ejemplo, tener la clase Animal.js dentro de una carpeta classes (o algo similar). Esto nos brindaría una mejor experiencia de desarrollo, pero el nombre de las carpetas o su organización ya dependería del desarrollador o del equipo de desarrollo.


### Nombrado de miembros

En los próximos capítulos ya profundizaremos en las propiedades y los métodos de una clase, pero una buena práctica para no confundirnos a la hora de utilizarlos, es a la hora de ponerles nombres. Es muy aconsejable que las propiedades de una clase tengan nombre de sustantivos (son elementos, valores, ítems...), mientras que los métodos de una clase deberían tener nombre de verbos (son acciones, operaciones, etc...).

Otro buen consejo, mucho más general, es que intentes escribir código en inglés, ya que eso hará que el código que hagas sea mucho más universal, y sea más fácil de modificar por otras personas.

```bash
Personaje.js                        Personaje.js                  Vida.js
-------------                       -------------                 --------

- Vidas restantes (propiedad)       - Vida (propiedad) ------->   - Vidas restantes (propiedad)
- Fuerza (propiedad)                - Fuerza (propiedad)          - Energía (propiedad)
- Energía (propiedad)               - Hablar (método)             - Curar (método)
- Velocidad (propiedad)             - Disparar (método)
- Hablar (método)
- Disparar (método)
- Curar (método)
```

En este ejemplo, hemos separado en una nueva clase Vida en el fichero Vida.js, los conceptos Vidas restantes, Energía y Curar ya que tienen relación entre sí (hacen referencia a la vida del personaje), de modo que ahora en la clase Personaje simplemente tenemos una propiedad que hace referencia a un objeto de esa clase Vida, con sus valores particulares.

Esto hará que, si el fichero Personaje.js ocupaba demasiadas líneas, consigamos reducirlas, puesto que hemos movido parte de su código a otro fichero, y de paso hemos mejorado mucho nuestro código, ya que ahora está separado en temas más específicos, que son más pequeños y más fáciles de controlar.

https://lenguajejs.com/javascript/oop/propiedades-clase/





















```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```










