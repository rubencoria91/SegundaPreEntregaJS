

const todosLosProductos = document.getElementById ("TodosLosProductos")
const verCarrito = document.getElementById("carrito");
const modalContenedor = document.getElementById("modal-contenedor");

//* ARRAY DE PRODUCTOS *//

const productos = [
  {
    
    id: 1,
    nombre: "Guitarra Acústica Ibanez",
    modelo: "GA3AM-Natural Semi Brillante",
    imagen: "./imagenes/acustica1.jpg",
    precio: 75000,
    cantidad: 1,

    dispoible: true,
  },

  {
    id:2,
    nombre: "Guitarra Acústica Yamaha",
    modelo: "F370",
    precio: 182000,
    imagen: "./imagenes/acustica2.jpg",
    cantidad: 1,

    dispoible: true,
  },

  {
    id:3,
    nombre: "Guitarra Clásica Joaquin Torralba",
    modelo: "MOD-12-CHICA",
    precio: 35000,
    imagen: "./imagenes/clasica1.jpg",
    cantidad: 1,

    dispoible: true,
  },

  {
    
    nombre: "Guitarra Clásica Yamaha",
    modelo: "C80",
    precio: 164000,
    imagen: "./imagenes/clasica2.jpg",
    cantidad: 1,

    dispoible: true,
  },

  {
    id:4,
    nombre: "Guitarra Eléctrica Yamaha",
    modelo: "Pacifica 112V",
    precio: 270000,
    imagen: "./imagenes/gelectrica1.jpg",
    cantidad: 1,

    dispoible: true,
  },
];

productos.push({
 
  id:5,
  nombre: "Bajo de cuatro cuerdas Squier",
  modelo: "Deluxe Jazz Bass Sunburst",
  precio: 324209,
  imagen: "./imagenes/bajo1.jpg",
  cantidad: 1,
 
  disponible: true,
});

/* /* console.log(productos);

//* FIN DE ARRAY DE PRODUCTOS */


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto)=> {
  let contenido = document.createElement("div");
  contenido.className = "card"
  contenido.innerHTML=`
  <h3>${producto.nombre}</h3>
  <h4>${producto.modelo}</h4>
  <img class="img-instrumentos" src="${producto.imagen}">
  <p class="precio">$ ${producto.precio}</p>
  `;
todosLosProductos.append(contenido);

let comprar = document.createElement("button")
comprar.innerText= "Agregar al carrito";
comprar.className = "comprar"

contenido.append(comprar);

comprar.addEventListener("click", () => {

const productoRepetido = carrito.some((repetido) =>repetido.id === producto.id )

if (productoRepetido === true) {
  carrito.map((producto) => {
    if(producto.id === producto.id) {
      producto.cantidad++;
    }
  });

} else {
  carrito.push({
    nombre: producto.nombre,
    id: producto.id,
    modelo: producto.modelo,
    precio: producto.precio,
    imagen: producto.imagen,
    cantidad: producto.cantidad,
        });
} 
    });
   
});



/** LOCALSTORAGE **/
const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}







