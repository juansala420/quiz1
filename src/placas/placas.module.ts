import { Module } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';

@Module({
  controllers: [PlacasController],
  providers: [PlacasService],
})
export class PlacasModule {}
