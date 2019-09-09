/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
const Koa = require('koa')
const path = require('path')
const fs = require('fs')
const router = require('./router')
const render = require('./render')

const resolve = file => path.resolve(__dirname, file)
const app = new Koa()
const env = process.env.NODE_ENV
const config = require('../build/config')[env]

const isPro = process.env.NODE_ENV === 'production'

let serverBundle
let template
let readyPromise

if (isPro) {
  // eslint-disable-next-line global-require
  serverBundle = require('../dist/js/server-bundle').default
  template = fs.readFileSync(resolve('../dist/server.tpl.html'), 'utf-8')
} else {
  readyPromise = require('../build/dev-server')(app, resolve('../app/index.html'))
}

router.get('*', async (ctx, next) => {
  if (isPro) {
    await render(ctx, serverBundle, template)
  } else {
    const { bundle, clientHtml } = await readyPromise
    await render(ctx, bundle, clientHtml)
  }
  next()
})

app.use(require('koa-static')(path.join(__dirname, '../dist')))

app.use(router.routes(), router.allowedMethods())

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.info(`node服务已启动，服务地址为：localhost:${config.port}`)
})
