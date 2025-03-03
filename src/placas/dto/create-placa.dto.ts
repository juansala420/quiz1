import { IsString, IsInt, IsNotEmpty, Length } from 'class-validator';

export class CreatePlacaDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  placa: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsInt()
  modelo: number;

  @IsString()
  @IsNotEmpty()
  color: string;
}
