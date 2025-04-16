import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Contacto } from './contacto.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  sexo: 'Masculino' | 'Femenino' | 'Otro';

  @Column()
  dni: string;

  @Column()
  fechaNacimiento: string;

  @Column()
  telefono: string;

  @Column({ default: 'Venezuela' })
  pais: string;

  @Column()
  estado: string;

  @Column({ unique: true })
  correoElectronico: string;

  @Column({ unique: true })
  nombreUsuario: string;

  @Column()
  password: string;

  @OneToMany(() => Contacto, contacto => contacto.user)
  contactos: Contacto[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
