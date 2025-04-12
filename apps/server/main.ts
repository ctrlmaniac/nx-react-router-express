import express, { Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import appConfig from './config';
import { join } from 'path';
import clientRequestsHandler from './helpers/clientRequestsHandler';

const app: Application = express();

app.disable('x-powered-by');
app.use(compression());
app.use(morgan('tiny'));

// include assets directory from the www app inside the client dir
app.use(
  '/assets',
  express.static(join(__dirname, 'www/client/assets'), {
    immutable: true,
    maxAge: '1y',
  })
);

// include the whole client dir from the www app
app.use(express.static(join(__dirname, 'www/client')));

// handle server side www app
clientRequestsHandler(join(__dirname, 'www/server/index.js'), app);

// Run the application
app.listen(appConfig.PORT, () => {
  console.log(`App listening at http://localhost:${appConfig.PORT}`);
});
