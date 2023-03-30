const app = require('./app/index')
const { APP_PORT } = require('./config/config.default')

app.listen(APP_PORT, () => {
  console.info(`http://127.0.0.1:${APP_PORT}`)
})


// const Koa = require('koa')
// const app = new Koa()
// app.use((ctx) => {
//   // write code here
// })
// app.listen(3000)