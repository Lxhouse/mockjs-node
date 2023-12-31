const Koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock/index");

const app = new Koa();
const router = new Router();
const getRes = async (fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, 1000);
  });
};
mockList.forEach((element) => {
  const { url, method, response } = element || {};
  router[method](url, async (ctx) => {
    const res = await getRes(response);
    ctx.body = res;
  });
});

app.use(router.routes());
app.listen(3001);
