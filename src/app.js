import express from 'express'
import indexRoutes from './routes/index.routes'
import exphbs from 'express-handlebars'
import path, { dirname } from 'path'

const app = express()

//routes
app.use(indexRoutes);

export default app;