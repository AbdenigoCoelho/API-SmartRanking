# API SmartRanking

API REST desenvolvida com **NestJS + TypeScript**, criada para organizar **disputas entre competidores** e manter um **ranking** atualizado entre eles.

## Descrição

O projeto gerencia jogadores (competidores), categorias e desafios (partidas), com o objetivo de permitir que dois competidores se enfrentem, registrem o resultado da partida e tenham seu ranking recalculado automaticamente com base no histórico de resultados.

> Este projeto é baseado no framework [Nest](https://github.com/nestjs/nest).

## Status do projeto

🚧 Em desenvolvimento.

- [x] Módulo **jogadores** — criação e atualização de jogador
- [ ] Módulo **categorias**
- [ ] Módulo **desafios**
- [ ] Cálculo de **ranking**

## Tecnologias

- [NestJS](https://nestjs.com/)
- TypeScript
- Node.js
- ESLint + Prettier

## Pré-requisitos

- Node.js instalado
- npm

## Instalação

```bash
npm install
```

## Executando a aplicação

```bash
# desenvolvimento (com watch mode)
npm run start:dev

# produção
npm run build
npm run start:prod
```

A aplicação sobe, por padrão, na porta **8080**.

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run build` | Compila o projeto (via `nest build`) |
| `npm run start` | Inicia a aplicação |
| `npm run start:dev` | Inicia em modo desenvolvimento, recompilando a cada alteração |
| `npm run start:debug` | Inicia em modo debug com watch |
| `npm run start:prod` | Executa a versão já compilada (`dist/main`) |
| `npm run lint` | Roda o ESLint com correção automática |
| `npm run format` | Formata o código com Prettier |
| `npm run test` | Roda os testes unitários (Jest) |
| `npm run test:watch` | Testes unitários em modo watch |
| `npm run test:cov` | Testes unitários com relatório de cobertura |
| `npm run test:e2e` | Roda os testes end-to-end |

## Estrutura do módulo Jogadores

```
src/
└── jogadores/
    ├── dtos/
    │   └── criar-jogador.dto.ts
    ├── interfaces/
    │   └── jogador.interface.ts
    ├── jogadores.controller.ts
    ├── jogadores.module.ts
    └── jogadores.service.ts
```

## Endpoints

### Jogadores

| Método | Rota | Descrição |
|---|---|---|
| POST | `/api/v1/jogadores` | Cria um novo jogador, ou atualiza se o e-mail já existir |

Exemplo de requisição:

```bash
curl -X POST http://localhost:8080/api/v1/jogadores \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Fulano da Silva",
    "telefoneCelular": "11999999999",
    "email": "fulano@teste.com"
  }'
```

## Solução de problemas comuns

**`Error: Cannot find module '...dist\main'` ao rodar `npm run start:dev` ou `node dist/main`**

Geralmente causado pelo cache incremental do TypeScript (`tsconfig.build.tsbuildinfo`) ficar dessincronizado com a pasta `dist` — por exemplo, se `dist` for apagado manualmente mas o cache não. Solução:

```bash
rm tsconfig.build.tsbuildinfo   # ou Remove-Item no PowerShell
npm run build
```

## Licença

UNLICENSED — projeto de estudo/portfólio.