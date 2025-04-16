import { Request, Response, NextFunction } from 'express';
import { contactoService } from '../services/contacto.services';
import { RequestHandler } from 'express';

// Tipo RequestHandler para mejor tipado
// type RequestHandler = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => Promise<void | Response>;


// CREAR
export const createContacto: RequestHandler = async (req, res, next) => {
  try {
    const contacto = await contactoService.create(req.body);
    res.status(201).json(contacto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el contacto', error });
    next(error);
  }
};

// BUSCAR
export const getAllContactos : RequestHandler = async (_req, res, next) => {
  try {
    const contactos = await contactoService.getAll();
    res.status(200).json(contactos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los contactos', error });
    next(error);
  }
};

// BUSCAR POR ID
export const getContactoById: RequestHandler = async (req, res, next) => {
  try {
    const contacto = await contactoService.getById(parseInt(req.params.id));
    if (!contacto)
      // return res.status(404).json({ message: 'Contacto no encontrado' });
      res.status(404).json({ message: 'Contacto no encontrado' });
    res.status(200).json(contacto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el contacto', error });
    next(error);
  }
};


// ACTUALIZAR
export const updateContacto: RequestHandler = async (req, res, next) => {
  try {
    const updatedContacto = await contactoService.update(parseInt(req.params.id), req.body);
    if (!updatedContacto)
      // return res.status(404).json({ message: 'Contacto no encontrado' });
      res.status(404).json({ message: 'Contacto no encontrado' });
    res.status(200).json(updatedContacto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el contacto', error });
    next(error);
  }
};


// ELIMINAR
export const deleteContacto : RequestHandler = async (req, res, next) => {
  try {
    const deleted = await contactoService.delete(parseInt(req.params.id));
    if (!deleted)
      // return res.status(404).json({ message: 'Contacto no encontrado' });
      res.status(404).json({ message: 'Contacto no encontrado' });
    res.status(200).json({ message: 'Contacto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el contacto', error });
    next(error);
  }
};
