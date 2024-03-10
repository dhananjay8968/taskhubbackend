import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs } from './schema/todoSchema.js';
import { resolvers } from './resolvers/todoResolvers.js';
import { sequelize } from './utils/db.js';
import { Todo } from './models/todoModel.js';
// Configure dotenv for environment variables
dotenv.config();



async function startServer() {
    await sequelize.authenticate();
    await Todo.sync();

    const app = express();

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ models: { Todo } }),
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    const PORT = process.env.PORT; 
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
}

startServer();
