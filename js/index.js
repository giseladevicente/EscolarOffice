let carrito = [];

const agregarAlcarrito = (nombre,precio) =>{
    carrito.push({nombre,precio});
    actualizarContador();
    alert(`Agregaste : ${nombre} al carrito`);
}

const actualizarContador = ()=>{
    document.getElementById("contador-carrito").textContent = carrito.length;
}

window.addEventListener("beforeunload",()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
});