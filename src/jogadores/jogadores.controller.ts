import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@ApiTags('jogadores')
@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo jogador, ou atualiza se o e-mail já existir',
  })
  async criarAtualizarJogador(
    @Body() criaJogadorDto: CriarJogadorDto,
  ): Promise<void> {
    await this.jogadoresService.criarAtualizarJogador(criaJogadorDto);
  }
}
