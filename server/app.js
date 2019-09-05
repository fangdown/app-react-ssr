import React from 'react'
import Koa from 'koa'
import routes from './router/index'
import templating from './templating'

const app = new Koa()

app.use(templating)
app.use(routes.routes(), routes.allowedMethods())
app.listen(9000, ()=> {
  console.log(`app已启动，请访问http://localhost:9000`)
})