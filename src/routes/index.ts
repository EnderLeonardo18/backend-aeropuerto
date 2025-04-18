// routes/index.ts
import { Router } from 'express';
import { userRoutes } from './user.route';
import { contactoRoutes } from './contacto.route';

const router = Router();

// Montar las rutas
router.use('/api/user', userRoutes);
router.use('/api/contacto', contactoRoutes);

// Exportar el router unificado
export default router;
