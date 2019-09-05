import Router from 'koa-router'

const routes = new Router()
routes.get('/', (ctx, next)=> {
  ctx.render({
    home:{
      title: 'node返回的title'
    }
  });
  next()
})
routes.get('/list', (ctx, next)=> {
  ctx.render({
    list: {
      list:[
        'node-react',
        'node-koa',
        'node-ssr'
      ]
    }
  });
  next();
})

export default routes


