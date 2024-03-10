import { Sequelize } from "sequelize";
import { sequelize } from "../utils/db.js";

export const Todo = sequelize.define('Todo', {
    task: Sequelize.STRING,
    completed: Sequelize.BOOLEAN,
});