Proyecto Pre-Entrega – Talento Tech Backend

Este proyecto forma parte del curso Backend con Node.js de Talento Tech.
La idea fue practicar cómo consumir una API externa desde la terminal utilizando Node.js y la API pública Fake Store API
https://fakestoreapi.com/products


El programa permite realizar operaciones CRUD (GET, POST, PUT, DELETE) directamente desde la consola, simulando el comportamiento básico de un cliente REST.

Cómo usarlo
Clonar el repositorio o copiar el archivo principal (index.js).
No se necesitan dependencias externas (se usa fetch nativo de Node).
Ejecutar los comandos desde la terminal:

``
# Obtener todos los productos
node index.js GET products

# Obtener un producto por ID
node index.js GET products/5

# Agregar un producto nuevo
node index.js POST products

# Actualizar un producto existente
node index.js PUT products/5

# Eliminar un producto por ID
node index.js DELETE products/5
``

Qué hace cada comando
GET → Muestra todos los productos o uno específico si se pasa el ID.
POST → Agrega un nuevo producto con los datos proporcionados.
PUT → Actualiza un producto existente en la API.
DELETE → Elimina un producto según su ID.

Tecnologías usadas
Node.js (con soporte nativo de Fetch API)
JavaScript moderno (ES Modules, async/await)
API: https://fakestoreapi.com

Este trabajo corresponde a la Pre-Entrega del curso Backend de Talento Tech.
Fue pensado para practicar el uso de process.argv, fetch, manejo de promesas y estructura básica de un programa orientado a comandos en Node.js.
