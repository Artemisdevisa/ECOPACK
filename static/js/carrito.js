// static/js/carrito.js - Sistema de gestión del carrito

let carrito = [];
let productosDB = [];

// Cargar productos desde el servidor
async function cargarProductosDB() {
    try {
        const response = await fetch('/api/productos');
        productosDB = await response.json();
    } catch (error) {
        console.error('Error cargando productos:', error);
    }
}

// Obtener producto por ID
function obtenerProductoPorId(id) {
    return productosDB.find(producto => producto.id === id);
}

// Cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
    actualizarContadorCarrito();
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = obtenerProductoPorId(idProducto);
    
    if (!producto) {
        mostrarNotificacion('Producto no encontrado', 'error');
        return;
    }
    
    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    
    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < producto.stock) {
            productoEnCarrito.cantidad++;
            mostrarNotificacion(`${producto.nombre} - Cantidad actualizada`, 'success');
        } else {
            mostrarNotificacion('Stock insuficiente', 'warning');
            return;
        }
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
        mostrarNotificacion(`${producto.nombre} agregado al carrito`, 'success');
    }
    
    guardarCarrito();
    actualizarContadorCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    guardarCarrito();
    actualizarContadorCarrito();
    renderizarCarrito();
    mostrarNotificacion('Producto eliminado del carrito', 'info');
}

// Actualizar cantidad de un producto
function actualizarCantidad(idProducto, nuevaCantidad) {
    const producto = carrito.find(item => item.id === idProducto);
    const productoDB = obtenerProductoPorId(idProducto);
    
    if (producto && nuevaCantidad > 0 && nuevaCantidad <= productoDB.stock) {
        producto.cantidad = nuevaCantidad;
        guardarCarrito();
        actualizarContadorCarrito();
        renderizarCarrito();
    }
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    mostrarNotificacion('Carrito vaciado', 'info');
}

// Obtener total de items en el carrito
function obtenerTotalItems() {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
}

// Obtener total en soles
function obtenerTotalPrecio() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

// Actualizar contador visual del carrito
function actualizarContadorCarrito() {
    const contadores = document.querySelectorAll('.carrito-contador');
    const total = obtenerTotalItems();
    
    contadores.forEach(contador => {
        contador.textContent = total;
        if (total > 0) {
            contador.style.display = 'inline-flex';
        } else {
            contador.style.display = 'none';
        }
    });
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notificacion = document.createElement('div');
    notificacion.className = `alert alert-${tipo === 'success' ? 'success' : tipo === 'error' ? 'danger' : tipo === 'warning' ? 'warning' : 'info'} position-fixed top-0 end-0 m-3 shadow-lg`;
    notificacion.style.zIndex = '9999';
    notificacion.style.minWidth = '300px';
    notificacion.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${tipo === 'success' ? 'check-circle' : tipo === 'error' ? 'times-circle' : tipo === 'warning' ? 'exclamation-triangle' : 'info-circle'} me-2"></i>
            <span>${mensaje}</span>
        </div>
    `;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notificacion.classList.remove('show');
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 3000);
}

// Renderizar carrito en modal
function renderizarCarrito() {
    const contenedor = document.getElementById('carrito-items');
    if (!contenedor) return;
    
    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fs-1 text-muted mb-3"></i>
                <p class="text-muted">Tu carrito está vacío</p>
            </div>
        `;
        document.getElementById('carrito-total').textContent = 'S/ 0.00';
        return;
    }
    
    contenedor.innerHTML = carrito.map(item => `
        <div class="card mb-3">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img src="${item.imagen}" class="img-fluid rounded" alt="${item.nombre}">
                    </div>
                    <div class="col-5">
                        <h6 class="mb-0">${item.nombre}</h6>
                        <small class="text-muted">S/ ${item.precio.toFixed(2)}</small>
                    </div>
                    <div class="col-2">
                        <input type="number" class="form-control form-control-sm" 
                               value="${item.cantidad}" min="1" 
                               onchange="actualizarCantidad(${item.id}, parseInt(this.value))">
                    </div>
                    <div class="col-2 text-end">
                        <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    const totalElement = document.getElementById('carrito-total');
    if (totalElement) {
        totalElement.textContent = `S/ ${obtenerTotalPrecio().toFixed(2)}`;
    }
}

// Inicializar cuando carga la página
document.addEventListener('DOMContentLoaded', async function() {
    await cargarProductosDB();
    cargarCarrito();
    
    // Si existe el modal del carrito, renderizarlo cuando se abre
    const carritoModal = document.getElementById('carritoModal');
    if (carritoModal) {
        carritoModal.addEventListener('show.bs.modal', function () {
            renderizarCarrito();
        });
    }
});