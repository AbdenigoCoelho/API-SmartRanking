import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];
  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`criaJogadorDto: ${JSON.stringify(criaJogadorDto)}`);

    const jogadorEncontrado = this.jogadores.find(
      (jogador) => jogador.email === criaJogadorDto.email,
    );

    if (jogadorEncontrado) {
      await this.atualizar(jogadorEncontrado, criaJogadorDto);
    } else {
      await this.criar(criaJogadorDto);
    }
  }

  private criar(criaJogadorDto: CriarJogadorDto): Promise<void> {
    return new Promise((resolve) => {
      const jogador: Jogador = {
        _id: Math.random().toString(36).substring(2, 15), // trocar por geração real de id (ex: uuid, ou deixado a cargo do banco)
        ranking: 0,
        posicao: 0,
        urljogador: '',
        ...criaJogadorDto,
      };
      this.logger.log(`jogador: ${JSON.stringify(jogador)}`);
      this.jogadores.push(jogador);
      resolve();
    });
  }

  private atualizar(
    jogadorEncontrado: Jogador,
    criaJogadorDto: CriarJogadorDto,
  ): Promise<void> {
    return new Promise((resolve) => {
      const index = this.jogadores.findIndex(
        (jogador) => jogador._id === jogadorEncontrado._id,
      );
      if (index !== -1) {
        this.jogadores[index] = {
          ...this.jogadores[index],
          ...criaJogadorDto,
        };
      }
      resolve();
    });
  }
}
