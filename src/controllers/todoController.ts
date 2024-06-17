import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { todoId } from '../interfaces/todoIdDefinition';
import { todoText } from '../interfaces/todoTextDefinition';

async function addTodo(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    const todo = req.body as todoText;
    const response = await this.todoService.createTodo(todo.todoText);
    return res.status(201).send({
        success: true,
        message: 'Successfully created a new todo',
        error: {},
        data: response
    });
}

async function getAllTodos(this: FastifyInstance, _req: FastifyRequest, res: FastifyReply) {
    const response = await this.todoService.getAllTodos();
    return res.status(200).send({
        success: true,
        message: 'Successfully fetched all the todos',
        error: {},
        data: response
    });
}

async function getOneTodo(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    const todoId = req.params as todoId;
    const response = await this.todoService.getTodoById(todoId.id);
    return res.status(200).send({
        success: true,
        message: 'Successfully fetched the todo',
        error: {},
        data: response
    });
}

export default {
    addTodo,
    getAllTodos,
    getOneTodo
};