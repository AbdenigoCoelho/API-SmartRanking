import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CriarJogadorDto {
  @IsString()
  @IsNotEmpty()
  readonly nome!: string;

  @IsString()
  @IsNotEmpty()
  readonly telefoneCelular!: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email!: string;
}
