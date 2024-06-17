import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { TodoData } from '../interfaces/todoDataDefinition';

declare module 'fastify' {
    interface FastifyInstance {
        db: {
            todos: TodoData[]
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function db(fastify: FastifyInstance, _options: FastifyPluginOptions) {
    fastify.decorate('db', {
        todos: []
    });
}

export default fastifyPlugin(db);