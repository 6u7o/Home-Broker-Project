
# Home-Broker API

Esta é uma API Restfull que simula uma corretora de investimentos, sendo possível criar uma conta, adicionar fundos, comprar ações entre outras funcionalidades.


## Tecnolgias utilizadas no projeto

- Node
- Express
- Dotenv
- JWT
- Eslint
- Nodemon
- Supabase
- Docker
- Heroku
- Axios
- Mocha
- Chai
- Sinon



### Deploy da aplicação
 - [Home-Broker](https://home-broker.herokuapp.com)

### Swagger
 - [DOCS](https://home-broker.herokuapp.com/docs/)

### Para rodar localmente
```
git clone git@github.com:6u7o/Home-Broker-Project.git
```
```
cd Home-Broker-Project
```
```
npm install
```

mude o nome de ".env_example" para ".env"

```
npm run dev
```

 
### Banco de dados
![image](https://user-images.githubusercontent.com/92962445/180678206-0cb823ea-4640-4eb5-8a81-e65c615d044d.png)

Optei pelo supabase como meu banco de dados, por ser simples de usar e cumprir com as necessidades desse projeto. Ele é um bando em nuvem baseado em Postgres, e possui uma biblioteca com seus próprios de métodos de requisição.

### Desenvolvimento
  Criei os endpoints de Login e Cadastro, que não foram pedidos no desafio, para que o usuário siga um fluxo lógico ao fazer as requisições. Assim, quando é feito o login ou o cadastro é retornado um token, para possibilitar o acesso aos outros endpoints.
  
  Se o usuário fizer requisições para que especificam um ID de usuário, como depósito ou compra de ações, ele fica limitado à fazer apenas para seu próprio ID. Essa verificação é feita com base no token que possui.
  
  Para prover uma experiência mais realista utlizei a API aberta da AlphaVantage para popular a tabela de ações com informação atualizadas. Porém, a requisição não ficou dinâmica como eu queria e, para se encaixar no que foi proposto no desafio, fiz algumas mudanças nos dados recebidos. Como por exemplo, trocar a prorpiedade "volume" das ações, que representa número de ações negociadas por um certo período, por "quantidade disponível". 
  
  Por não estar acostumado à fazer projeto sem instruções claras, assim ficando por minha conta como, quando e com o que desenvolver, eu me atrapalhei um pouco na organização. Os commits, por exemplo, poderiam ter sido mais concisos, frequentes e descritivos. E eu deveria ter separado mais tempo para implementar os testes.
