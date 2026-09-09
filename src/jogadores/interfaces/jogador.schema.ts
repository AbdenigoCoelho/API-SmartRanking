import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JogadorDocument = Jogador & Document;

@Schema()
export class Jogador {
  @Prop()
  nome!: string;

  @Prop()
  telefoneCelular!: string;

  @Prop({ unique: true })
  email!: string;

  @Prop()
  ranking!: number;

  @Prop()
  posicao!: number;

  @Prop()
  urljogador!: string;
}

export const JogadorSchema = SchemaFactory.createForClass(Jogador);
