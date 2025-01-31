const cors = require("cors");
const express = require("express");

const app = express();

// Habilitar CORS para el frontend en Render
const allowedOrigins = ["https://frontend-v5r2.onrender.com"];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// También podés permitir todos los orígenes (menos seguro)
// app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend funcionando correctamente.");
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
