import express from 'express';
import {
  createContacto,
  getAllContactos,
  getContactoById,
  updateContacto,
  deleteContacto
}from '../controllers/contacto.controllers';

const router = express.Router();

// Crear un nuevo contacto
router.post('/', createContacto);

// Obtener todos los contactos
router.get('/', getAllContactos);

// Obtener un contacto por ID
router.get('/:id', getContactoById);

// Actualizar un contacto por ID
router.put('/:id', updateContacto);

// Eliminar un contacto por ID
router.delete('/:id', deleteContacto);

export { router as contactoRoutes };
