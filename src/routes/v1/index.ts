import { FastifyInstance, FastifyPluginOptions } from 'fastify';

import todoRouter from './todoRouter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function v1Router(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.register(todoRouter, { prefix: '/todos' });
}

export default v1Router;