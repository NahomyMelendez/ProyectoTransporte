// Ruta para login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const usuarios = leerJSON("usuarios");
  const user = usuarios.find(u => u.correo === email && u.password === password);
  if (user) {
    res.json({ ok: true, rol: user.rol, nombre: user.nombre });
  } else {
    res.status(401).json({ ok: false, error: "Credenciales incorrectas" });
  }
});

// Ruta para registro
app.post("/register", (req, res) => {
  const { nombre, correo, password } = req.body;
  const usuarios = leerJSON("usuarios");
  if (usuarios.find(u => u.correo === correo)) {
    return res.status(400).json({ ok: false, error: "Correo ya registrado" });
  }
  const nuevo = {
    id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1,
    nombre,
    correo,
    telefono: "",
    rol: "usuario",
    estado: "activo",
    password
  };
  usuarios.push(nuevo);
  fs.writeFileSync(path.join(__dirname, "data", "usuarios.json"), JSON.stringify(usuarios, null, 2));
  res.json({ ok: true });
});
// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta simple para probar que el servidor corre
app.get("/", (req, res) => {
  res.send("Servidor de transporte acuático funcionando ✅");
});


// Utilidad para leer JSON
function leerJSON(nombre) {
  const filePath = path.join(__dirname, "data", nombre + ".json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// Rutas para obtener datos
app.get("/usuarios", (req, res) => {
  res.json(leerJSON("usuarios"));
});

app.get("/viajes", (req, res) => {
  res.json(leerJSON("viajes"));
});

app.get("/reservas", (req, res) => {
  res.json(leerJSON("reservas"));
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});