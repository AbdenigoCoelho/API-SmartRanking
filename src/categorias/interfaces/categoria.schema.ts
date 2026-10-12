import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriaDocument = Categoria & Document;

@Schema()
export class Evento {
  @Prop()
  nome!: string;

  @Prop()
  operacao!: string;

  @Prop()
  valor!: number;
}

export const EventoSchema = SchemaFactory.createForClass(Evento);

@Schema()
export class Categoria {
  @Prop({ unique: true })
  categoria!: string;

  @Prop()
  descricao!: string;

  @Prop({ type: [EventoSchema] })
  eventos!: Evento[];

  @Prop({ type: [String] })
  jogadores!: string[];
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
