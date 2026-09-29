import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CriarJogadorDto {
  @ApiProperty({ description: 'Nome do jogador', example: 'João da Silva' })
  @IsString()
  @IsNotEmpty()
  readonly nome!: string;

  @ApiProperty({
    description: 'Telefone celular do jogador',
    example: '11999999999',
  })
  @IsString()
  @IsNotEmpty()
  readonly telefoneCelular!: string;

  @ApiProperty({
    description: 'E-mail do jogador (identificador único)',
    example: 'joao@teste.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email!: string;
}
