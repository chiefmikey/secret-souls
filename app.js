/* eslint-disable compat/compat */
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import serve from 'koa-static';
import path from 'path';
// import submitRouter from './routes/submit.js';
// import './db/index.js';

const app = new Koa();
app
  .use(
    cors({
      origin: '*',
      methods: 'GET, POST',
      allowedHeaders: '*',
      exposedHeaders: '*',
    }),
  )
  .use(bodyParser())
  .use(serve(path.join(path.resolve(), '/client/public')));
// .use(submitRouter.routes())
// .use(submitRouter.allowedMethods());

app.listen(3005, () =>
  console.log(`Koa is listening to http://localhost:3005`),
);

export default app;
