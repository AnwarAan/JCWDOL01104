import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Room = sequelize.define(
  "room",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
    person: { type: DataTypes.INTEGER },

  },
  { timestamps: false }
);

export default Room;
