import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT || '3306'),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [__dirname + '/../models/*.ts'],
  synchronize: true,  // ¡No usar en producción!
});

export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected successfully');
    console.log('Base de Datos Conectada Exitosamente');
  } catch (error) {
    console.error('Error Conexion de la Base de Datos', error);
  }
};



export default AppDataSource;
