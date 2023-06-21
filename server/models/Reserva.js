// TODO: Crear modelo de datos de Reserva
const { sequelize, DataTypes } = require("../dataBase");

const Cliente = sequelize.define(
  "Cliente",
  {
    nombreYApellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codeReser: {
      type: DataTypes.INET,
      allowNull: false,
      unique: {
        args: true,
        messge: "El codigo de reserva ya existe",
      },
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "Cliente",
  }
);

Cliente.sync();

module.exports = Cliente;
