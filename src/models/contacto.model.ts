import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.models';

@Entity()
export class Contacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreCompleto: string;

  @Column()
  correoElectronico: string;

  @Column()
  telefono: string;

  @Column()
  fechaRegreso: string;

  @Column('text', { nullable: true })
  mensajes: string;

  @ManyToOne(() => User, user => user.contactos)
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
