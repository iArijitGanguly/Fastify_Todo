import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import todoController from '../../controllers/todoController';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function todoRouter(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.post('/', todoController.addTodo);
    fastify.get('/', todoController.getAllTodos);
    fastify.get('/:id', todoController.getOneTodo);
}

export default todoRouter;