export interface Jogador {
  readonly _id: string;
  readonly nome: string;
  readonly email: string;
  readonly telefone: string;
  ranking: number;
  posicao: number;
  urljogador: string;
}