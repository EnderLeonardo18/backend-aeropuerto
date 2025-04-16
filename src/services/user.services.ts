import  AppDataSource from '../config/database'
import { User } from '../models/user.models';
import { hashPassword } from '../utils/hashUtils'; // Utilidad para encriptar contraseñas

export const userService = {

    // CREAR
    // createUser : async (nombres: string, apellidos: string, correoElectronico: string, password: string) => {

    createUser : async (data: Partial<User>) => {

      const { password, ...rest } = data;

      // Encriptar la contraseña antes de crear el usuario
      const hashedPassword = await hashPassword(password as string);

          // Crear un nuevo usuario con la contraseña encriptada
      const userRepo = AppDataSource.getRepository(User);
      // const user = userRepo.create(data);
      const user = userRepo.create({
        ...rest, // Desestructuramos el resto de los campos
        password: hashedPassword, // Asigna la contraseña encritada
      });
      return await userRepo.save(user);
    },

    // BUSCAR
    getAllUsers: async () => {
      const userRepo = AppDataSource.getRepository(User);
      return await userRepo.find();
    },

    // BUSCAR POR ID
    getUserById: async (id: number) => {
      const userRepo = AppDataSource.getRepository(User);
      return await userRepo.findOne({ where: { id}});
    },

    // Actualizar
    updateUser: async (id: number, data: Partial<User>) => {
      const userRepo = AppDataSource.getRepository(User);
      const user = await userRepo.findOne ({ where: { id}});
      if(!user){
        return null; // Si no encuentra el usuario, retorna null
      }
      // Usa merge para combinar los datos del user con los datos proporcionados
      const updatedUser = userRepo.merge(user, data);

      // Guarda el user actualizado
      await userRepo.save(updatedUser);
      return updatedUser; // Retorna el user actualizado
    },

    // ELIMINAR
    deleteUser: async (id: number) => {
      const userRepo = AppDataSource.getRepository(User);
      const result = await userRepo.delete(id);
      return result.affected !== 0;
    }

}

// export const userService = {
//   createUser
// }

