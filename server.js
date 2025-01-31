const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({ mensaje: "¡Hola desde el backend!" });
});

// 🚀 **SOLUCIÓN: Asegurar que Render use `process.env.PORT`**
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
