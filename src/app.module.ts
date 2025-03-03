import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placa } from './placas/entities/placa.entity'; // Ensure this path is correct and the file exists
import { PlacasModule } from './placas/placas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tu_usuario',
      password: 'tu_password',
      database: 'placas_db',
      entities: [Placa],
      synchronize: true,
    }),
    PlacasModule,
  ],
})
export class AppModule {}

