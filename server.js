const express = require("express");
const cors = require("cors");

const app = express();

// Configurar CORS correctamente para permitir el frontend en Render
app.use(cors({
  origin: "https://frontend-v5r2.onrender.com", // URL de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware para procesar JSON (importante si el backend recibe datos en JSON)
app.use(express.json());

// Ruta de prueba para ver si el backend responde
app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente.");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
