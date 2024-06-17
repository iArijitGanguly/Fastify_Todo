import fastify from 'fastify';

import app from './app';
import serverConfig from './configs/serverConfig';

const { PORT } = serverConfig;

const server = fastify();

server.register(app);

server.listen({ port: PORT }, (err) => {
    if(err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server started at PORT: ${PORT}`);
});