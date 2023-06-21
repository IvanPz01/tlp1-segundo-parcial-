const ctrlReservas = {};
const CRUD = require("../models/Reserva");

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
  try {
    const reserva = await CRUD.findAll({
      where: {
        estado: true,
        usuarioId: req.usuario.id,
      },
    });

    if (!reserva || reserva.length === 0) {
      throw {
        status: 404,
        message: "No hay tareas registradas",
      };
    }

    return res.json(reserva);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Error interno del servidor",
    });
  }
};

// Obtener una reserva
ctrlReservas.obtenerReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const Reserva = await CRUD.findOne({
      where: {
        id,
        estado: true,
      },
    });

    if (!Reserva) {
      throw {
        status: 404,
        message: "No existe ninguna reserva",
      };
    }

    return res.json(Reserva);
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

// Crear una reserva
ctrlReservas.crearTarea = async (req, res) => {
  const { nombreYApellido, codeReser, Fecha } = req.body;

  try {
    const reservaCreate = await CRUD.create({
      nombreYApellido,
      codeReser,
      Fecha,
      reservaId: req.reservaCreate.id,
    });

    if (!reservaCreate) {
      throw {
        status: 400,
        message: "No se pudo crear la reserva",
      };
    }

    return res.json(reservaCreate);
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

// Actualizar una reserva
ctrlReservas.actualizarReserva = async (req, res) => {
  const { id } = req.params;
  const { nombreYApellido, codeReser, Fecha } = req.body;

  try {
    const reservaActualizada = await CRUD.update(
      {
        nombreYApellido,
        codeReser,
        Fecha,
      },
      {
        where: {
          id,
          estado: true,
        },
      }
    );

    if (!reservaActualizada) {
      throw {
        status: 400,
        message: "No se pudo actualizar la reserva",
      };
    }

    return res.json({
      message: "Tarea actualizada correctamente",
      reservaActualizada,
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const eliminarReserva = await CRUD.update(
      {
        estado: false,
      },
      {
        where: {
          id,
          estado: true,
        },
      }
    );

    if (!eliminarReserva) {
      throw {
        status: 400,
        message: "No se pudo eliminar la tarea",
      };
    }

    return res.json({
    eliminarReserva,
      message: "Tarea eliminada correctamente",
    });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
};

module.exports = ctrlReservas;
