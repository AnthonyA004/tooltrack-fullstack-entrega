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

app.listen(PORT, () => {
    console.log("Servidor disponible en el puerto: " + PORT)
})