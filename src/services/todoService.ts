import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { TodoRepository } from '../repositories/todoRepository';

declare module 'fastify' {
    interface FastifyInstance {
        todoService: TodoService
    }
}

class TodoService {

    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        this.todoRepository = todoRepository;
    }

    async createTodo(todoText: string) {
        const todo = this.todoRepository.addTodo(todoText);
        return todo;
    }

    async getAllTodos() {
        const todos = await this.todoRepository.getAllTodos();
        return todos;
    }

    async getTodoById(id: number) {
        const todo = await this.todoRepository.getOneTodo(id);
        return todo;
    }

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function todoService(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.decorate('todoService', new TodoService(fastify.todoRepository));
}

export default fastifyPlugin(todoService);