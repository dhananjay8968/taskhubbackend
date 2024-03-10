export const resolvers = {
    Query: {
        todos: async (_, __, { models }) => models.Todo.findAll(),
    },
    Mutation: {
        createTodo: async (_, { task }, { models }) => {
            return models.Todo.create({ task, completed: false });
        },
        updateTodo: async (_, { id, completed }, { models }) => {
            const todo = await models.Todo.findByPk(id);
            if (!todo) return null; // Or throw an error if you prefer

            todo.completed = completed;
            await todo.save();
            return todo;
        },
        deleteTodo: async (_, { id }, { models }) => {
            const todo = await models.Todo.findByPk(id);
            if (todo) {
                await todo.destroy();
                return true;
            }
            return false;
        },
    },
};