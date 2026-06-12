const express = require("express")
require("dotenv").config()
const app = express()

// Esto es nuevo: permite que el servidor entienda datos en formato JSON
app.use(express.json())

const PORT = process.env.PORT || 3000

// Esta es la ruta principal que acaba de hacer el profe
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hola mundo"
    })
})

// MOCK LOGIN para frontend
app.post("/api/auth/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin123") {
        return res.status(200).json({
            token: "mock-jwt-token-admin",
            user: {
                id: 1,
                username: "admin",
                role: "ADMIN"
            }
        });
    }
    return res.status(401).json({ message: "Credenciales incorrectas" });
});

// SIMULACIÓN DE BASE DE DATOS (En Memoria)
let productosDB = [
    { id: 1, nombre: "Taladro Percutor Dewalt", descripcion: "Potencia 800W", precio: 120.50, stock: 15 },
    { id: 2, nombre: "Amoladora Bosch", descripcion: "Disco 4.5 pulgadas", precio: 85.00, stock: 8 },
    { id: 3, nombre: "Juego de Llaves", descripcion: "Acero cromo vanadio", precio: 45.00, stock: 0 },
];
let nextId = 4;

// OBTENER TODOS LOS PRODUCTOS
app.get("/api/productos", (req, res) => {
    res.status(200).json(productosDB);
});

// CREAR PRODUCTO
app.post("/api/productos", (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    const nuevoProducto = {
        id: nextId++,
        nombre,
        descripcion,
        precio: parseFloat(precio),
        stock: parseInt(stock, 10)
    };
    productosDB.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// EDITAR PRODUCTO
app.put("/api/productos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { nombre, descripcion, precio, stock } = req.body;
    const index = productosDB.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ message: "Producto no encontrado" });
    
    productosDB[index] = { ...productosDB[index], nombre, descripcion, precio: parseFloat(precio), stock: parseInt(stock, 10) };
    res.status(200).json(productosDB[index]);
});

// ELIMINAR PRODUCTO
app.delete("/api/productos/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    productosDB = productosDB.filter(p => p.id !== id);
    res.status(204).send();
});

// MOCK DATABASES para Categorías, Clientes y Ventas
let categoriasDB = [
    { id: 1, nombre: 'Power Tools', items: 142, icon: 'bolt' },
    { id: 2, nombre: 'Measuring', items: 86, icon: 'straighten' },
    { id: 3, nombre: 'Safety Gear', items: 310, icon: 'safety_check' },
    { id: 4, nombre: 'Hand Tools', items: 512, icon: 'handyman' },
];

let clientesDB = [
    { id: 1, nombre: 'Arjun Mehta', email: 'arjun.mehta@nexusbuilt.com', iniciales: 'AM', bgClass: 'bg-primary-container text-on-primary-container', tier: 'Enterprise', rentals: 12 },
    { id: 2, nombre: 'Sarah Lancaster', email: 'sarah.l@urbanrenovate.co', iniciales: 'SL', bgClass: 'bg-secondary-container text-on-secondary-container', tier: 'Standard', rentals: 4 },
    { id: 3, nombre: 'David Kim', email: 'dkim@freelancebuild.net', iniciales: 'DK', bgClass: 'bg-surface-container-highest text-primary', tier: 'Basic', rentals: 1 }
];

let ventasDB = [
    { id: '#TRX-9482', herramienta: 'Dewalt Hammer Drill DCD996', sku: 'DW-996-01', cliente: 'Arjun Mehta', monto: '$45.00', estado: 'Completed', estadoClase: 'bg-secondary-container text-on-secondary-container', estadoIcono: 'check_circle' },
    { id: '#TRX-9481', herramienta: 'Hilti TE-50 Rotary Hammer', sku: 'HL-TE50-X', cliente: 'Sarah Lancaster', monto: '$120.00', estado: 'Pending', estadoClase: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', estadoIcono: 'pending' },
    { id: '#TRX-9480', herramienta: 'Fluke 117 Electrician Multimeter', sku: 'FL-117-MM', cliente: 'David Kim', monto: '$25.00', estado: 'Completed', estadoClase: 'bg-secondary-container text-on-secondary-container', estadoIcono: 'check_circle' }
];

app.get("/api/categorias", (req, res) => {
    res.status(200).json(categoriasDB);
});

app.get("/api/clientes", (req, res) => {
    res.status(200).json(clientesDB);
});

app.get("/api/ventas", (req, res) => {
    res.status(200).json(ventasDB);
});

app.listen(PORT, () => {
    console.log("Servidor disponible en el puerto: " + PORT)
})