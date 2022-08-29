import Koa from 'koa';
import { Server } from 'http';
import router from '@/router';
import accessLogMiddleware from '@/core/middleware/accessLogMiddleware';
import { startSequelize } from '@/core/db';

// Sequelize
startSequelize();

const app = new Koa();
app.use(accessLogMiddleware); // 访问日志中间件
app.use(router.routes()); // 注册项目路由

export const runServer = (port: number | string): Server => {
  return app.listen(port, () => {
    console.log('koa-api 启动成功');
  });
};
