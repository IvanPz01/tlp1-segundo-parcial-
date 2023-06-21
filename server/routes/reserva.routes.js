// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require("express").Router();
const {
  obtenerReservas,
  obtenerReserva,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/reservas", (req, res) => {
  res.render("../views/index.ejs");
});

router.get("/reserva/editar/:id", (req, res) => {
  const reservaId = req.params.id;
  res.render("reserva/editarReserva", { id: reservaId });
});

// Formulario para crear una reserva
router.get("/reserva/crear", (req, res) => {
  res.render("reserva/crear.ejs");
});

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api/reservas", obtenerReservas);

// Crear una reserva
router.post("/api/reserva", crearReserva);

// Actualizar una reserva
router.put("/api/reserva/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/reserva/:id", eliminarReserva);

module.exports = router;
