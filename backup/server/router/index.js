const Router = require('koa-router')
const Home = require('../controllers/home')
const Detail = require('../controllers/detail')

const router = new Router()
router.get('/api/flash', Home.flash)
router.get('/api/column', Home.column)
router.get('/api/detail', Detail.detail)

module.exports = router

