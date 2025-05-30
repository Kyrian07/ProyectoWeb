import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

export enum TaskStatus {
  SIN_ASIGNAR = 'SIN ASIGNAR',
  ASIGNADA = 'ASIGNADA',
  Analisis = 'ANALISIS',
  DESARROLLO = 'DESARROLLO',
  HOMOLOGACION = 'HOMOLOGACION',
  PRODUCCION = 'PRODUCCION',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  enteName: string;

  @Column()
  enteNumber: string;

  @Column({ nullable: true })
  crmNumber: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.SIN_ASIGNAR })
  status: TaskStatus;

  @ManyToOne(() => User, (user) => user.id)
  createdBy: User;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  assignedTo: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
