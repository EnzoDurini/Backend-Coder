import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils';
import productsRouter from './routes/products.router'
import usersRouter from './routes/users.router'
import viewsRouter from './routes/views.router'
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

//routes
app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('/', viewsRouter)

app.listen(8080,()=> {
    console.log('Listening on port 8080')
})