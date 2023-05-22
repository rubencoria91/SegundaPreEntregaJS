const saludo = "Bienvenido a NBX Instrumentos ";
console.log(saludo);

function ingreso() {
  let usuario = prompt("Ingrese nombre de usuario");
  console.log(`Bienvenido ${usuario}`);
}

ingreso();

//* ARRAY DE PRODUCTOS *//

const productos = [
  {
    nombre: "Guitarra Acústica Ibanez",
    modelo: "GA3AM-Natural Semi Brillante",
    precio: 75000,

    dispoible: true,
  },

  {
    nombre: "Guitarra Acústica Yamaha",
    modelo: "F370",
    precio: 182000,

    dispoible: true,
  },

  {
    nombre: "Guitarra Clásica Joaquin Torralba",
    modelo: "MOD-12-CHICA",
    precio: 35000,

    dispoible: true,
  },

  {
    nombre: "Guitarra Clásica Yamaha",
    modelo: "C80",
    precio: 164000,

    dispoible: true,
  },

  {
    nombre: "Guitarra Eléctrica Yamaha",
    modelo: "Pacifica 112V",
    precio: 270000,

    dispoible: true,
  },
];

productos.push({
  nombre: "Bajo de cuatro cuerdas Squier",
  modelo: "Deluxe Jazz Bass Sunburst",
  precio: 324209,

  disponible: true,
});

console.log(productos);

//* FIN DE ARRAY DE PRODUCTOS *//

const presentacion = "Listado de productos:";
console.log(presentacion);

for (const producto of productos) {
  console.log(producto.nombre);
  console.log(producto.modelo);
  console.log(producto.precio);
}

let seleccionInstrumento =
  prompt(`Seleccione la opción del instrumento que desea comprar:
1. Guitarra Acústica
2. Guitarra Clásica
3. Guitarra Eléctrica

`);

switch (seleccionInstrumento) {
  case "1":
    console.log(`Usted ha elegido Guitarra Acústica`);
    break;
  case "2":
    console.log(`Usted ha elegido Guitarra Clásica`);
    break;
  case "3":
    console.log(`Usted ha elegido Guitarra Eléctrica`);
    break;

  default:
    break;
}

let agregarAlCarrito = productos.reduce((acumulado, producto) => {
  return acumulado + producto.precio;
}, 0);
console.log("El total de su compra es de $ " + agregarAlCarrito);
