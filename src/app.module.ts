import { TypeOrmModule } from '@nestjs/typeorm';

TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'gestor_tareas',
  autoLoadEntities: true,
  synchronize: true, // Usar solo en desarrollo
});
