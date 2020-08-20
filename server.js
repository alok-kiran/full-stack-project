import express from 'express';
const server = express();
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'
import config from './config'
//import  serverRender from './ServerRender';
const PORT = config.port
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}))
server.set('view engine', 'ejs')

server.use('/api', apiRouter)

server.get('/', (req, res)=>{
  res.render('index', {
    content: 'hey bro ejs'
  })
})

server.use(express.static('public'))

server.listen(PORT,config.hostname, ()=>{
  console.info(`Server is running on the port ${PORT}`);
});