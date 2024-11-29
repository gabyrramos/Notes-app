#Decisiones Técnicas
Durante el desarrollo de esta aplicación, tomé varias decisiones clave para garantizar un flujo de trabajo eficiente y un rendimiento óptimo. 

-Elegí utilizar un modal para permitir la creación de nuevas notas. Esto proporciona una experiencia de usuario más fluida, ya que no es necesario redirigir a otra página. El modal se controla mediante la propiedad isOpen, que es pasada entre componentes padre e hijo para manejar su visibilidad de manera eficiente.
-Para abrir y cerrar el modal, utilicé el patrón de comunicación entre componentes padre e hijo en Vue.js. Esto se logra a través de props y eventos personalizados, como update:isOpen. De esta forma, el estado de la visibilidad del modal se mantiene sincronizado entre los componentes.
-Para gestionar las tareas de forma persistente, utilicé Axios para realizar las solicitudes HTTP al backend. Las tareas se almacenan en un servidor y tienen un estado inicial de "Pendiente". Utilizo un servicio con funciones reutilizables para las operaciones CRUD (crear, leer, actualizar y eliminar) de las tareas.

La estructura del proyecto se organizó de manera modular. Cada componente tiene una responsabilidad clara y está encapsulado en su propia carpeta, lo que facilita la mantenibilidad y escalabilidad de la aplicación a largo plazo.
Implementé un manejo de errores básico para las solicitudes de la API. Si algo sale mal durante la creación de una tarea (por ejemplo, si el servidor no está disponible), el error se captura y se muestra en la consola, permitiendo que el usuario sepa que algo ha fallado.

¿Qué se podría mejorar en el futuro?
Validación de formularios: Actualmente, no se valida si los campos de título y descripción están vacíos antes de guardar. Sería útil agregar una validación para asegurar que el usuario no guarde una tarea sin completar esos campos.
Gestión del estado global: Si la aplicación crece, podría ser útil gestionar el estado globalmente usando Nuxt para centralizar los datos de las tareas y evitar la duplicación de lógica entre componentes.
Autenticación de usuarios: Es ideal que los usuarios guarden sus notas de manera privada, y aplicar un sistema de autenticación para proteger las tareas de cada usuario.
Conclusión
Este proyecto es un excelente punto de partida para construir una aplicación más grande, Las decisiones tomadas durante el desarrollo se enfocaron en la simplicidad, la modularidad y una experiencia de usuario intuitiva ya que el tiempo era limitado. Con estos elementos, esta aplicación tiene un gran potencial para crecer y adaptarse a necesidades más complejas.
