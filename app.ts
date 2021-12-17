import Koa from 'koa';
import serve from 'koa-static';
import path from 'node:path';

const app = new Koa();
app
  .use(serve(path.join(path.resolve(), '/client/public')))
  .listen(3005, () => console.log('Koa is listening to http://localhost:3005'));

export default app;
