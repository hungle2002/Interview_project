import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http, { Server } from 'http'
import router from './routes';
import middlewares from './middlewares';

const app = express();
app.disable('x-powered-by');

// app mounting
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routing
app.use('/api/v1/inventory', router);

// using middlewares
app.use(middlewares.notFoundMiddleware);
app.use(middlewares.errorHandleMiddleware);

/**
 * Set the port and run the server
 */
const port = Number(process.env.PORT || 7002);
app.set('port', port)
const server: Server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
}).on('error', (_error: Error) => {
  return console.log('Error: ', _error.message);
});

/**
 * Event listener for HTTP server "error" event.
 */
server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// Catch any missed exception
process.on('unhandledRejection', async (reason, promise) => {
  const error = await promise.catch((err) => err?.stack || err);
  console.log(`Unhandled Rejection at: ${error} reason: ${reason}`, 0);
});
