const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const mostrarCarrito = () => {
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = '<p>Tu carrito está vacio - <a href="../pages/productos.html" class="btn-link">Cargar productos</a> </p>';
        actualizarResumen();
        return;
    }

    carrito.forEach((item, indice) => {
        const producto = document.createElement("article");
        producto.classList.add("producto");
        producto.innerHTML = `
            <h2>${item.nombre}</h2>
            <p class="precio">$${item.precio}</p>
            <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
        `;
        lista.appendChild(producto);
    });

    actualizarResumen();
};


const actualizarResumen = () => {
    const totalProductos = document.getElementById("total-productos");
    const importeTotal = document.getElementById("importe-total");

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalProductos.textContent = carrito.length;
    importeTotal.textContent = total.toFixed(2);

    const botonCompra = document.querySelector("button[onclick='realizarCompra()']");
    const resumenCarrito = document.getElementById("resumen-carrito");
    resumenCarrito.appendChild(botonCompra);
};



const eliminarDelCarrito = (indice) => {
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};


const realizarCompra = () => {
    alert("Compra realizada con éxito");
    localStorage.removeItem("carrito");
    window.location.href = "../index.html";
};

mostrarCarrito();
