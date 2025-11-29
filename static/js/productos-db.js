// static/js/productos-db.js - Base de datos de productos ecológicos

const PRODUCTOS_DB = [
    // BOLSAS
    {
        id: 1,
        nombre: 'Bolsas de Papel Kraft',
        descripcion: 'Bolsas de papel kraft 100% biodegradables. Perfectas para delivery y take away. Diferentes tamaños disponibles.',
        precio: 25.00,
        imagen: '/static/img/productos/bolsas-kraft.jpg',
        categoria: 'bolsas',
        destacado: true,
        stock: 500
    },
    
    // VASOS
    {
        id: 2,
        nombre: 'Vasos de Café Biodegradables',
        descripcion: 'Vasos para bebidas calientes 100% compostables. Material kraft con revestimiento PLA. Disponibles en 8oz, 12oz y 16oz.',
        precio: 35.00,
        imagen: '/static/img/productos/vasos-cafe.jpg',
        categoria: 'vasos',
        destacado: true,
        stock: 1000
    },
    {
        id: 3,
        nombre: 'Vasos para Sopas Kraft',
        descripcion: 'Vasos térmicos para sopas y alimentos calientes. Material kraft biodegradable con tapa incluida. 500ml y 1000ml.',
        precio: 32.00,
        imagen: '/static/img/productos/vasos-sopas.jpg',
        categoria: 'vasos',
        destacado: false,
        stock: 400
    },
    {
        id: 4,
        nombre: 'Vasos para Bebidas Frías PLA',
        descripcion: 'Vasos transparentes de PLA para bebidas frías. Con tapa cúpula. Disponibles en 12oz, 16oz y 20oz.',
        precio: 36.00,
        imagen: '/static/img/productos/vasos-frios.jpg',
        categoria: 'vasos',
        destacado: true,
        stock: 700
    },
    
    // CONTENEDORES
    {
        id: 5,
        nombre: 'Contenedores Clamshell Biodegradables',
        descripcion: 'Contenedores tipo clamshell fabricados con fibra de caña de azúcar. Ideales para hamburguesas, sándwiches y ensaladas.',
        precio: 42.00,
        imagen: '/static/img/productos/clamshell.jpg',
        categoria: 'contenedores',
        destacado: true,
        stock: 300
    },
    {
        id: 6,
        nombre: 'Bowls para Ensalada Kraft',
        descripcion: 'Bowls de cartón kraft con tapa transparente PLA. Perfectos para ensaladas, sopas y bowls. Resistentes y ecológicos.',
        precio: 38.00,
        imagen: '/static/img/productos/bowls-ensalada.jpg',
        categoria: 'contenedores',
        destacado: true,
        stock: 450
    },
    {
        id: 7,
        nombre: 'Envases para Salsas Biodegradables',
        descripcion: 'Pequeños contenedores para salsas y aderezos. Material PLA transparente. De 30ml a 120ml.',
        precio: 20.00,
        imagen: '/static/img/productos/envases-salsas.jpg',
        categoria: 'contenedores',
        destacado: false,
        stock: 900
    },
    {
        id: 8,
        nombre: 'Bowls de Bambú Desechables',
        descripcion: 'Bowls elaborados con fibra de bambú 100% natural. Resistentes, elegantes y completamente biodegradables.',
        precio: 40.00,
        imagen: '/static/img/productos/bowls-bambu.jpg',
        categoria: 'contenedores',
        destacado: false,
        stock: 320
    },
    
    // PLATOS
    {
        id: 9,
        nombre: 'Platos Biodegradables de Bagazo',
        descripcion: 'Platos desechables fabricados con fibra de caña de azúcar. Resistentes al calor y humedad. Varios tamaños.',
        precio: 30.00,
        imagen: '/static/img/productos/platos-bagazo.jpg',
        categoria: 'platos',
        destacado: true,
        stock: 550
    },
    {
        id: 10,
        nombre: 'Platos de Cartón Kraft',
        descripcion: 'Platos de cartón kraft biodegradable. Ideales para eventos, fiestas y servicios de catering ecológico.',
        precio: 28.00,
        imagen: '/static/img/productos/platos-kraft.jpg',
        categoria: 'platos',
        destacado: false,
        stock: 600
    },
    
    // CUBIERTOS
    {
        id: 11,
        nombre: 'Cubiertos Biodegradables de Madera',
        descripcion: 'Set de cubiertos desechables de madera de abedul. Incluye tenedor, cuchillo y cuchara. 100% natural.',
        precio: 28.00,
        imagen: '/static/img/productos/cubiertos-madera.jpg',
        categoria: 'cubiertos',
        destacado: false,
        stock: 800
    },
    {
        id: 12,
        nombre: 'Cubiertos de PLA Compostables',
        descripcion: 'Cubiertos fabricados con PLA (ácido poliláctico). Resistentes, ligeros y completamente compostables.',
        precio: 26.00,
        imagen: '/static/img/productos/cubiertos-pla.jpg',
        categoria: 'cubiertos',
        destacado: false,
        stock: 750
    },
    
    // ACCESORIOS
    {
        id: 13,
        nombre: 'Portavasos de Pulpa de Papel',
        descripcion: 'Portavasos biodegradables de pulpa de papel moldeada. Para 2 y 4 vasos. Resistentes y 100% compostables.',
        precio: 18.00,
        imagen: '/static/img/productos/portavasos.jpg',
        categoria: 'accesorios',
        destacado: false,
        stock: 600
    },
    {
        id: 14,
        nombre: 'Sorbetes de Papel Biodegradables',
        descripcion: 'Pajitas de papel resistentes al agua. Diferentes colores y diseños disponibles. Perfectas para bebidas frías.',
        precio: 15.00,
        imagen: '/static/img/productos/sorbetes-papel.jpg',
        categoria: 'accesorios',
        destacado: false,
        stock: 1200
    },
    {
        id: 15,
        nombre: 'Servilletas de Papel Reciclado',
        descripcion: 'Servilletas fabricadas con papel 100% reciclado. Diferentes tamaños y colores naturales disponibles.',
        precio: 12.00,
        imagen: '/static/img/productos/servilletas.jpg',
        categoria: 'accesorios',
        destacado: false,
        stock: 1500
    },
    {
        id: 16,
        nombre: 'Tapas Biodegradables para Vasos',
        descripcion: 'Tapas compostables compatibles con diferentes tamaños de vasos. Material PLA transparente con orificio para sorbete.',
        precio: 22.00,
        imagen: '/static/img/productos/tapas-vasos.jpg',
        categoria: 'accesorios',
        destacado: false,
        stock: 1100
    },
    
    // CAJAS
    {
        id: 17,
        nombre: 'Cajas para Pizza Kraft',
        descripcion: 'Cajas para pizza de cartón kraft corrugado. Disponibles en tamaños pequeño, mediano, grande y familiar.',
        precio: 45.00,
        imagen: '/static/img/productos/cajas-pizza.jpg',
        categoria: 'cajas',
        destacado: true,
        stock: 350
    },
    {
        id: 18,
        nombre: 'Cajas para Alimentos Kraft',
        descripcion: 'Cajas versátiles de cartón kraft para delivery. Con ventana transparente PLA. Varios tamaños disponibles.',
        precio: 38.00,
        imagen: '/static/img/productos/cajas-alimentos.jpg',
        categoria: 'cajas',
        destacado: false,
        stock: 400
    },
    {
        id: 19,
        nombre: 'Bandejas de Pulpa de Papel',
        descripcion: 'Bandejas biodegradables de pulpa de papel moldeada. Ideales para frutas, verduras y productos de panadería.',
        precio: 24.00,
        imagen: '/static/img/productos/bandejas-pulpa.jpg',
        categoria: 'cajas',
        destacado: false,
        stock: 500
    },
    {
        id: 20,
        nombre: 'Bolsas Compostables con Ventana',
        descripcion: 'Bolsas kraft con ventana de PLA transparente. Perfectas para pan, pasteles y productos de panadería.',
        precio: 30.00,
        imagen: '/static/img/productos/bolsas-ventana.jpg',
        categoria: 'bolsas',
        destacado: true,
        stock: 450
    }
];

// Función para obtener todos los productos
function obtenerTodosLosProductos() {
    return PRODUCTOS_DB;
}

// Función para obtener productos destacados
function obtenerProductosDestacados() {
    return PRODUCTOS_DB.filter(producto => producto.destacado);
}

// Función para obtener producto por ID
function obtenerProductoPorId(id) {
    return PRODUCTOS_DB.find(producto => producto.id === id);
}

// Función para obtener productos por categoría
function obtenerProductosPorCategoria(categoria) {
    if (categoria === 'todos') {
        return PRODUCTOS_DB;
    }
    return PRODUCTOS_DB.filter(producto => producto.categoria === categoria);
}

// Función para obtener categorías únicas
function obtenerCategorias() {
    const categorias = [...new Set(PRODUCTOS_DB.map(p => p.categoria))];
    return categorias;
}

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRODUCTOS_DB,
        obtenerTodosLosProductos,
        obtenerProductosDestacados,
        obtenerProductoPorId,
        obtenerProductosPorCategoria,
        obtenerCategorias
    };
}