// import { getRepository } from 'typeorm';
import AppDataSource from '../config/database';
import { Contacto } from '../models/contacto.model';

export const contactoService = {
  // CREAR
  create: async (data: Partial<Contacto>) => {
    const contactoRepo = AppDataSource.getRepository(Contacto);
    const contacto = contactoRepo.create(data);
    return await contactoRepo.save(contacto);
  },

  // BUSCAR
  getAll: async () => {
    const contactoRepo = AppDataSource.getRepository(Contacto);
    return await contactoRepo.find();
  },

  // BUSCAR POR ID
  getById: async (id: number) => {
    const contactoRepo = AppDataSource.getRepository(Contacto);
    return await contactoRepo.findOne({ where: { id } });
  },

  // ACTUALIZAR
  update: async (id: number, data: Partial<Contacto>) => {
    const contactoRepo = AppDataSource.getRepository(Contacto);
    const contacto = await contactoRepo.findOne({ where: { id } });
    if (!contacto){
      return null;  //Si no encuentra el contacto, retorna null
    }
     // Usa merge para combinar los datos del contacto con los datos proporcionados
    const updatedContacto = contactoRepo.merge(contacto, data);

    // Guarda el contacto actualizado
    await contactoRepo.save(updatedContacto);

    return updatedContacto;  // Retorna el contacto actualizado

  },

  // ELIMINAR
  delete: async (id: number) => {
    const contactoRepo = AppDataSource.getRepository(Contacto);
    const result = await contactoRepo.delete(id);
    return result.affected !== 0;
  }
};
