import './config/envConfig'; // Cargar y validar variables de entorno
import 'reflect-metadata';
// import express from 'express';
import router from './routes/index'
import app from './config/server';    // Configuración del servidor

app.use(router);


// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
