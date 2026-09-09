import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador, JogadorDocument } from './interfaces/jogador.schema';

@Injectable()
export class JogadoresService {
  private readonly logger = new Logger(JogadoresService.name);

  constructor(
    @InjectModel(Jogador.name)
    private readonly jogadorModel: Model<JogadorDocument>,
  ) {}

  async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
    this.logger.log(`criaJogadorDto: ${JSON.stringify(criaJogadorDto)}`);

    const jogadorEncontrado = await this.jogadorModel
      .findOne({ email: criaJogadorDto.email })
      .exec();

    if (jogadorEncontrado) {
      await this.atualizar(criaJogadorDto);
    } else {
      await this.criar(criaJogadorDto);
    }
  }

  private async criar(criaJogadorDto: CriarJogadorDto): Promise<void> {
    const jogadorCriado = new this.jogadorModel(criaJogadorDto);
    this.logger.log(`jogador criado: ${JSON.stringify(jogadorCriado)}`);
    await jogadorCriado.save();
  }

  private async atualizar(criaJogadorDto: CriarJogadorDto): Promise<void> {
    await this.jogadorModel
      .findOneAndUpdate(
        { email: criaJogadorDto.email },
        { $set: criaJogadorDto },
      )
      .exec();
  }
}
