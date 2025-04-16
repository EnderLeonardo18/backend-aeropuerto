import express from 'express';
import cors from 'cors';
import { connectDB } from './database';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();


// Exportar la app configurada
export default app;
