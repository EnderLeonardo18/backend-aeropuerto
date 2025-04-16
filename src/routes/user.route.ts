import express from 'express';
import {
  CrearUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/user.controllers';



const router = express.Router();

// Crear un nuevo usuario
router.post('/', CrearUser);

// Obtener todos los usurios
router.get('/', getAllUsers);

// Obtener un usuario por ID
router.get('/:id', getUserById);

// Actualizar
router.put('/:id', updateUser);

// Eliminar un usuario por ID
router.delete('/:id', deleteUser);

export { router as userRoutes };
