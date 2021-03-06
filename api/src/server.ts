import 'reflect-metadata'
import express from 'express';
import './database'
import { router } from './routes';

const app = express();

/*
GET: Obter dados
POST: 
DELETE: Excluir elementos
*/ 

app.use(express.json);

app.use(router);

app.listen(3333, () => console.log('Servidor rodando!'));