export interface Jogador {
  readonly _id: string;
  readonly nome: string;
  readonly email: string;
  readonly telefoneCelular: string;
  ranking: number;
  posicao: number;
  urljogador: string;
}
