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

### Propiedades de una clase 

Las clases, siendo estructuras para guardar y almacenar información, tienen unas variables que viven dentro de la clase. Esta información (también llamada estado) se denomina propiedad o propiedad de clase y desde ECMAScript 2020  para crearlas se hace de la siguiente forma:


```javascript
class Personaje {
  name;                 // Propiedad sin definir (undefined)
  type = "Player";      // Propiedad definida
  lifes = 5;            // Propiedad definida con 5 vidas restantes
  energy = 10;          // Propiedad definida con 10 puntos de energía
}
```
Tradicionalmente en Javascript, las propiedades acostumbraban a definirse a través del constructor, mediante la palabra clave this, por lo que es muy probable que también te las encuentres declaradas de esta forma, sin necesidad de declararlas fuera del constructor:

```javascript
class Personaje {
  constructor() {
    this.name;                 // Propiedad sin definir (undefined)
    this.type = "Player";      // Propiedad definida
    this.lifes = 5;            // Propiedad definida con 5 vidas restantes
    this.energy = 10;          // Propiedad definida con 10 puntos de energía
  }
}
```

Puesto que se trata de propiedades de clase y el constructor() es un método que se ejecuta cuando se crea el objeto (instancia de clase), ambas son equivalentes, ya que al crear un objeto se ejecutará el constructor y se crearán esas propiedades.

A la hora de utilizarlas, simplemente accedemos a ellas de la misma forma que vimos en el último ejemplo, haciendo uso de la palabra clave this. Veamos un ejemplo un poco más elaborado, utilizando propiedades y métodos:

```javascript
class Personaje {
  name;                 // Propiedad sin definir (undefined)
  type = "Player";      // Propiedad definida
  lifes = 5;            // Propiedad definida con 5 vidas restantes
  energy = 10;          // Propiedad definida con 10 puntos de energía

  constructor(name) {
    this.name = name;   // Modificamos el valor de la propiedad name
    console.log(`¡Bienvenido/a, ${this.name}!`);  // Accedemos al valor actual de la propiedad name
  }
}

const mario = new Personaje("Mario");   // '¡Bienvenido/a, Mario!'
```

> A class may only have one constructor (Una clase en JS puede tener solamente un Constructor)

Como se puede ver, estas propiedades existen en la clase, y se puede establecer de forma que todos los objetos tengan el mismo valor, o como en el ejemplo anterior, tengan valores diferentes dependiendo del objeto en cuestión, pasándole los valores específicos por parámetro.


### Visibilidad de propiedades

Observa que, las propiedades de clase siempre van a tener una visibilidad específica, que puede ser pública (por defecto) o privada. En el primer caso, las propiedades pueden ser leídas o modificadas tanto desde dentro de la clase como desde fuera, en el segundo caso, sólo pueden ser leídas o modificadas desde el interior de la clase.

|Nombre	|Sintaxis|	Descripción|
|-------|---------|-------------|
|Propiedad pública |	name o this.name	| Se puede acceder a la propiedad desde dentro y fuera de la clase.|
|Propiedad privada |	#name o this.#name |	Se puede acceder a la propiedad sólo desde dentro de la clase.|

### Propiedades públicas

Por defecto, las propiedades en las clases son públicas. Observa que siempre vamos a poder acceder a las propiedades desde el constructor u otros métodos (dentro de la clase), ya sean propiedades públicas o privadas:

```javascript
class Personaje {
  name;
  energy = 10;

  constructor(name) {
    this.name = name;
  }
}

const mario = new Personaje("Mario");     // { name: "Mario", energy: 10 }
mario.name;                               // "Mario" (se puede acceder desde fuera)
mario.name = "Evil Mario";
mario.name;                               // "Evil Mario" (se ha modificado desde fuera)
```

Observa también que en las últimas líneas, accedemos a la propiedad name desde fuera de la clase y la modificamos. Esto ocurre porque es una *propiedad pública*, y es posible hacerlo.

### Propiedades privadas

A partir de la versión *ECMAScript 2020*, se introduce la posibilidad de crear propiedades de clase privadas. Por defecto, todas las propiedades y métodos son públicos por defecto, sin embargo, si añadimos el carácter # justo antes del nombre de la propiedad, se tratará de una propiedad privada:


```javascript
class Personaje {
  #name;
  energy = 10;

  constructor(name) {
    this.#name = name;
  }
  showName(){
    console.log(this.#name)
  }
}

const mario = new Personaje("Mario");     // { name: "Mario", energy: 10 }

// Es incorrecto, el nombre correcto de la propiedad es #name
mario.name; // undefined

// Los dos siguientes dan el mismo error (no se puede acceder a la propiedad privada)
// Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
//mario.#name;
//mario.#name = "Evil Mario";

// Lo siguiente funcionará, pero ha creado otra propiedad 'name' que no es la misma que '#name'
//mario.name = "Evil Mario 2";
//console.log(mario.name) // Evil Mario 2"
mario.showName(); // Mario
```

Como se puede ver, las propiedades precedidas del carácter # son automáticamente privadas y sólo se podrá acceder a ellas desde un método de clase, ya que si se hace desde fuera obtendremos un error similar al siguiente:

> Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

Sin embargo, si se llama a un método público, que a su vez accede a la propiedad privada mediante this.#name todo funcionará correctamente, ya que ese método público si es accesible desde fuera de la clase y la propiedad privada si es accesible desde dentro de la clase.

### Ámbitos de propiedades de clase

Dentro de una clase tenemos dos tipos de ámbitos: *ámbito de método* y *ámbito de clase*. En primer lugar, veamos el ámbito dentro de un método. Si declaramos propiedades dentro de un método con let o const, estos elementos existirán sólo en el método en cuestión. Además, no serán accesibles desde fuera del método:

```javascript
class Personaje {
  constructor() {
    const name = "Manz";
    console.log("Constructor: " + name);
  }

  method() {
    console.log("Método: " + name);
  }
}

const c = new Personaje(); // 'Constructor: Manz'

c.name;       // undefined
c.method();   // 'Método: '
```

Observa que la variable name solo se muestra cuando se hace referencia a ella dentro del constructor() que es donde se creó y el ámbito donde existe.

En segundo lugar, tenemos el ámbito de clase. Si creamos propiedades de las dos formas que vimos al principio del artículo:

* Precedidas por this. desde dentro del constructor ES2015
* Al inicio de la clase, fuera del constructor ES2020

En cualquiera de estos dos casos, las propiedades tendrán alcance en toda la clase, por lo que podremos acceder a ellas tanto desde el constructor, como desde otros métodos de la clase:

```javascript
class Personaje {
  name = "Manz";           // ES2020+

  constructor() {
    this.name = "Manz";    // ES2015+
    console.log("Constructor: " + this.name);
  }

  metodo() {
    console.log("Método: " + this.name);
  }
}

const c = new Personaje(); // 'Constructor: Manz'

c.name;     // 'Manz'
c.metodo(); // 'Método: Manz'
```

> Recuerda que si quieres evitar que estas propiedades de clase se puedan modificar desde fuera de la clase, añade el # antes del nombre de la propiedad al declararla. De esta forma serán propiedades privadas, y sólo se podrá acceder a ellas desde el interior de los métodos de la clase.

### Propiedades computadas

En algunos casos nos puede interesar utilizar lo que se llaman propiedades computadas. Las propiedades computadas son un tipo de propiedad especial que se declara como una función, y que se ejecuta cuando accedemos a la propiedad con dicho nombre. Hay dos tipos de propiedades computadas, los getters y los setters.

#### Propiedades get (getters)

Veamos el primer caso, la propiedad computada get o también llamada getter. Para definirla, simplemente añadimos la palabra clave get antes del nombre de la función. De resto, se define exactamente igual que una función:

```javascript
class Personaje {
  name;
  energy;

  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }

  get status() {
    return '⭐'.repeat(this.energy);
  }
}

const mario = new Personaje("Mario");
mario.energy    // 10
mario.status    // '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐'
```

Observa que aunque la definimos como una función status(), luego accedemos a ella como una propiedad mario.status. Por eso se llama propiedad computada. La idea de este tipo de propiedades, es permitir pequeñas modificaciones sobre propiedades ya existentes (en nuestro caso, energy). En lugar de devolver el valor numérico, devolvemos el número de estrellas que representa la vida del personaje.

> Ten mucho cuidado con acceder a la misma propiedad definida desde dentro del get. Si dentro del get status() accedes a this.status, se produciría un bucle infinito que podría bloquear el navegador.

#### Propiedades set (setters)

De la misma forma que podemos crear un get para obtener un valor, podemos utilizar un set para establecerlo. La idea es exactamente la misma, pero para modificar el valor. En este caso, el ejemplo no es tan didáctico, pero vamos a dar la funcionalidad inversa. Si establecemos un número de estrellas a status, las cuenta y asigna el número a energy:

```javascript
class Personaje {
  name;
  energy;

  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }

  get status() {
    return '⭐'.repeat(this.energy);
  }

  set status(stars) {
    this.energy = stars.length;
  }
}

const mario = new Personaje("Mario");
mario.status    // '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐'
mario.energy    // 10
mario.status = '⭐⭐⭐'
mario.energy    // 3
mario.status    // '⭐⭐⭐'
console.log(mario)
```
Observa que ahora la "magia" está en el set status(stars). Se comporta como una función, y al asignar tres estrellas a mario.status, automágicamente se ha cambiado el valor de mario.energy. Estas propiedades computadas nos pueden venir muy bien cuando queramos modificar ligeramente ciertos elementos de una forma automática y organizada.

### Constructor de clase

Se le llama constructor a un método de clase especial que se ejecuta automáticamente cuando se hace un new de dicha clase (al instanciar el objeto). Una clase solo puede tener un constructor, y en el caso de que no se especifique un constructor a una clase, tendrá uno vacío de forma implícita.

Veamos el ejemplo anterior, donde añadiremos un constructor a la clase:

```javascript
class Animal {
  constructor() {
    console.log("Ha nacido un pato. 🦆");
  }

  hablar() {
    return "Cuak";
  }
}

// Creación de instancia/objeto
const pato = new Animal();  // 'Ha nacido un pato' (Se ha ejecutado implicitamente el constructor)
pato.hablar();              // 'Cuak' (Se ha ejecutado explícitamente el método hablar)
```

### ¿Qué es un método estático?

En el caso anterior, al utilizar un método como por ejemplo hablar(), debemos crear el objeto basado en la clase haciendo un new Animal(). Es lo que se denomina crear un objeto, crear una instancia de clase o instanciar un objeto.

Sin embargo, nos podría interesar crear métodos estáticos en una clase, ya que este tipo de métodos no requieren crear una instancia, sino que se pueden ejecutar directamente sobre la clase:

```javascript
class Animal {
  raza = 'perro'
  static despedirse() {
    return "Adiós";
  }

  hablar() {
    return "Cuak";
  }
  
  static saludo(){    
    console.log("la raza es:"+this.raza)    
  }
  
}

//Animal.despedirse();        // Método estático (no requiere instancia): 'Adiós'
//Animal.hablar();            // Uncaught TypeError: Animal.hablar is not a function

const pato = new Animal();  // Creamos una instancia
console.log(pato.raza)
Animal.despedirse();          // Uncaught TypeError: pato.despedirse is not a function
pato.hablar();              // Método no estático (requiere instancia): 'Cuak'
Animal.saludo() // esto dara 'la raza es:undefined'
```
Como veremos más adelante, lo habitual suele ser utilizar métodos normales (no estáticos), ya que normalmente nos suele interesar crear múltiples objetos y guardar información (estado) en cada uno de ellos, y para eso necesitaríamos instanciar un objeto.

Una de las limitaciones de los métodos estáticos es que en su interior sólo podremos hacer referencia a elementos que también sean estáticos. No podremos acceder a propiedades o métodos no estáticos.

> Los métodos estáticos se suelen utilizar para crear funciones de apoyo que realicen tareas genéricas que no necesiten estado de la clase, pero siguen estando relacionadas con la clase y no queremos mantenerlas separadas.

### Inicialización estática

Una reciente característica denominada Class static initialization blocks  nos permite ejecutar un bloque de código de forma muy similar a una especie de constructor estático.

La diferencia radica en que, mientras el constructor se ejecuta cuando se crea el objeto (se crea una instancia de clase), el bloque estático static {} se ejecuta nada más declarar la clase (antes de la instancia), por lo que puede ser realmente útil para realizar tareas de inicialización donde no necesitas la instancia del objeto, o previas al constructor:


```javascript
class Animal {
  static {
    console.log("Bloque inicializado");
  }
  
  static sayHello(){
    console.log("Di hola");    
  }

  constructor() {
    console.log("Constructor ejecutado");
    Animal.sayHello();
  }
}
// <-- Aquí nos aparece "Bloque inicializado"

const pato = new Animal();   // <-- Tras el new Animal(), aparece "Constructor ejecutado" y tambien 'Di hola'
```

### Visibilidad de métodos

Al igual que ocurre con las propiedades de clase, los métodos de una clase tienen una visibilidad específica que por defecto es pública. Esto es, los métodos son accesibles tanto desde fuera de la clase como desde dentro.

|Nombre |	Sintaxis |	Descripción |
|-------|----------|--------------|
|Método público	|name() o this.name()|	Se puede acceder al método desde dentro y fuera de la clase.
|Método privado	|#name() o this.#name()|	Se puede acceder al método sólo desde dentro de la clase.


### Métodos públicos
Por norma general, los métodos de una clase son públicos, por lo que podemos acceder tanto desde dentro de la clase como desde fuera. Observa que desde el constructor estamos accediendo a hablar() desde dentro de la clase y al crear el objeto, se llamará a ese método:

```javascript
class Personaje {
  name = "Mario";

  constructor() {
    this.hablar();
  }

  hablar() {
    console.log("It's me, Mario!");
  }
}

const mario = new Personaje();      // It's me, Mario! (se ha accedido a hablar() desde dentro de la clase)
mario.hablar();                     // It's me, Mario! (se ha accedido a hablar() desde fuera de la clase)
```


Por otro lado, al llamar a mario.hablar() se puede ver que se permite acceder desde fuera de la clase.


### Métodos privados

¿Qué es lo que ocurre si definimos el método hablar() como un método privado? Para ello, simplemente le añadimos el símbolo # antes del nombre, asegurándonos también de incluirlo en las llamadas al método. Quedaría algo así:


```javascript
class Personaje {
  name = "Mario";

  constructor() {
    this.#hablar();
  }

  #hablar() {
    console.log("It's me, Mario!");
  }
}

const mario = new Personaje();      // It's me, Mario! (se ha accedido a #hablar() desde dentro de la clase)

// Da error, no se permite acceder a un método privado desde fuera de la clase
// Uncaught SyntaxError: Private field '#hablar' must be declared in an enclosing class
mario.#hablar();

// Da error, el método hablar() no existe, ya que el nombre del método es #hablar()
// Uncaught TypeError: mario.hablar is not a function
mario.hablar();
```

Como se puede contemplar, en el caso de definir el método privado, no es posible ejecutarlo desde fuera de una clase, salvo que lo hagamos a través de un método público que llame internamente al método privado.


### ¿Qué es la herencia de clases?
A grandes rasgos, se puede denominar herencia de clases a la característica donde una clase hija obtiene las propiedades y métodos de una clase padre porque se ha establecido una relación entre ambas. Esa relación se establece a través de la palabra clave extends, como veremos más adelante.

Por ejemplo, tomemos el caso del capítulo anterior donde teníamos formas geométricas para trabajar con él. Observa que en primer lugar tenemos una clase padre llamada Forma que representa una forma geométrica abstracta. Dicha forma geométrica tendrá las características comunes a todos los elementos inferiores (el color, grosor del borde, etc...):

![Imagen acerca de la herencia en las clase con sus propiedades y metodos](https://lenguajejs.com/javascript/oop/herencia-clases/herencia.png "Herencia de Clases")

Luego, tenemos varias clases más concretas denominadas clases hijas: Cuadrado, Circulo y Triangulo. Dichas clases tendrán las características propias que necesitará cada una de ellas:

* El Cuadrado tendrá una propiedad que será lado.
* El Círculo tendrá una propiedad radio y otra diametro.
* El Triángulo tendrá una propiedad base y otra altura.

Además, estas clases heredan las características comunes de su padre, en este caso de la clase Forma. Así, finalmente tendremos una jerarquía de clases que se basa en clases anteriores heredadas.

Por ejemplo, en el primer caso, los elementos c1 y c2 son cuadrados, objetos generados (instanciados) a partir de la clase Cuadrado, que tienen cada uno una propiedad lado, definida en Cuadrado, y además heredan propiedades comunes de la clase Forma, como color. De la misma forma, ocurrirá con el resto de elementos.

### Extender una clase

En Javascript, a partir de ECMAScript 2015, podemos «extender clases» de forma muy similar a como se hace en otros lenguajes de programación. Vamos a pasar a código el ejemplo anterior, utilizando herencia. Observa que en la clase hija se utiliza la palabra clave *extends* seguida de la clase padre que va a heredar:

```javascript
// Clase padre
class Forma {
  constructor() {
    console.log("Soy una forma geométrica.");
  }
}

// Clase hija
class Cuadrado extends Forma {
  constructor() {
    super();
    console.log("Soy un cuadrado.");
  }
}

const c1 = new Cuadrado();
// Soy una forma geométrica.
// Soy un cuadrado.

```

Fíjate que la clase padre Forma muestra un mensaje en su constructor. Cada clase hija extiende de su clase padre, por lo que la clase Cuadrado será una mezcla de lo que tiene la clase Forma más lo que tiene la clase Cuadrado. Vamos a instanciar los objetos del ejemplo y a comprobarlo:

Observa que al crear la instancia c1 a partir de la clase Cuadrado, se ha ejecutado el constructor de Cuadrado, el cuál tiene una llamada a super(). Esta es una función especial que llama al constructor de la clase padre, por lo que antes de continuar, pasa a ejecutarse el constructor de Forma, donde se muestra el mensaje Soy una forma geométrica. Al terminar, se vuelve al constructor de la clase Cuadrado, y se muestra el texto Soy un cuadrado.

### El método super

Como hemos visto, el método especial super() se encarga de llamar al constructor de la clase padre (también denominada superclase, de ahí su nombre), por lo que funcionará en cascada e irá ejecutando primero el constructor del padre, y luego el texto del constructor del hijo. Hagamos algunos cambios interesantes en el ejemplo anterior, para reutilizar algunos elementos heredados.

Observa el siguiente ejemplo. La clase padre tiene una propiedad type y otra color. Además, tiene un método show() y otro método setColor(). Estos cuatro elementos son elementos que pertenecen a la clase padre, pero que cualquier clase hija que extienda de ella, heredará esos elementos. Por otro lado, fíjate que la clase hijo sobreescribe la propiedad type:



```javascript
class Forma {
  type = "geométrica";
  color = "naranja";

  constructor() {
    console.log("Constructor padre finalizado.");
  }

  show() {
    console.log(`Soy una forma ${this.type} de color ${this.color}`);
  }

  setColor(color) {
    this.color = color;
  }
}

class Cuadrado extends Forma {
  type = "cuadrada";

  constructor() {
    super();
    console.log("Constructor hijo finalizado.");
  }
}

//const c1 = new Cuadrado();
//c1.show();    // Soy una forma cuadrada de color naranja

const c2 = new Cuadrado();
c2.setColor("amarillo");
c2.show();    // Soy una forma cuadrada de color amarillo
```

Vamos a crear los dos objetos del gráfico anterior. Al crear la instancia del objeto c1 a partir de Cuadrado y luego ejecutar el método .show() heredado del padre, veremos que se está ejecutando el código del método del padre, pero obtiene la información de type sobreescrita por el hijo.

Si miramos el segundo ejemplo, del objeto c2, veremos que en él ejecutamos el método .setColor() del padre, que modifica la propiedad color del hijo, cambiándola por el color "amarillo". Al ejecutar el método .show() comprobaremos que nos muestra la información sobreescrita por la clase hijo.

> Recuerda que es obligatorio llamar a super() en el constructor de la clase hija antes de acceder a una propiedad mediante this. De lo contrario, te aparecerá el siguiente mensaje: Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.

### Acceder a métodos del padre

Como hemos visto, la palabra clave super() hace referencia a la superclase, es decir, a la clase padre. No obstante, también podemos utilizarlas en métodos para llamar a métodos del padre según nos interese heredar o no:

```javascript
class Padre {
  soloPadre() { console.log("Tarea en el padre..."); }
  padreHijo() { console.log("Tarea en el padre..."); }
  sobreHijo() { console.log("Tarea en el padre..."); }
}

class Hijo extends Padre {
  padreHijo() {
    super.padreHijo();
    console.log("Tarea en el hijo...");
  }

  soloHijo() { console.log("Tarea en el hijo..."); }
  sobreHijo() { console.log("Tarea en el hijo..."); }
}

const hijo1 = new Hijo()
//hijo1.padreHijo() // 'Tarea en el padre...' 'Tarea en el hijo...'
//hijo1.sobreHijo() // 'Tarea en el hijo...'
hijo1.soloPadre() // 'Tarea en el padre...'
```

Observa que la clase Padre implementa los métodos soloPadre(), padreHijo() y sobreHijo(). Por otro lado, la clase Hijo implementa los métodos padreHijo(), soloHijo() y sobreHijo(). Veamos como se comportan si creamos una instancia de la clase hija por medio de un new Hijo() y ejecutamos cada uno de ellos:

|Método	Clase| Padre|	Clase Hija|	¿Se ejecuta el método en una instancia de la clase hija?|
|------------|-------|----------|----------------------------------------------------------|
|soloPadre()|	✅|	❌ |	Se ejecuta porque se hereda el método del padre hacia el hijo.|
|soloHijo()|	❌|	✅ |	Se ejecuta porque simplemente existe en el hijo.|
|padreHijo()|	✅|	✅ |	Se ejecutan ambos porque super llama al padre primero.|
|sobreHijo()|	✅|	✅ |	Se ejecuta sólo el hijo, porque sobreescribe el heredado del padre.|



```javascript

```