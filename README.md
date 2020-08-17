### Ecoleta

O Ecoleta é um marketplace de coleta de resíduos.
Ele permite o cadastramento de pontos de coletas (estabelecimentos) através da aplicação web.
O usuários que possuem itens residuais a serem coletados tem à disposição o app mobile para busca desses pontos de coleta.

![alt text](https://github.com/rocketseat-education/nlw-01-booster/blob/master/.github/ecoleta.png)

O Ecoleta foi uma aplicação utilizada na Next Level Week 1.0 da Rocketseat para ensinar na prática como desenvolver uma API RESTful com NodeJS, um front-end web com ReactJS e um app mobile com React Native.

- Além do Node foi utilizado Express e Knex para compor o back-end
- No front-end web foi utilizado React (react, react-router-dom, hooks)
- No app mobile foi utilizado Expo e React Native

Além de estudar essa stack de tecnologias aproveitei o projeto para praticar fluxo de utilização do Git e GitHub, fazendo uso de Branches semânticas, Commits bem estruturados e solicitações de Pull Request (neste caso para mim mesmo pois pratiquei sozinho).

### Requerimento/Dependências

- Todas as dependências devem ser instaladas com o gerenciador de pacotes NPM.
- Basta executar o comando ```npm install```

### Como Começar

#### Database
1. Execute o comando ```npm run knex:migrate``` para criar as tabelas
2. Execute o comando ```npm run knex:seed``` para popular a tabela **items** com os items que constam em *backend/src/database/seeds/create_items.ts*

#### Back-end (API)
- Utilize o comando ```npm run dev``` no terminal no diretório apropriado (/backend)
#### Front-end (Web)
- Para executar a aplicação web utilize o comando ```npm start``` em seu diretório (/frontend)
#### Mobile
1. Para executar o app mobile, acesse a store de seu dispositivo móvel e instale o aplicativo Expo.
2. Em seguida, abra um terminal e execute o comando ```expo start```. Então abra o app Expo e escaneie o QR Code.
3. Agora basta abrir o item mobile que aparecerá listado no Expo.

### Lançamentos Principais

- Busca por pontos de coleta através de UF e cidade
- Visualização dos pontos de coleta em mapa
- Filtragem de pontos de coleta por itens residuais (itens a serem coletados)
- Contato por Whatsapp ou e-mail com o ponto de coleta

### Funcionalidades Futuras
- Utilizar a API do IBGE para listar UFs e cidades nos campos de busca por pontos de coleta (mobile)

### Pendências
[] Corrigir sobreposição dos inputs nos textos na tela Home do app mobile (Android) - ???

### Licença e Créditos

- Todo o projeto foi idealizado pela @rocketseat e apresentado gratuitamente na Next Level Week 1.0 na trilha Booster pelo @diego3g
- Este repositório guarda a minha reprodução pessoal do projeto para fins exclusivamente didáticos
