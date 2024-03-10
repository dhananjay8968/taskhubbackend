export const typeDefs = `
type Todo {
    id: ID!
    task: String!
    completed: Boolean!
}

type Query {
    todos: [Todo!]!
}

type Mutation {
    createTodo(task: String!): Todo!
    updateTodo(id: ID!, completed: Boolean!): Todo!
    deleteTodo(id: ID!): Boolean!
}
`;

