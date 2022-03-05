# Bienvenido al Repositorio del Proyecto LA BOHÈME :smiley:

---

### **Autor**: Ariel Gustavo Zybala

---

##### _Esta presentación es la pre-entrega del proyecto final, del curso ReactJS de la carrera de Fullstack, en el que se utiliza casi enteramente un pseudo-lenguaje que sirve de pre-procesador de textos, creado por Facebook (JSX) y en parte CSS, sin articulaciones de scss o sass._

---

## Introducción

El sitio web se encuentra conformado en jsx, bajo las recomendaciones y sobre el contenido educativo que ha impartido el docente **Fabricio Borgobello**, en la casa de estudio **CODERHOUSE**, con la ayuda de la docente: Tutora **Laura Therisod**.

## Retos, Cambios, Adatación y Superación en el Proceso

Cada desafío del curso esta representando en sí mismo un **reto**, puesto que requiere investigación y ejercicio; sin embargo, el mayor de los desafíos, es siempre comprender o saber dónde esta el punto en el que finalizan todas las tareas y cómo administrar el tiempo para cumplirlas. Y eso, se debe a la cantidad de tiempo que insumimos en cursar, leer, aprender y aplicar los conocimientos, a medida de que se va gestando y se implementa el proyecto individual semana a semana, en el contexto de un camino del que que ignora distancia y condiciones. Esto implica lidiar con las propias limitaciones y frustraciones, la auto-determinación y el convencimiento de las capacidades que se aplican.
**Cambios**, los hay todo el tiempo, se ha creado un Wireframe de lo que se tiene por objetivo ideal; pero el proyecto en gestación, afronta mutaciones como respuesta a las consignas, que se requieren como contrapunto de la aprobación y acreditación de las capacidades individuales de quien suscribe.
La administración de las necesidades y las obligaciones van de la mano con **la adaptación y la superación** que se puede ver como la respuesta a las consignas de las rubricas impuestas en esta pre-entrega final del proyecto; es justo decir, que aún se esta trabajando en el equilibrio que dan el rose forzado en la incorporación de conocimientos mientras se esta trabajando y las gratificaciones que el cumplimiento de las tareas otorga; es parte de ese trabajo, conocer y formarse, desde lo simple a lo complejo intentando fluir por un proyecto compuesto con usos de node, de html, de css, de git, de javaScript y de conocer una librería enteramente nueva, que nunca he utilizado, entre otros aspectos.

## Descargo sobre los Resultado del Proyecto.

**El proyecto** que he presentado, se conforma como **una expresión del cumulo de desafíos que se fueron afrontando a lo largo de la cursada**.
Hay partes del código que elegí mantener, por ej: "Lifting State up", en el comportamiento del counter (deja errores en consola, pero no impiden el normal funcionamiento). Aún que esto si afectó luego otras partes del código.
Otras las intenté pulir, intenté mejorar la experiencia de usuario, con la aplicación de los popUp -donde se combinaron algunos custom hooks en ocasiones, y en otras usé la librería más sencilla que supe encontrar-.
Y finalmente, en otras ocasiones, no supe encontrar el camino a las mejores prácticas, dentro de mis habilidades o de lo que quería hacer. El claro ejemplo de esto, es el cartView (es decir, la vista previa donde se muestra nro. de productos comprados, en el icono del carrito de la barra de navegación -código, que reconozco que se explico en clase, con la construcción de un useEffects-); inicialmente seguí la recomendación y armé un useEffects, para actualizar el estado cada vez que se interactúe con el [ cart ]. Pero detecté que al comprar, el state del cart, no mutaba de manera inmediata. En mi caso, el usuario al comprar el mismo producto, no se actualizaba el número de los productos tomados, no sucedía aún estando dentro del useEffect. Luego, al tener que salir del useEffect, intenté agregar una función definida por fuera de la que lleva el proceso de compra, haciendo que se dispare al ser llamada a cada paso, pero aún así, tenía un mal comportamiento. Tuve que poner una pieza repetida de código, a cada paso, que modifica el estado y que permite funcionar el cartView como se espera.
Esta no es la mejor respuesta. Y encontré otras, que si siguen mejores prácticas, pero usarlas era salir por completo de lo ya había trabajado, refactorizar todo y usar casi nada del código que yo había pensado, salir por completo de lo que formaba mi proceso de aprendizaje.

#### Archivos fundamentales para la aprobación. Composición del Proyecto.

Para clonar el repositorio y echarlo a andar, se debe dar orden de npm start, sobre la carpeta **agzcoderhouse/laboheme**

Las carpetas principales del proyecto son:
components: compuesta por las subcarpetas:

    -* buttons; Aloja el archivo inicial dónde se encontraba el algoritmo del contador. Este componente fue afectado por el desafío en el que se debería concretar el desarrollo de un "Lifting State up".

    -* cards; Aloja los dos archivos de jsx, en los que se alojan el algoritmo de presentación de la tienda y el detalle de cada producto. Comunicados directamente con el

    -* forms; aloja dos archivos jsx gemelos. Aquí se pudo dar una interacción de props que hiciera funcionar todo en un solo archivo, alternando la función handleUpdate o handleSubmit según elija el usuario

    -* hooks; aloja dos archivos, con desarrollo de lógica individual, para que trabajen formularios o ventanas PopUp -Modales-. Si bien vimos como armar los custom hooks en clase, estos fueron basados en el código que supe buscar y recolectar tutoriales y de internet en general.

    -* navigation; aloja dos archivos, con los que se construye el footer y el nav (ambos podrían tener mayor trabajo de singularidad

    -* widgets; aloja 9 componentes, que son la mayor cantidad de piezas que pude estratificar y singularizar, dentro del tiempo, las capacidades y habilidades que iba disponiendo.

context: Aloja dos archivos, basados en su mayoría en recomendaciones vistas en clase y practicadas en ellos.

firebase: aloja un archivo con las keys, como se pueden usar con y sin dotenv.

pages: Esta carpeta se completa con un árbol de sub-carpetas, que tienen por objetivo, separar por áreas del sitio. La mayoría de las carpetas quedan por ello individuales, pero en el caso de la carpeta “store”, allí se almacenan los componentes que tienen desde el que da punta pie al inicial, hasta el que da por finalizado el proceso de compra.
Las subcarpetas son:
*contact
*errors
*faqs
*home
\*store

(El contenido se explica por si solo en los comentarios del código).

**Es importante indicar que en ellos esta lo necesario, para entender el proyecto. Pero hay un grupo de archivos no mencionados, como los css, el env.example, o el mismo archivo app, que hacen al contexto de trabajo y que dan forma la resto del sitio como una sola pieza o entidad**
