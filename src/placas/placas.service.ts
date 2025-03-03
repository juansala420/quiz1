import { Injectable } from '@nestjs/common';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';

@Injectable()
export class PlacasService {
  create(createPlacaDto: CreatePlacaDto) {
    return 'This action adds a new placa';
  }

  findAll() {
    return `This action returns all placas`;
  }

  findOne(id: String) {
    return `This action returns a #${id} placa`;
  }

  update(id: number, updatePlacaDto: UpdatePlacaDto) {
    return `This action updates a #${id} placa`;
  }

  remove(id: String) {
    return `This action removes a #${id} placa`;
  }
}
