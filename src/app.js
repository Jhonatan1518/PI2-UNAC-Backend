import express from 'express'
import indexRoutes from './routes/index.routes'
import bodyParser  from "body-parser";
import cors from 'cors';

const app = express()
app.use(cors());
//routes
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(indexRoutes);


export default app;