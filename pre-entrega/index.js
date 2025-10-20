//url = "https://fakestoreapi.com/"

async function obtenerProductos() {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "GET"
        })
        const data = await response.json()
        console.log("Datos del producto", data)

    } catch (error) {
        console.log(error)
    } finally {
        console.log("Promesa finalizada")
    }
}

async function obtenerProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "GET"
        })

        const data = await response.json()
        console.log(`Datos del producto: ${id}`, data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log(`Promesa finalizada sobre el producto con id: ${id}`)
    }
}

async function agregarProducto(producto) {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json "
            },
            body: JSON.stringify(producto)
        })

        const data = await response.json()
        console.log("Nuevo producto agregado", data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Promesa finalizada, nuevo producto agregado")
    }
}

async function eliminarProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        })
        const data = await response.json()
        console.log("Producto eliminado", data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log(`Promesa finalizada, eliminacion del producto con id: ${id}`)
    }
}

async function actualizarProducto(producto) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${producto.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json "
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json()
        console.log("Producto Actualizado: ", data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Promesa finalizada, actualizacion de producto")
    }

}
const argumentos = process.argv.slice(2);
const metodo = argumentos[0]?.toUpperCase();
const recurso = argumentos[1];

switch (metodo) {
     case "GET":
    if (recurso?.startsWith("products")) {
      const parts = recurso.split("/"); // ["products"] o ["products", "id"]
      if (parts.length === 1) {
        obtenerProductos();
      } else if (parts.length === 2) {
        obtenerProducto(parts[1]);
      } else {
        console.log("Formato incorrecto. Usa: GET products o GET products/<id>");
      }
    } else {
      console.log("Recurso no reconocido. Usa: GET products");
    }
    break;

  case "POST":
    const nuevoProducto = {
      title: "Nuevo producto desde Node",
      price: 19.99,
      description: "Producto de prueba agregado vía POST",
      image: "http://example.com",
      category: "electronics",
    };
    agregarProducto(nuevoProducto);
    break;

  case "PUT":
    const productoActualizado = {
      id: 5,
      title: "Producto actualizado",
      price: 29.99,
      description: "Actualizado con PUT",
      image: "http://example.com",
      category: "electronics",
    };
    actualizarProducto(productoActualizado);
    break;

  case "DELETE":
    const idEliminar = recurso?.split("/")[1];
    if (idEliminar) {
      eliminarProducto(idEliminar);
    } else {
      console.log("indicar un id: DELETE products/<id>");
    }
    break;

  default:
    console.log("Comando no reconocido. Usa GET, POST, PUT o DELETE");
    break;
}




//obtenerProductos()
//obtenerProducto(1)

/* agregarProducto({
    //"id": 21,
    "title": "Prueba",
    "price": 100,
    "description": "producto de prueba"
    //"category": "prueba",
    //"image": "http://example.com"
}) */

//eliminarProducto(1)
//obtenerProducto(1)
/*
actualizarProducto({
"id": 1,
"title": "Prueba",
"price": 100,
"description": "producto de prueba",
"category": "prueba",
"image": "http://example.com"
})*/