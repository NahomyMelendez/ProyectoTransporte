// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db"); // conexión a PostgreSQL
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta simple para probar que el servidor corre
app.get("/", (req, res) => {
  res.send("Servidor de transporte acuático funcionando ✅");
});

// Ruta para probar la conexión a la base de datos
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Consulta a PostgreSQL correcta:", result.rows[0]);
    res.json({
      ok: true,
      message: "Conexión a PostgreSQL exitosa",
      time: result.rows[0],
    });
  } catch (err) {
    console.error("❌ Error en /test-db:", err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});