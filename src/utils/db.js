// Connect to the database using Sequelize
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize({
    url: process.env.DB_URI,
    dialect: 'postgres'
});
