const express = require("express");
const cors = require("cors"); // Permitir solicitudes desde el cliente
const app = express();
const PORT = 3000;

// Configurar el middleware
app.use(cors());
app.use(express.json());

// Contraseña protegida
const ADMIN_PASSWORD = "10903cx";

// Ruta para validar la contraseña
app.post("/validate-password", (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    res.status(200).json({ success: true, message: "Acceso permitido" });
  } else {
    res.status(403).json({ success: false, message: "Código incorrecto" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
