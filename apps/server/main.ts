import express, { Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import appConfig from './config';
import { join } from 'path';

const app: Application = express();

app.disable('x-powered-by');
app.use(compression());
app.use(morgan('tiny'));

app.use(
  '/assets',
  express.static(join(__dirname, 'assets'), { immutable: true, maxAge: '1y' })
);

app.listen(appConfig.PORT, () => {
  console.log(`App listening at http://localhost:${appConfig.PORT}`);
});
