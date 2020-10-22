import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors'; 

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes);
app.use(errorHandler)
app.use('/media', express.static(path.join(__dirname,'..', 'medias')))

app.listen(3333);