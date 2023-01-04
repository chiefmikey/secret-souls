import path from 'node:path';

import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();
app
  .use(serve(path.join(path.resolve(), '/docs')))
  .listen(3005, () => console.log('Koa is listening to http://localhost:3005'));

export default app;
