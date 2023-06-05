/* verCarrito.addEventListener("click",()=> { */
const abrirCarrito = () => {
modalContenedor.innerHTML="";
    modalContenedor.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-titulo"> Carrito </h1>
    `;
    modalContenedor.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText="X";
    modalbutton.className = "modal-header-button";
  
    modalbutton.addEventListener("click", () => {
      modalContenedor.style.display = "none";
    })
    
    modalHeader.append(modalbutton);
  
    carrito.forEach((producto) => {
       let contenidoCarrito = document.createElement("div");
    contenidoCarrito.className="modal-contenedor";
    contenidoCarrito.innerHTML= `
    <img class="img-instrumentos" src="${producto.imagen}">
    <h3 class="modal-texto"> ${producto.nombre}</h3>
    <h3 class="modal-texto"> ${producto.modelo}</h3>
    <p class="modal-precio">$ ${producto.precio}</p>
    <p class="modal-precio">Cantidad: ${producto.cantidad}</p>
    `;
  modalContenedor.append(contenidoCarrito);


 
  let eliminar = document.createElement("span");
  eliminar.innerText = "Eliminar producto";
  eliminar.className ="eliminar-producto";
  contenidoCarrito.append(eliminar);
  eliminar.addEventListener("click", eliminarProducto);
  
    } );
   
    const total = carrito.reduce((acumulado,instrumento) =>  acumulado + instrumento.precio,0)
    const totalDeCompra = document.createElement("div");
    totalDeCompra.className = "total-compra"
    totalDeCompra.innerHTML = `Total a pagar:$ ${total}`;
    modalContenedor.append(totalDeCompra);
  
  }
    
    verCarrito.addEventListener("click", abrirCarrito);

    const eliminarProducto = () => {
        const encontrarId = carrito.find((producto) => producto.id)
    
   carrito = carrito.filter((carritoId) => {
    return carritoId !== encontrarId;
   })
        abrirCarrito();
    }

    