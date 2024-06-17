import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { DB } from '../interfaces/dbDefinition';

declare module 'fastify' {
    interface FastifyInstance {
        todoRepository: TodoRepository
    }
}

export class TodoRepository {

    private db: DB;

    constructor(db: DB) {
        this.db = db;
    }

    async addTodo(todoText: string) {
        const todoList = this.db.todos;
        this.db.todos.push({
            text: todoText,
            id: todoList.length
        });
        return this.db.todos;
    }

    async getAllTodos() {
        return this.db.todos;
    }

    async getOneTodo(id: number) {
        const todo = this.db.todos.find((todo) => todo.id == id);
        return todo;
    }

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function todoRepository(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.decorate('todoRepository', new TodoRepository(fastify.db));
}

export default fastifyPlugin(todoRepository);