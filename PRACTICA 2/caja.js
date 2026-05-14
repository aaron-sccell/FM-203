// ============================
// MÓDULO DE CAJA - Cafetería
// Alumno: Aarón
// ============================

// --- Constantes (const) ---
const nombreCafeteria = "Cafetería JS";

// --- Variable que cambia (let) ---
let totalAcumulado = 0;

// --- Arrays (lista de pedidos) ---
const pedidos = [];

// --- Función agregarPedido() ---
function agregarPedido(producto, precio) {
    pedidos.push(producto);
    totalAcumulado = totalAcumulado + precio;
    console.log(producto + " agregado - $" + precio);
}

// --- Uso del sistema ---
console.log("Bienvenido a " + nombreCafeteria);
console.log("");

agregarPedido("Cafe Americano", 45);
agregarPedido("Cappuccino", 60);
agregarPedido("Pan de chocolate", 35);

console.log("");
console.log("Pedidos: " + pedidos);
console.log("Total acumulado: $" + totalAcumulado);