import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import db from './db';
import todoRepository from './repositories/todoRepository';
import apiRouter from './routes';
import todoServices from './services/todoService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function app(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    await fastify.register(db);
    await fastify.register(todoRepository);
    await fastify.register(todoServices);
    await fastify.register(apiRouter, { prefix: '/api' });
}

export default fastifyPlugin(app);