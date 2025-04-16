import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.services';
import { RequestHandler } from 'express';



// Tipo RequestHandler para mejor tipado
// type RequestHandler = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => Promise<void | Response>;

// CREAR
export const CrearUser: RequestHandler = async (req, res, next) => {
  // const { nombres, apellidos, correoElectronico, password } = req.body;

  try {
    // const user = await userService.createUser(nombres, apellidos, correoElectronico, password);
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
    next(error);
  }
};

// BUSCAR
export const getAllUsers: RequestHandler = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
    next(error);
  }
};

// BUSCAR POR ID
export const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (!user)
      // return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
    next(error);
  }
};

// ACTUALIZAR
export const updateUser: RequestHandler = async (req, res, next)=> {
  try {
    const updatedUser = await userService.updateUser(parseInt(req.params.id), req.body);
    if (!updatedUser)
      // return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error });
    next(error);
  }
};

// ELIMINAR
export const deleteUser : RequestHandler = async (req, res, next) => {
  try {
    const deleted = await userService.deleteUser(parseInt(req.params.id));
    if (!deleted)
      // return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error });
    next(error);
  }
};
