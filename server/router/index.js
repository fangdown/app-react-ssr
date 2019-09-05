import Router from 'koa-router'

const routes = new Router()
routes.get('/', (ctx, next)=> {
  ctx.render()
  next()
})
routes.get('/list', (ctx, next)=> {
  ctx.render();
  next();
})

export default routes


